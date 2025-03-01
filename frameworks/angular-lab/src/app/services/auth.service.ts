import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Observable, Subject } from 'rxjs';

const Persistence_COOKIE: string = "angular-lab";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  
  private currentUser: User | null = null;
  private logged: boolean = false;
  private loggedSubject$ = new Subject<boolean>();
  private VALID_USERS: User[] = [];

  constructor() {
      this.getValidUsers();
   }

   async getValidUsers(): Promise<User[]> {
    const users = await fetch("data/valid-user.json")
    .then(response => response.json())
    .then((users: User[]) => this.VALID_USERS = users)
    .catch(() => this.VALID_USERS = []);
    return users;
   }

  login(loginUser: User): boolean{

    if (this.checkLogin(loginUser)) {
      this.setUser(loginUser);
      this.setPersistence();
      this.logged = true;
    }else {
      this.logged = false;
    }

    this.loggedSubject$.next(this.logged);

    return this.logged;
  }

  isLogged = ():boolean => this.logged;

  isLoggedObservable = (): Observable<boolean> => this.loggedSubject$.asObservable();

  getUsername = () => this.currentUser !== null ? this.currentUser.username : null;

  logout() {
    localStorage.removeItem(Persistence_COOKIE);
    this.setUser(null);
    this.logged = false;
    this.loggedSubject$.next(this.logged);
  }

  private checkLogin = (loginUser: User): boolean => this.VALID_USERS.some(({username, password}) => username === loginUser.username && password === loginUser.password);

  private setUser = (user: User | null):void => {this.currentUser = user ? { ...user } : null;};

  isPersistence = ():boolean => localStorage.getItem(Persistence_COOKIE) !== null

  getPersistence = (): string | null => localStorage.getItem(Persistence_COOKIE);

  //In a real case, would be a token in localstorage with necesary information to the api.
  private setPersistence = ():void => {
    const userName = this.getUsername();
    if (userName){
      localStorage.setItem(Persistence_COOKIE, userName);
    };
  }

  //In a real case, the information of the logged user would be sent to an api and then load data in the web.
  async setLoggedUserByPersistence(): Promise<void> {
    const persistedUser = this.getPersistence();
    if (persistedUser) {
      await this.getValidUsers();
      const user = this.VALID_USERS.find(user => user.username === persistedUser);
      if (user && !this.logged){
        this.setUser(user);
        this.logged = true;
        this.loggedSubject$.next(this.logged);
      }
    }
  }
}

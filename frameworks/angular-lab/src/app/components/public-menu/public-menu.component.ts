import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-public-menu',
  standalone: true,
  imports: [MatButtonModule, RouterModule],
  templateUrl: './public-menu.component.html',
  styleUrl: './public-menu.component.scss'
})
export class PublicMenuComponent {

}

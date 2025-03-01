import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-private-menu',
  standalone: true,
  imports: [MatButtonModule, RouterModule],
  templateUrl: './private-menu.component.html',
  styleUrl: './private-menu.component.scss'
})
export class PrivateMenuComponent {

}

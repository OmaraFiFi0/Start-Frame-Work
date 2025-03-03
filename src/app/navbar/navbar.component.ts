import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [RouterOutlet , RouterLink , RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {



  isNavbarOpen = false;

  toggleNavbar():void {
    this.isNavbarOpen = !this.isNavbarOpen;
    console.log(this.isNavbarOpen)
  }

}

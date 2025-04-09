import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from "./navbar/navbar.component";
import { AboutComponent } from "./about/about.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HomeComponent, NavbarComponent, AboutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Portfolio';
}

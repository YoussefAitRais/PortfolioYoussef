import { Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';

// 
 
export const routes: Routes = [
    {
      path: '',
    //   redirectTo: 'home', 
    //   pathMatch: 'full'
    component: HomeComponent
    },
    {
      path: 'navbar',
      component: NavbarComponent
    },
    {
      path: 'home',
      component: HomeComponent
    },
    {
      path: 'about',
      component: AboutComponent
    },
    {
      path: 'projects',
      component: ProjectsComponent
    },
    {
      path: 'contact',
      component: ContactComponent
    },
    {
      path: 'footer',
      component: FooterComponent
    }
];

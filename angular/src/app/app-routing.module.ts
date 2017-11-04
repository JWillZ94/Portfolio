import { BrowserModule } from '@angular/platform-browser'; // default
import { NgModule } from '@angular/core'; // default
import { RouterModule, Routes } from '@angular/router'; // enables creating routes for my site

import { AboutComponent } from './components/about/about.component'; // imports to enable this as a route
import { ContactComponent } from './components/contact/contact.component'; // imports to enable this as a route
import { HomeComponent } from './components/home/home.component'; // enables the home as a route

const routes: Routes = [
  {
    path: '',
    component: HomeComponent // Goes to main page in AppComponent by default
  },
  {
    path: 'about',
    component: AboutComponent // Goes to my about page
  },
  {
    path: 'contact',
    component: ContactComponent // Goes to my contact page
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ], // imports RouterModule
  exports: [ RouterModule ] // exports RouterModule
})
export class AppRoutingModule { } // Exports this to be used by AppModule

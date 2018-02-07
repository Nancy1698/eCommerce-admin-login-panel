import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BsFooterComponent } from './bs-footer/bs-footer.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';






@NgModule({
  imports: [
    CommonModule,
    NgbModule.forRoot(),
    RouterModule.forChild([
      {path:'', component:HomeComponent},
      {path:'about', component:AboutComponent},
      {path:'contact', component:ContactComponent},
      {path:'login', component:LoginComponent}
    ])
  ],
  declarations: [
    BsNavbarComponent,
    HomeComponent,
    AboutComponent,
    BsFooterComponent,
    ContactComponent,
    LoginComponent
  ],
  exports : [
    BsNavbarComponent
  ],
  providers: [
    
  ]
})
export class CoreModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage.component';
import { HeaderComponent } from './header/header.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ContactComponent } from './contact/contact.component';
import { MatToolbarModule } from '@angular/material/toolbar';



@NgModule({
  declarations: [
    HomepageComponent,
    HeaderComponent,
    AboutMeComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule
  ]
})
export class HomepageModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { ComponentHeroesComponent } from './component-heroes/component-heroes.component';
import { HeroComponentComponent } from './hero-component/hero-component.component';
import { HeroDetailsComponent } from './hero-details/hero-details.component';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [AppComponent, ComponentHeroesComponent, HeroComponentComponent, HeroDetailsComponent, MessagesComponent, DashboardComponent, NavbarComponent ],
  imports: [BrowserModule,FormsModule,AppRoutingModule],
  exports: [AppComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

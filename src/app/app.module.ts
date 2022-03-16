import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { ComponentHeroesComponent } from './component-heroes/component-heroes.component';
import { HeroComponentComponent } from './hero-component/hero-component.component';

@NgModule({
  declarations: [AppComponent, ComponentHeroesComponent, HeroComponentComponent ],
  imports: [BrowserModule,FormsModule],
  exports: [AppComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

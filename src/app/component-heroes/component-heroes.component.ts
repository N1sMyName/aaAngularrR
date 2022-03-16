import { Component, OnInit  } from '@angular/core';
import { Hero } from '../hero'


@Component({
  selector: 'app-component-heroes',
  templateUrl: './component-heroes.component.html',
  styleUrls: ['./component-heroes.component.sass']
})
export class ComponentHeroesComponent  {

  hero:Hero = {id:1,name:'RandomHero'}
  
}

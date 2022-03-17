import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero'
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service'; 
@Component({
  selector: 'app-hero-component',
  templateUrl: './hero-component.component.html',
  styleUrls: ['./hero-component.component.sass']
})
export class HeroComponentComponent  {
  // Provider
  // selectedHero?:Hero
  
  heroes:Hero[] = []
  
  constructor(private heroService: HeroService,private messageService: MessageService) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  // onSelect(hero:Hero): void {
  //   this.selectedHero = hero;
  //   this.messageService.add(`Selected hero - id:${hero.id} name:${hero.name} `)
  // }

  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }
  

  
}

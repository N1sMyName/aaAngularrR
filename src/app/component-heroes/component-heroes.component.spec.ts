import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentHeroesComponent } from './component-heroes.component';

describe('ComponentHeroesComponent', () => {
  let component: ComponentHeroesComponent;
  let fixture: ComponentFixture<ComponentHeroesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentHeroesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentHeroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

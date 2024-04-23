import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeDeleteComponent } from './recipe-delete.component';

describe('RecipeDeleteComponent', () => {
  let component: RecipeDeleteComponent;
  let fixture: ComponentFixture<RecipeDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipeDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

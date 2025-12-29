import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploreProblemsComponent } from './explore-problems.component';

describe('ExploreProblemsComponent', () => {
  let component: ExploreProblemsComponent;
  let fixture: ComponentFixture<ExploreProblemsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExploreProblemsComponent]
    });
    fixture = TestBed.createComponent(ExploreProblemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

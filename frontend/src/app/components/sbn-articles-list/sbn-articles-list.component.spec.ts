import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SbnArticlesListComponent } from './sbn-articles-list.component';

describe('SbnArticlesListComponent', () => {
  let component: SbnArticlesListComponent;
  let fixture: ComponentFixture<SbnArticlesListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SbnArticlesListComponent]
    });
    fixture = TestBed.createComponent(SbnArticlesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

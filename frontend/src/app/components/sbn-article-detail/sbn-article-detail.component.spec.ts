import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SbnArticleDetailComponent } from './sbn-article-detail.component';

describe('SbnArticleDetailComponent', () => {
  let component: SbnArticleDetailComponent;
  let fixture: ComponentFixture<SbnArticleDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SbnArticleDetailComponent]
    });
    fixture = TestBed.createComponent(SbnArticleDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

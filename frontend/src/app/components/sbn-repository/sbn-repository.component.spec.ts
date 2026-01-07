import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SbnRepositoryComponent } from './sbn-repository.component';

describe('SbnRepositoryComponent', () => {
  let component: SbnRepositoryComponent;
  let fixture: ComponentFixture<SbnRepositoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SbnRepositoryComponent]
    });
    fixture = TestBed.createComponent(SbnRepositoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

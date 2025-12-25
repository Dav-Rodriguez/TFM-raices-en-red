import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComunidadComponent } from './dashboard-comunidad.component';

describe('DashboardComunidadComponent', () => {
  let component: DashboardComunidadComponent;
  let fixture: ComponentFixture<DashboardComunidadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardComunidadComponent]
    });
    fixture = TestBed.createComponent(DashboardComunidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

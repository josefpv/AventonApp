import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OtroPage } from './otro.page';

describe('OtroPage', () => {
  let component: OtroPage;
  let fixture: ComponentFixture<OtroPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(OtroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

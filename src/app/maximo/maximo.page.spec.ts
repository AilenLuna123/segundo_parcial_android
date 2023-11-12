import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MaximoPage } from './maximo.page';

describe('MaximoPage', () => {
  let component: MaximoPage;
  let fixture: ComponentFixture<MaximoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MaximoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

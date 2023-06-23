import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BowserPage } from './bowser.page';

describe('BowserPage', () => {
  let component: BowserPage;
  let fixture: ComponentFixture<BowserPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BowserPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

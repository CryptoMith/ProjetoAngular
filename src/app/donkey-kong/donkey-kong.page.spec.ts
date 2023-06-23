import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DonkeyKongPage } from './donkey-kong.page';

describe('DonkeyKongPage', () => {
  let component: DonkeyKongPage;
  let fixture: ComponentFixture<DonkeyKongPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DonkeyKongPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

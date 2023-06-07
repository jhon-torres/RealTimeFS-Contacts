import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MakeContactPage } from './make-contact.page';

describe('MakeContactPage', () => {
  let component: MakeContactPage;
  let fixture: ComponentFixture<MakeContactPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MakeContactPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

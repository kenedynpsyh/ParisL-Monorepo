import { ComponentFixture, TestBed } from '@angular/core/testing';
import TestComponentModule from '../../test-component.module';

import { InputDialogComponent } from './input-dialog.component';

describe('InputDialogComponent', () => {
  let component: InputDialogComponent;
  let fixture: ComponentFixture<InputDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestComponentModule],
      declarations: [InputDialogComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(InputDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

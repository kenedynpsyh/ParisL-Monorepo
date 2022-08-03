import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { NzDropdownMenuComponent } from 'ng-zorro-antd/dropdown';
import { UserEffect } from '../../services/effects/user-effect';
import { UIComponentModule } from '../../services/prefix/ui-component';
import { messageReducer } from '../../store/reducers/message-reducer';
import { userReducer } from '../../store/reducers/user-reducer';
import { NavbarComponent } from './navbar.component';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        UIComponentModule,
        StoreModule.forRoot({
          user: userReducer,
          message: messageReducer,
        }),
        EffectsModule.forRoot([UserEffect]),
      ],
      declarations: [NavbarComponent, NzDropdownMenuComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

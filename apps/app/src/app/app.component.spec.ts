import { APP_BASE_HREF } from '@angular/common';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { PrefixComponentModule } from './services/prefix/prefix-component.module';
import { UIComponentModule } from './services/prefix/ui-component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, UIComponentModule, PrefixComponentModule],
      declarations: [AppComponent],
      providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'app'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('app');
  });
});

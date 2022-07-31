import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import cookies from 'cookies-js';

@Injectable({
  providedIn: 'root',
})
export class GuardService implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | Observable<boolean> | Promise<boolean> {
    return Boolean(cookies.get('kaize::token'));
  }
}

@Injectable({
  providedIn: 'root',
})
export class PublicGuardService implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | Observable<boolean> | Promise<boolean> {
    return !Boolean(cookies.get('kaize::token'));
  }
}

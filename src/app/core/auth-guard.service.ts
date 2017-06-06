import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate, CanActivateChild } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuardService implements CanActivate, CanActivateChild {

  constructor(private authService: AuthService, private router: Router) {

  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    let url = state.url;
    console.log(route, state);

    let r = route.root;
    let ps = [];

    while (r) {
      if (r.routeConfig) {
        ps.push(r.routeConfig.path);
      }
      if (r.children && r.children.length > 0) {
        let arss: ActivatedRouteSnapshot[] = r.children.filter(z => z.outlet == 'primary');
        r = arss[0];
      } else {
        r = null;
      }
    }
    console.log(ps.join('/'));
    return this.checkLogin(url);
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.canActivate(route, state);
  }

  checkLogin(url): boolean {
    if (this.authService.isLoggedIn) {
      return true;
    }
    this.authService.redirectUrl = url;
    this.router.navigate(['login']);
    return false;
  }

}

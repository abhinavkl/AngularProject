import { Injectable } from '@angular/core';
import { CanMatch, Route, Router, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class CanloadService implements CanMatch {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }
  canMatch(route: Route, segments: UrlSegment[]): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    const r = (route as any)
      console.log(r)
      var authType = r.data.isAuthenticated ?? false
      if (this.authService.isAuthenticated == authType)
      return true;
      if (authType)
        this.router.navigate(['/auth/login'])
      else
        this.router.navigate(['/access-denied'])
      return false;
    }
}

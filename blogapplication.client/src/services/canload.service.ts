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
    var authType = r.data.authenticated ?? false
    if (this.authService.authenticated.value == authType)
        return true;
      if (authType)
        this.router.navigate(['/auth/login'])
      else
        this.router.navigate(['/access-denied'])
      return false;
    }
}

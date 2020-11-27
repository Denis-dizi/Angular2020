import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccessManagmentGuard implements CanActivate {
  // (1:15:) W10D1
  constructor(
    private http: HttpClient,
    // (1:23:)W10D1
    private router: Router
  ) { }

  async canActivate( //(1:20:)W10D1
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ) {
    // (1:15:) W10D1
    // this.http.get('http://localhost/web/api/users/hasAccess.php').toPromise()
    // (1:20:) W10D1
    const hasAccess = await this.http.get('http://localhost/web/api/users/hasAccess.php')
      .toPromise().then((response: any) => {
        return response.has_access
      });

    console.log(hasAccess);

    if (hasAccess) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
} 
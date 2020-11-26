import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccessManagmentGuard implements CanActivate {
  // (1:15:) W10D1
  constructor(
    private http: HttpClient
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // (1:15:) W10D1
    this.http
    .get('http://localhost/web/api/users/hasAccess.php')
    .toPromise()


    return true;
  }

}

import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CommonService } from './common.service';

@Injectable({
  providedIn: 'root'
})
export class OppositeAuthGuard implements CanActivate {
  constructor(private commonService: CommonService,private route: Router){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      var token = this.commonService.getToken();
      if(token)
        return true;
        else{
          this.route.navigateByUrl('/signup');
          return false;
        }
        
  }
  
}

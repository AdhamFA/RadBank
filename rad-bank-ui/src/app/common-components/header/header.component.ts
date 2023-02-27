import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(private _router: Router, private _auth: AuthService) {}

  isAuthenticated(): Observable<boolean> {
    return this._auth.isLoggedIn$;
  }

  signOut() {
    this._auth.signOut();
    this._router.navigate(['/']);
  }
}

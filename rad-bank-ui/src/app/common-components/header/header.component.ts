import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { signIn, signOut } from 'src/app/store/actions/user.actions';
import { loggedInSelector } from 'src/app/store/selectors';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isLoggedIn$: Observable<boolean>;
  constructor(private _store: Store, private _router: Router,) {
    this.isLoggedIn$ = this._store.pipe(select(loggedInSelector))
  }

  ngOnInit(): void {
  }

  signOut() {
    this._store.dispatch(signOut());
    this._router.navigate(["/"]);
  }
}
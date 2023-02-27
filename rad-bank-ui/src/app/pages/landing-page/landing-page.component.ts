import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { signIn } from 'src/app/store/user.actions';
import { isLoadingSelector } from 'src/app/store/selectors';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  isLoading$: Observable<boolean>;
  constructor(private _store: Store) {
    this.isLoading$ = this._store.pipe(select(isLoadingSelector))
  }

  ngOnInit(): void {
  }

}

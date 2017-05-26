import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Store } from '@ngrx/store';

import { LOAD_CLASSES } from './store/classesReducer';


@Injectable()
export class ClassService {

  constructor(private http: Http, private store: Store<any>) {}

  getClasses(): void {
    this.http.get('http://localhost:9000/api/classes').map(res => res.json())
    .subscribe(payload => this.store.dispatch({ type: LOAD_CLASSES, payload}));
  }

}

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class ClassService {

  constructor(private http: Http) {}

  getClasses(): Observable<any> {
    return this.http.get('http://localhost:9000/api/classes').map(res => res.json());
  }

}

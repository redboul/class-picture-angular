import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {Store} from '@ngrx/store';
import { ClassService } from '../class.service';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  private classes: Observable<any[]>;

  constructor(private classService: ClassService, private store: Store<any[]>) {
    this.classes = store.select('classes');
  }

  ngOnInit() {
    this.classService.getClasses();
  }
}

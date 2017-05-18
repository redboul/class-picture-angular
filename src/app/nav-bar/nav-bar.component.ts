import { Component, OnInit } from '@angular/core';
import { ClassService } from '../class.service';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  private classes: Array<any> = [];

  constructor(private classService: ClassService) {}

  ngOnInit() {
    console.log('ngOnInit');
    this.classService.getClasses().subscribe(classes => {
      this.classes = classes;
      console.log('retrieving classes!', classes);
    });
  }
}

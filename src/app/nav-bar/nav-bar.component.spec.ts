import { Observable } from 'rxjs/Observable';
import { DebugElement } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/observable/of';
import { By } from '@angular/platform-browser';

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassService} from '../class.service';
import { NavBarComponent } from './nav-bar.component';

describe('NavBarComponent', () => {
  let component: NavBarComponent;
  let fixture: ComponentFixture<NavBarComponent>;
  let de: DebugElement;
  const mockClassService = jasmine.createSpyObj('ClassService', ['getClasses']);

  beforeEach(async(() => {
    const classes = [{name: 'cp', path: '/ce'}];
    mockClassService.getClasses.and.returnValue(Observable.of(classes));
    TestBed.configureTestingModule({
      declarations: [ NavBarComponent ],
      providers: [ {provide: ClassService, useValue: mockClassService } ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  fit('should create nav bar', async(() => {
    fixture.whenStable().then(() => {
      fixture.detectChanges();

      de = fixture.debugElement.query(By.css('.navBar .navBar-logo'));
      const el = de.nativeElement;
      expect(el.textContent.trim()).toEqual('Ecole Primaire Jeanne Labourbe');
    });
  }));
});

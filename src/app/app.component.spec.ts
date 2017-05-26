import { DebugElement, Component } from '@angular/core';
import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { AppComponent } from './app.component';
import { ClassService } from './class.service';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent,
        NavBarStubComponent
      ]
    }).compileComponents();
  }));

  let app, de: DebugElement;

  beforeEach(() => {
    const fixture = TestBed.createComponent(AppComponent);
    de = fixture.debugElement;
    app = de.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', async(() => {
    expect(app).toBeTruthy();
    expect(app.title).toEqual('app works!');
    expect(de.query(By.css('.nav-bar')).nativeElement.textContent).toEqual('Nav');
  }));
});

@Component({
  selector: 'nav-bar',
  template: '<div class="nav-bar">Nav</div>'
})
class NavBarStubComponent {}
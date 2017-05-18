import { HttpModule, Http, Response, ResponseOptions, XHRBackend, RequestMethod } from '@angular/http';
import { TestBed, inject } from '@angular/core/testing';
import { MockBackend } from '@angular/http/testing';

import { ClassService } from './class.service';

describe('ClassService', () => {
  let mockBackend: MockBackend;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [
        MockBackend,
        ClassService
      ]
    });
  });
  beforeEach(() => {
    mockBackend = TestBed.get(MockBackend);
  });

  it('should retrieve classe', inject([ClassService], (service: ClassService) =>
    inject([ClassService], (classService) => {
      const classes = [{ name: 'Paris' }, { name: 'Tokyo' }, { name: 'Lyon' }];
      const response = new Response(new ResponseOptions({ body: classes }));
      mockBackend.connections.subscribe(connection => {
        expect(connection.request.url)
          .toBe('http://localhost:9000/api/classes', 'The service should build the correct URL for a GET');
        expect(connection.request.method).toBe(RequestMethod.Get);
        expect(connection.request.headers.get('Authorization')).toBeNull();
        connection.mockRespond(response);
      });
      classService.getClasses().subscribe((classesResult) => {
        expect(classesResult).toBe(classes);
      });
    })
  ));
});

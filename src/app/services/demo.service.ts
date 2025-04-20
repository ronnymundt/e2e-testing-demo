import { Injectable } from '@angular/core';
import { delay, Observable, of, take } from 'rxjs';
import { HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DemoService {
  fakeHttpRequest(): Observable<HttpResponse<unknown>> {
    return of(new HttpResponse({ status: 200, body: 'fake response' })).pipe(
      delay(4000),
      take(1),
    );
  }
}

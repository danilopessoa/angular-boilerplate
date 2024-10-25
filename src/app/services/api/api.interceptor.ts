import {
  HttpEvent,
  HttpEventType,
  HttpHandlerFn,
  HttpInterceptorFn,
  HttpRequest
} from '@angular/common/http';
import { Observable, tap } from 'rxjs';

export const apiInterceptor: HttpInterceptorFn = (
  req: HttpRequest<unknown>,
  next: HttpHandlerFn
): Observable<HttpEvent<unknown>> => {
  const newRequest = req.clone({
    setHeaders: {
      Authorization: ''
    }
  });

  return next(newRequest).pipe(
    tap({
      next: (event) => {
        if (event.type === HttpEventType.Response) {
          console.info(req.url, 'returned a response with status', event.status);
        }
      },
      error: (error) => {
        console.info('Request failed', error);
      }
    })
  );
};

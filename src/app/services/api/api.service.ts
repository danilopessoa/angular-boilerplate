import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private http: HttpClient = inject(HttpClient);
  private readonly API: string | null = environment.API_HOST;

  public get<T>(endpoint: string): Observable<T> {
    return this.http.get(`${this.API}/${endpoint}`, {
      headers: this.getHeaders(),
      observe: 'response'
    }) as Observable<T>;
  }

  public post<T, IData>(endpoint: string, data: IData): Observable<T> {
    return this.http.post(`${this.API}/${endpoint}`, data, {
      headers: this.getHeaders(),
      observe: 'response'
    }) as Observable<T>;
  }

  public put<T, IData>(endpoint: string, data: IData): Observable<T> {
    return this.http.put(`${this.API}/${endpoint}`, data, {
      headers: this.getHeaders(),
      observe: 'response'
    }) as Observable<T>;
  }

  public delete<T>(endpoint: string): Observable<T> {
    return this.http.delete(`${this.API}/${endpoint}`, {
      headers: this.getHeaders(),
      observe: 'response'
    }) as Observable<T>;
  }

  private getHeaders(): HttpHeaders {
    // const headers = new HttpHeaders();
    // const token = this.tokenService.getToken();
    // if (token) {
    //   headers.set('Authorization', `Bearer ${token}`);
    // }

    return new HttpHeaders();
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';


import { IPhoto } from './iphoto'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private photoUrl = 'api/v1/photos';

  constructor(
    private http: HttpClient
  ) { }

  showPhoto(id: string): Observable<IPhoto>{
    return this.http.get<IPhoto>(`${this.photoUrl}/${id}`)
    .pipe(
      catchError(this.handleError<IPhoto>('showPhoto', {} as IPhoto))
    );
  }

  getPhotoList(): Observable<IPhoto[]> {
    return this.http.get<IPhoto[]>(`${this.photoUrl}/list`)
    .pipe(
      catchError(this.handleError<IPhoto[]>('getPhotoList', []))
    );
  }

  postPhoto(formData: FormData): Observable<IPhoto>{
    return this.http.post<IPhoto>(`${this.photoUrl}/create`, formData)
    .pipe(
      catchError(this.handleError<IPhoto>('postPhoto', {} as IPhoto))
    );
  }

  putPhoto(formData: FormData, id: string): Observable<IPhoto>{
    return this.http.put<IPhoto>(`${this.photoUrl}/update/${id}`, formData)
    .pipe(
      catchError(this.handleError<IPhoto>('putPhoto', {} as IPhoto))
    );
  }

  deletePhoto(id: string): Observable<any>{
    return this.http.delete<any>(`${this.photoUrl}/delete/${id}`)
    .pipe(
      catchError(this.handleError<any>('deletePhoto', {}))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result);
    };
  }
}

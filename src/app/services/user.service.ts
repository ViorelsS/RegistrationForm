import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { UserData } from 'src/app/interfaces/user-data';
import { environment } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: `Bearer ${environment.gorest_token}`,
  }),
};
@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = 'https://gorest.co.in/public/v2/users';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<UserData[]> {
    return this.http.get<UserData[]>(this.apiUrl);
  }

  addUser(user: UserData): Observable<UserData> {
    return this.http.post<UserData>(this.apiUrl, user, httpOptions);
  }

  deleteUser(user: UserData): Observable<UserData> {
    const url = `${this.apiUrl}/${user.id}`;
    return this.http.delete<UserData>(url);
  }

  updateUserStatus(user: UserData): Observable<UserData> {
    const url = `${this.apiUrl}/${user.id}`;
    return this.http.put<UserData>(url, user, httpOptions);
  }
}

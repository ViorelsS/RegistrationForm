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

  //GET A LIST OF USERS
  getUsers(): Observable<UserData[]> {
    return this.http.get<UserData[]>(this.apiUrl);
  }

  //GET A SPECIFIC USER BY IT'S ID
  getSpecificUser(id: number): Observable<UserData> {
    return this.http.get<UserData>(`${this.apiUrl}/${id}`);
  }

  //ADD USER -->Id is assigned automatically by the api (incremental)
  addUser(user: UserData): Observable<UserData> {
    return this.http.post<UserData>(this.apiUrl, user, httpOptions);
  }

  //Delete a user by it's ID
  deleteUser(user: UserData): Observable<UserData> {
    //We're passing all the data but can be performed also passing only the id
    const url = `${this.apiUrl}/${user.id}`;
    return this.http.delete<UserData>(url);
  }

  //Toggle user's status on dblClick
  updateUserStatus(user: UserData): Observable<UserData> {
    const url = `${this.apiUrl}/${user.id}`;
    return this.http.put<UserData>(url, user, httpOptions);
  }
}

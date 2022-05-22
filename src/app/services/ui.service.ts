import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UiService {
  private showUsersList: boolean = false;
  private subject = new Subject<any>();

  constructor() {}

  toggleUsersList(): void {
    this.showUsersList = !this.showUsersList;
    this.subject.next(this.showUsersList);
  }

  onToggle(): Observable<any> {
    return this.subject.asObservable();
  }
}

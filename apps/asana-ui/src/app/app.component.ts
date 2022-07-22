import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message } from '@asana-app/api-interfaces';

@Component({
  selector: 'asana-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  hello$ = this.http.get<Message>('/api/hello');
  constructor(private http: HttpClient) {}
}

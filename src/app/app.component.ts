import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Ofertas', url: '/folder/Ofertas', icon: 'mail' },
    { title: 'Favoritos', url: '/folder/Favoritos', icon: 'heart' },
  ];
  //public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}

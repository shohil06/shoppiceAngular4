import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  clickedNav: string;
  isDiplay(event){
    // console.log(event);
    this.clickedNav = event.reciClick;
    // console.log(this.clickedNav);
  }
}

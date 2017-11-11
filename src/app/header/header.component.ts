import { Component, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'header-Comp',
  templateUrl: 'header.component.html',
  // styleUrls: ['header.component.css']
})
export class headerComponent {
  @Output() ReciClick = new EventEmitter<{reciClick: string}>();
  onSelect(item: string){
    // console.log(item.target.text);
    this.ReciClick.emit({
      reciClick: item
    });
  }
}

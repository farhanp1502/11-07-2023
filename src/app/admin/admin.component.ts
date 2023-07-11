import { Component } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  selected = false;
sumit(event: Event){
  event.preventDefault();
this.selected=true;
}
}

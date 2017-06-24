import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css']
})
export class UserItemComponent implements OnInit {
  // pass in a value from parent element @Input
  @Input() name: string; // added name property

  constructor() {
    // Removed setting name
    // this.name = 'Felipe'; // set the name
  }

  ngOnInit() {
  }

}

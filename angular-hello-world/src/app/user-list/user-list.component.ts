import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  names: string[]; // array of strings

  // other way names: Array<string> 

  constructor() { 
    this.names = ['Ari','Carlos','Felipe', 'Nate'];
  }

  ngOnInit() {
  }

}

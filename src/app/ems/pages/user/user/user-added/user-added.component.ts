import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-added',
  templateUrl: './user-added.component.html',
  styleUrls: ['./user-added.component.scss']
})
export class UserAddedComponent implements OnInit {

  constructor() { }
  public isFocused = true;
  ngOnInit(): void {
  }

}

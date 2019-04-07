import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chatroom-window',
  templateUrl: './chatroom-window.component.html',
  styleUrls: ['./chatroom-window.component.scss']
})
export class ChatroomWindowComponent implements OnInit {

  public dummyData = [
    {
      message: 'Hey there!',
      createdAt: new Date(),
      sender: {
        firstName: 'Sally',
        lastName: 'Sue',
        photoURL: 'http://via.placeholder.com/150x150'
      }
    },
    {
      message: 'WAZUP!',
      createdAt: new Date(),
      sender: {
        firstName: 'Joe',
        lastName: 'Burger',
        photoURL: 'http://via.placeholder.com/150x150'
      }
    },
    {
      message: 'I\'m hungry!',
      createdAt: new Date(),
      sender: {
        firstName: 'Ritz',
        lastName: 'Rizzle',
        photoURL: 'http://via.placeholder.com/150x150'
      }
    },
    {
      message: 'Hii!',
      createdAt: new Date(),
      sender: {
        firstName: 'Coffee',
        lastName: 'Cream',
        photoURL: 'http://via.placeholder.com/150x150'
      }
    },
  
  ];



  constructor() { }

  ngOnInit() {
  }

}

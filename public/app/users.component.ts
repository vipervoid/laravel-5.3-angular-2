import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './user';
import { UsersService } from './users.service';

@Component({
  moduleId: module.id,
  selector: 'my-users',
  template: `
    <table width="100%">
        <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
        </tr>
        <tr *ngFor="let user of users">
            <td>{{user.id}}</td>
            <td>{{user.name}}</td>
            <td>{{user.email}}</td>
        </tr>
    </table>
    `
  //styleUrls: ['heroes.component.css']
})
export class UsersComponent implements OnInit {

  users: User[] = [];

  constructor(
    private usersService: UsersService
  ) { }

  ngOnInit(): void {
      this.getUsers();
  }

  getUsers() : void {
      this.usersService.getUsers().subscribe(
          users => this.users = users,
          err => console.log(err)
      );
  }
}

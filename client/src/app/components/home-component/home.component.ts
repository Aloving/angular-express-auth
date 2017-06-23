import { Component, OnInit } from '@angular/core';

import { User } from '../../shared/models/User';
import { UserService } from '../../shared/services/user-service/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  private user: User;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.getUser();
  }

  getUser() {
    this.userService.getUser().subscribe(user => this.user = user);
  }
}

import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/service/auth.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  isAuthenticated = false;
  constructor(public authService: AuthService) { }

  ngOnInit(): void {
  }

}

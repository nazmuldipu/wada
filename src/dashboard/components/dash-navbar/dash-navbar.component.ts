import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AuthService } from 'src/service/auth.service';
import { CartService } from 'src/service/cart.service';
import { User } from 'src/models/user.model';

@Component({
  selector: 'dash-navbar',
  templateUrl: './dash-navbar.component.html',
  styleUrls: ['./dash-navbar.component.scss']
})
export class DashNavbarComponent implements OnInit {
  @Input() user: User;
  @Output() expand = new EventEmitter<boolean>();

  mode = true;

  constructor(private auth: AuthService, private cartService: CartService) { }

  ngOnInit(): void { }

  onSlide() {
    this.mode = !this.mode;
    this.expand.emit(this.mode);
  }

  onLogout() {
    this.cartService._cartSource.next(null);
    this.auth.logout();
  }
}

import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-web',
  templateUrl: './web.component.html',
  styleUrls: ['./web.component.scss']
})
export class WebComponent implements OnInit {
  isModalOpen = false;

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
    const authenticationToken = sessionStorage.getItem('jwtToken');

    if (authenticationToken) {
      this.authService.getUser(authenticationToken).subscribe((response: Response) => {
        this.authService.setCurrentUser(response);
      }, error => {
        this.authService.logout();
      });
    } else {
      this.authService.logout();
    }
  }

  handleModalChange(isModalOpen: boolean) {
    this.isModalOpen = isModalOpen
  }

}

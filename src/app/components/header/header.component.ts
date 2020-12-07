import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent {
    isAuthorized = false;

    constructor(private authService: AuthService, private router: Router) {
        this.authService.isAuthenticate.subscribe((isAuth) => {
            this.isAuthorized = isAuth;
        })
    }

    onLogout() {
        this.isAuthorized = false;
        this.router.navigate(['/auth']);
    }
}
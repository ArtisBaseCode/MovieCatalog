import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit{
  searchBar: boolean = true;
  constructor(private router: Router, private route: ActivatedRoute) {}
  onLogIn() {
    this.router.navigate(['home']);
  }
  ngOnInit(): void {
    const routeSnapshot: ActivatedRouteSnapshot = this.route.snapshot;
    if (routeSnapshot.routeConfig?.path === 'movie') {
      this.searchBar = false;
      console.log("if ",this.searchBar)
    } else {
      console.log("else ",this.searchBar)
      this.searchBar = true;
    }
  }
 
}

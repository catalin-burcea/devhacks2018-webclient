import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  user;
  constructor(private router:Router) { 
    this.user = JSON.parse(window.localStorage.getItem('user'));
  }

  ngOnInit() {
    
  }

  logout(){
    window.localStorage.setItem('user', null);
    window.localStorage.setItem('tagViews', null);
    this.router.navigateByUrl('/login');
  }

}

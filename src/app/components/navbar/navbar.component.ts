import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isOpen: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleMenu() {
    this.isOpen = !this.isOpen;
  }

}
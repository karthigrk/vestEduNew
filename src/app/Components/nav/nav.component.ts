import { Component, OnInit } from '@angular/core';

import { NavigationService } from './../../Services/navigation.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
  providers: [NavigationService]
})
export class NavComponent implements OnInit {
  menuItems;

  constructor(private navItems: NavigationService) {
    this.menuItems = [];
  }

  ngOnInit() {
    let menuObj = this.navItems.getMenus().subscribe(data => {
      if(data) {
        console.log("ddd ", data["menus"])
        this.menuItems = data["menus"];
      }
    });
    console.log("menu items ---", this.menuItems)
  }

}

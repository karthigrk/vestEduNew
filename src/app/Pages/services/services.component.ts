import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { NavigationService } from './../../Services/navigation.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
  providers: [NavigationService]
})
export class ServicesComponent implements OnInit {
  private sub: any;
  page_id;
  page_content;

  constructor(private navItems: NavigationService, private route: ActivatedRoute, private router: Router) {
    this.page_content = {};
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  ngOnInit() {
    this.sub = this.route.queryParams.subscribe(params => {
      // console.log("p -- ", params['name']);
      this.page_id = params['name'];
   });

    let pageContentObj = this.navItems.getPageContent().subscribe(data => {
      if(data) {
        console.log(" page id ---", this.page_id)
        this.page_content = data[this.page_id];
        console.log("page content ---", this.page_content)
      }
    });
  }

}

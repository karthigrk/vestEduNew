import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  page_content;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.page_content = this.route
    .queryParams
    .subscribe(params => {
      this.page_content = +params['page_content'] || 'College';
    });
  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  constructor(private http: HttpClient) {

  }

  getMenus() {
    let data = this.http.get("./../assets/data/menu.json");
    console.log(" Menu Data _*_*_*_", data)
    return data;
  }

  getPageContent() {
    let data = this.http.get("./../assets/data/page_content.json");
    console.log(" Content Data _*_*_*_", data)
    return data;
  }

}

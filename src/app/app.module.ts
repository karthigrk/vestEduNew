import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { BsDropdownModule } from 'ngx-bootstrap';


import { AppComponent } from './app.component';
import { HomeComponent } from './Pages/home/home.component';
import { AboutComponent } from './Pages/about/about.component';
import { ServicesComponent } from './Pages/services/services.component';

import { NavComponent } from './Components/nav/nav.component';
import { CarouselComponent } from './Components/carousel/carousel.component';
import { PromoComponent } from './Components/promo/promo.component';
import { CalloutComponent } from './Components/callout/callout.component';
import { EventblockComponent } from './Components/eventblock/eventblock.component';
import { CounterComponent } from './Components/counter/counter.component';
import { BlogsComponent } from './Components/blogs/blogs.component';
import { TestimonyComponent } from './Components/testimony/testimony.component';
import { FooterComponent } from './Components/footer/footer.component';

import { NavigationService } from './Services/navigation.service';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'services', component: ServicesComponent }
 ];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent, AboutComponent,
    NavComponent,
    CarouselComponent,
    PromoComponent,
    CalloutComponent,
    EventblockComponent,
    CounterComponent,
    BlogsComponent,
    TestimonyComponent,
    FooterComponent,
    ServicesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes, {useHash: true}),
    BsDropdownModule.forRoot(),
    CarouselModule.forRoot()
  ],
  providers: [ NavigationService ],
  bootstrap: [AppComponent]
})
export class AppModule { }

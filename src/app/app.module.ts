import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {Routes, RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { CarouselComponent } from './component/carousel/carousel.component';
import { HomeComponent } from './component/pages/home/home.component';
import { AboutComponent } from './component/pages/about/about.component';
import { NewsComponent } from './component/pages/news/news.component';
import { FooterComponent } from './component/footer/footer.component';
import { NewListComponent } from './component/news/new-list/new-list.component';
import { NewItemComponent } from './component/news/new-item/new-item.component';
import { NewsAddComponent } from './component/pages/news-add/news-add.component';
import {DataService} from "./component/news/News.date.servise";
import { SidebarComponent } from './component/sidebar/sidebar.component';


const appRoutes: Routes =[
  { path: '', component: HomeComponent},
  { path: 'news', component: NewsComponent},
  { path: 'about', component: AboutComponent},
  { path: 'addNews', component: NewsAddComponent},
  { path: 'news/item/:id', component: NewItemComponent}



];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CarouselComponent,
    HomeComponent,
    AboutComponent,
    NewsComponent,
    FooterComponent,
    NewListComponent,
    NewItemComponent,
    NewsAddComponent,
    SidebarComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule
  ],
  bootstrap: [AppComponent],
  providers: [DataService]
})
export class AppModule { }

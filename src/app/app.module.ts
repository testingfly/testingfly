import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutComponent } from './pages/about/about.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ContactComponent } from './pages/contact/contact.component';
import { FeaturedPostComponent } from './pages/featured-post/featured-post.component';
import { RecentPostsComponent } from './pages/recent-posts/recent-posts.component';
import { ViewPostComponent } from './pages/view-post/view-post.component';
import { HttpClientModule } from '@angular/common/http';
import { PostsComponent } from './pages/posts/posts.component';
import { LoadingComponent } from './pages/loading/loading.component';
import { ContentfulService } from './shared/services/contentful.service';
import {MatCardModule} from '@angular/material/card'; 


@NgModule({
  declarations: [AppComponent, AboutComponent, NavbarComponent, ContactComponent, FeaturedPostComponent, RecentPostsComponent, PostsComponent, LoadingComponent, ViewPostComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, MatToolbarModule, MatButtonModule, MatIconModule, HttpClientModule, MatCardModule],
  providers: [ContentfulService],
  bootstrap: [AppComponent],
})
export class AppModule {}

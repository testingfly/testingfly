import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { FeaturedPostComponent } from './pages/featured-post/featured-post.component';
import { HomeComponent } from './pages/home/home.component';
import { RecentPostsComponent } from './pages/recent-posts/recent-posts.component';

const routes: Routes = [
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'featured-post', component: FeaturedPostComponent},
  {path: 'home', component: HomeComponent},
  {path: 'recent-posts', component: RecentPostsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

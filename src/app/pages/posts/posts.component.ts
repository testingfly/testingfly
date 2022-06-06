import { Component, OnInit } from "@angular/core";
import { ContentfulService } from "../../shared/services/contentful.service";
import { BlogPost } from "../../shared/models/blog-post";
import { Entry } from 'contentful';

@Component({
  selector: "app-posts",
  templateUrl: "./posts.component.html",
  styleUrls: ["./posts.component.scss"]
})
export class PostsComponent implements OnInit {
  loading: boolean = true;
  posts: Array<Entry<BlogPost>> | undefined;

  constructor(private contentfulService: ContentfulService) { }

  // fetch data on init
  ngOnInit() {
    this.contentfulService.getBlogPosts().then((posts) => this.posts = posts.items);
    this.loading = false;
  }
}
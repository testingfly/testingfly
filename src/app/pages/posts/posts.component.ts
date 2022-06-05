import { Component, OnInit } from "@angular/core";
import { ContentfulService } from "../../shared/services/contentful.service";
import { BlogPost } from "../../shared/models/blog-post";
import { BlogPostService } from "../../shared/services/blog-post.service";
import { Entry } from 'contentful';

@Component({
  selector: "app-posts",
  templateUrl: "./posts.component.html",
  styleUrls: ["./posts.component.scss"]
})
export class PostsComponent implements OnInit {
  loading: boolean = true;
  // posts!: BlogPost[];
  posts: Entry<any>[] = [];


  // constructor(private postService: BlogPostService) {}

  // ngOnInit() {
  //   this.getPosts();
  // }

  

  constructor(private contentfulService: ContentfulService) { }

  // fetch data on init
  ngOnInit() {
    this.contentfulService.getPosts()
    .then(posts => this.posts = posts)
    this.loading = false;
  }

  // private getPosts(): void {
  //   this.postService.GetPosts().subscribe(posts => {
  //     this.posts = posts;
  //     this.loading = false;
  //   });
  // }
}
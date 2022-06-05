import { Component, OnInit } from "@angular/core";
import { BlogPost } from "../../shared/models/blog-post";
import { BlogPostService } from "../../shared/service/blog-post.service";

@Component({
  selector: "app-posts",
  templateUrl: "./posts.component.html",
  styleUrls: ["./posts.component.scss"]
})
export class PostsComponent implements OnInit {
  loading: boolean = true;
  posts!: BlogPost[];

  constructor(private postService: BlogPostService) {}

  ngOnInit() {
    this.getPosts();
  }

  private getPosts(): void {
    this.postService.GetPosts().subscribe(posts => {
      this.posts = posts;
      this.loading = false;
    });
  }
}
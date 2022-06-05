import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogPost } from '../../shared/models/blog-post';
import { BlogPostService } from '../../shared/service/blog-post.service';

@Component({
  selector: 'app-view-post',
  templateUrl: './view-post.component.html',
  styleUrls: ['./view-post.component.scss']
})
export class ViewPostComponent implements OnInit {
  loading: boolean = true;
  post!: BlogPost;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private postService: BlogPostService
  ) {}

  ngOnInit() {
    this.getPost();
  }

  public deletePost() {
    const id = this.route.snapshot.paramMap.get("id");
    if(id)
      this.postService.deletePost(id).subscribe(res => {
        console.log("Deleted Post" + id);
        this.router.navigate(["/home"]);
      });
  }

  private getPost(): void {
    const id = this.route.snapshot.paramMap.get("id"); //+ is JS conversion from string to int (which id should be)
    // console.log("id: " + id);

    if(id)
      this.postService.GetPost(id).subscribe(post => {
        console.log("post: " + JSON.stringify(post));
        this.post = post;
        this.loading = false;
      });
  }
}

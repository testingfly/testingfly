import { TestBed } from '@angular/core/testing';
import { ApiService } from './api.service';
import { BlogPostService } from './blog-post.service';

describe('BlogPostService', () => {
  let service: BlogPostService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        BlogPostService,
        { provide: ApiService, useValue: jest.fn() }
      ]
    });
    service = TestBed.inject(BlogPostService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

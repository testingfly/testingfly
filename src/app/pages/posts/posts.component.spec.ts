import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContentfulService } from '../../shared/services/contentful.service';
import { PostsComponent } from './posts.component';

describe('PostsComponent', () => {
  let contentfulService = new ContentfulService();
  jest.spyOn(contentfulService, 'getBlogPosts');
  beforeEach(()=> {


  })

  let component: PostsComponent;
  let fixture: ComponentFixture<PostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
      declarations: [ PostsComponent ],
      providers: [ContentfulService],
      imports: [HttpClientTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    // expect(contentfulService.getPosts).toHaveBeenCalledTimes(1);
  });
});

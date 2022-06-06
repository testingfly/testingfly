import { Asset } from "contentful";

/**
 * This model represents our Blog Post content type in Contentful and
 * the expected response type from their API. Each property
 * in this model corresponds to a "name" of a field in our Blog Post
 * content type.
 */
 export interface BlogPost {
    id: string;
    title: string;
    content: Content;
    excerpt: string;
    image: Asset;
    keywords: Array<string>;
  }

  export interface Content {
    content: [
      { content: [{value: string}] }
    ]
  }
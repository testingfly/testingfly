// ./src/app/contentful.service.ts
import { Injectable } from '@angular/core';
// import Contentful createClient and type for `Entry`
import { createClient, Entry } from 'contentful';

// configure the service with tokens and content type ids
// SET YOU OWN CONFIG here
const CONFIG = {
  space: '4419diyxun6e',
  accessToken: 'l61DX8YfcrighlxtU7rzCEt0Ffcq5kIY5f-2RRp9bOk',

  contentTypeIds: {
    posts: 'posts'
  }
}

@Injectable()
export class ContentfulService {
  private cdaClient = createClient({
    space: CONFIG.space,
    accessToken: CONFIG.accessToken
  });

  constructor() { }

  async getPosts(query?: object): Promise<Entry<any>[]> {
    const res = await this.cdaClient.getEntries(Object.assign({
      content_type: CONFIG.contentTypeIds.posts
    }, query));
    return res.items;
  }
}
import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { SearchService } from './search.service';
import { SearchResult } from '../shared/search-result';
import { User } from '../shared/user';
import { UserDetails } from '../shared/user-details';

describe('SearchService', () => {
  let service: SearchService;
  let httpMock: HttpTestingController;
  let mockItems: Array<User> = [
    {
      "login": "octocat",
      "id": 583231,
      "node_id": "MDQ6VXNlcjU4MzIzMQ==",
      "avatar_url": "https://avatars3.githubusercontent.com/u/583231?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/octocat",
      "html_url": "https://github.com/octocat",
      "followers_url": "https://api.github.com/users/octocat/followers",
      "following_url": "https://api.github.com/users/octocat/following{/other_user}",
      "gists_url": "https://api.github.com/users/octocat/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/octocat/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/octocat/subscriptions",
      "organizations_url": "https://api.github.com/users/octocat/orgs",
      "repos_url": "https://api.github.com/users/octocat/repos",
      "events_url": "https://api.github.com/users/octocat/events{/privacy}",
      "received_events_url": "https://api.github.com/users/octocat/received_events",
      "type": "User",
      "site_admin": false,
      "score": 1
    }
  ];
  let mockUsers: Array<UserDetails> = [
    {
      "login": "octocat",
      "id": 1,
      "node_id": "MDQ6VXNlcjE=",
      "avatar_url": "https://github.com/images/error/octocat_happy.gif",
      "gravatar_id": "",
      "url": "https://api.github.com/users/octocat",
      "html_url": "https://github.com/octocat",
      "followers_url": "https://api.github.com/users/octocat/followers",
      "following_url": "https://api.github.com/users/octocat/following{/other_user}",
      "gists_url": "https://api.github.com/users/octocat/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/octocat/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/octocat/subscriptions",
      "organizations_url": "https://api.github.com/users/octocat/orgs",
      "repos_url": "https://api.github.com/users/octocat/repos",
      "events_url": "https://api.github.com/users/octocat/events{/privacy}",
      "received_events_url": "https://api.github.com/users/octocat/received_events",
      "type": "User",
      "site_admin": false,
      "name": "monalisa octocat",
      "company": "GitHub",
      "blog": "https://github.com/blog",
      "location": "San Francisco",
      "email": "octocat@github.com",
      "hireable": false,
      "bio": "There once was...",
      "twitter_username": "monatheoctocat",
      "public_repos": 2,
      "public_gists": 1,
      "followers": 20,
      "following": 0,
      "created_at": new Date("2008-01-14T04:33:35Z"),
      "updated_at": new Date("2008-01-14T04:33:35Z")
    }
  ];
  let mockResult: SearchResult = {
    total_count: 1,
    incomplete_results: false,
    items: mockItems,
    users: mockUsers
  };

  beforeEach(() => {TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [SearchService]
  });
    service = TestBed.get(SearchService);
    httpMock = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getSearchResults() should call GitHub API', () => {
    let searchString = "octocat";
    let itemsPerPage = 1;
    let pageNumber = 1;
    let url = `https://api.github.com/search/users?q=${searchString}&per_page=${itemsPerPage}&page=${pageNumber}`;
    
    service.getSearchResults(searchString, itemsPerPage, pageNumber).subscribe(() => {});

    const reqList = httpMock.expectOne(url);
    expect(reqList.request.method).toBe("GET");
    reqList.flush(mockResult);

    const reqUser = httpMock.expectOne('https://api.github.com/users/octocat');
    expect(reqList.request.method).toBe("GET");
  });
});

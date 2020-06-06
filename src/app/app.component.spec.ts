import { TestBed, async } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { AppComponent } from "./app.component";
import { SearchService } from "./services/search.service";
import { of } from "rxjs";
import { UserDetails } from "./shared/user-details";
import { Component } from "@angular/core";

describe("AppComponent", () => {
  let mockUsers: Array<UserDetails> = [
    {
      login: "octocat",
      id: 1,
      node_id: "MDQ6VXNlcjE=",
      avatar_url: "https://github.com/images/error/octocat_happy.gif",
      gravatar_id: "",
      url: "https://api.github.com/users/octocat",
      html_url: "https://github.com/octocat",
      followers_url: "https://api.github.com/users/octocat/followers",
      following_url:
        "https://api.github.com/users/octocat/following{/other_user}",
      gists_url: "https://api.github.com/users/octocat/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/octocat/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/octocat/subscriptions",
      organizations_url: "https://api.github.com/users/octocat/orgs",
      repos_url: "https://api.github.com/users/octocat/repos",
      events_url: "https://api.github.com/users/octocat/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/octocat/received_events",
      type: "User",
      site_admin: false,
      name: "monalisa octocat",
      company: "GitHub",
      blog: "https://github.com/blog",
      location: "San Francisco",
      email: "octocat@github.com",
      hireable: false,
      bio: "There once was...",
      twitter_username: "monatheoctocat",
      public_repos: 2,
      public_gists: 1,
      followers: 20,
      following: 0,
      created_at: new Date("2008-01-14T04:33:35Z"),
      updated_at: new Date("2008-01-14T04:33:35Z"),
    },
  ];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [
        AppComponent,
        MockSearchBoxComponent,
        MockSearchResultsComponent,
      ],
      providers: [
        {
          provide: SearchService,
          useValue: {
            getSearchResults: () => {
              return of(mockUsers);
            },
          },
        },
      ],
    }).compileComponents();
  }));

  it("should create the app", () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it("onSearched() should request data from SearchService", () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    app.itemsPerPage = 8;
    app.onSearched(mockUsers[0].login);
    expect(app.searchTerm).toEqual(mockUsers[0].login);
    expect(app.result).toEqual(mockUsers);
    expect(app.errorMessage).toBeFalsy();
  });

  it("onPaginate() should call onSearched()", () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    const spy = spyOn(app, "onSearched");
    const pageNumber = 2;
    app.itemsPerPage = 8;
    app.onPaginate(pageNumber);
    expect(spy).toHaveBeenCalled();
  });
});

@Component({
  selector: "app-search-box",
  template: "",
})
class MockSearchBoxComponent {}

@Component({
  selector: "app-search-results",
  template: "",
})
class MockSearchResultsComponent {}

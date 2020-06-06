import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SimpleChanges } from '@angular/core';

import { PaginationComponent } from './pagination.component';

describe('PaginationComponent', () => {
  let component: PaginationComponent;
  let fixture: ComponentFixture<PaginationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('ngOnChanges() should update lastPageNumber', () => {
    const maxItems = 303;
    const itemsPerPage = 10;
    const expectedValue = Math.ceil(maxItems/itemsPerPage);
    const changes: SimpleChanges = {};
    component.total = maxItems;
    component.itemsPerPage = itemsPerPage;
    component.ngOnChanges(changes);
    expect(component.lastPageNumber).toEqual(expectedValue);
  });

  it('paginate() should record current page number', () => {
    component.paginate(3);
    expect(component.current).toEqual(3);
  });

  it('paginate() should emit selectd page number', () => {
    const spy = spyOn(component.clicked, 'emit');
    component.paginate(3);
    expect(spy).toHaveBeenCalled();
  });
});

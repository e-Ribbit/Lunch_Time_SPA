import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListEntryDetailedComponent } from './list-entry-detailed.component';

describe('ListEntryDetailedComponent', () => {
  let component: ListEntryDetailedComponent;
  let fixture: ComponentFixture<ListEntryDetailedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListEntryDetailedComponent]
    });
    fixture = TestBed.createComponent(ListEntryDetailedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

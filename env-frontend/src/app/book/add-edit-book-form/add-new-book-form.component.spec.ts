import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AddEditBookFormComponent} from './add-new-book-form.component';

describe('AddEditBookFormComponent', () => {
  let component: AddEditBookFormComponent;
  let fixture: ComponentFixture<AddEditBookFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEditBookFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditBookFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should save', () => {
    expect(component).toBeTruthy();
  });
});

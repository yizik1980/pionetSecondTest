import { ComponentFixture, TestBed } from '@angular/core/testing';

import { pageListComponent } from './page-list.component';

describe('pageListComponent', () => {
  let component: pageListComponent;
  let fixture: ComponentFixture<pageListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [pageListComponent]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(pageListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

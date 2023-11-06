import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviehomeComponent } from './moviehome.component';

describe('MoviehomeComponent', () => {
  let component: MoviehomeComponent;
  let fixture: ComponentFixture<MoviehomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MoviehomeComponent]
    });
    fixture = TestBed.createComponent(MoviehomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchLoaderComponent } from './search-loader.component';

describe('SearchLoaderComponent', () => {
  let component: SearchLoaderComponent;
  let fixture: ComponentFixture<SearchLoaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchLoaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherStripComponent } from './weather-strip.component';

describe('WeatherStripComponent', () => {
  let component: WeatherStripComponent;
  let fixture: ComponentFixture<WeatherStripComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatherStripComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeatherStripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

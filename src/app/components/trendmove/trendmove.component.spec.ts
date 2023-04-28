import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendmoveComponent } from './trendmove.component';

describe('TrendmoveComponent', () => {
  let component: TrendmoveComponent;
  let fixture: ComponentFixture<TrendmoveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrendmoveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrendmoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

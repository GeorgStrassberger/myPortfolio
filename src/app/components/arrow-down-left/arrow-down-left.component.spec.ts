import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrowDownLeftComponent } from './arrow-down-left.component';

describe('ArrowDownLeftComponent', () => {
  let component: ArrowDownLeftComponent;
  let fixture: ComponentFixture<ArrowDownLeftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArrowDownLeftComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArrowDownLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

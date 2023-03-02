import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrowDownRightComponent } from './arrow-down-right.component';

describe('ArrowDownRightComponent', () => {
  let component: ArrowDownRightComponent;
  let fixture: ComponentFixture<ArrowDownRightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArrowDownRightComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArrowDownRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

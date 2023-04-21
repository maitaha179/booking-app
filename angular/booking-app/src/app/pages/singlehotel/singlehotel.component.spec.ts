import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglehotelComponent } from './singlehotel.component';

describe('SinglehotelComponent', () => {
  let component: SinglehotelComponent;
  let fixture: ComponentFixture<SinglehotelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SinglehotelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SinglehotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

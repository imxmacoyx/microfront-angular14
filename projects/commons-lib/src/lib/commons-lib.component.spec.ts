import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonsLibComponent } from './commons-lib.component';

describe('CommonsLibComponent', () => {
  let component: CommonsLibComponent;
  let fixture: ComponentFixture<CommonsLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommonsLibComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommonsLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FetchAutorizedDataComponent } from './fetch-autorized-data.component';

describe('FetchAutorizedDataComponent', () => {
  let component: FetchAutorizedDataComponent;
  let fixture: ComponentFixture<FetchAutorizedDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FetchAutorizedDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FetchAutorizedDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

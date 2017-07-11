import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ng2ChoicesComponent } from './ng2-choices.component';

describe('Ng2ChoicesComponent', () => {
  let component: Ng2ChoicesComponent;
  let fixture: ComponentFixture<Ng2ChoicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ng2ChoicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ng2ChoicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

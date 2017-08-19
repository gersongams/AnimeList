import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimesComponent } from './animes.component';

describe('AnimesComponent', () => {
  let component: AnimesComponent;
  let fixture: ComponentFixture<AnimesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

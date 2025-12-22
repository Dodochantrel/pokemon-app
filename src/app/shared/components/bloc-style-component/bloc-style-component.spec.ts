import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlocStyleComponent } from './bloc-style-component';

describe('BlocStyleComponent', () => {
  let component: BlocStyleComponent;
  let fixture: ComponentFixture<BlocStyleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlocStyleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlocStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

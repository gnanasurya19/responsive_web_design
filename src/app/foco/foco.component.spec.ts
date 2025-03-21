import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FocoComponent } from './foco.component';

describe('FocoComponent', () => {
  let component: FocoComponent;
  let fixture: ComponentFixture<FocoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FocoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FocoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

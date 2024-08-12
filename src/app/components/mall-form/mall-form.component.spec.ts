import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MallFormComponent } from './mall-form.component';

describe('MallFormComponent', () => {
  let component: MallFormComponent;
  let fixture: ComponentFixture<MallFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MallFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MallFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

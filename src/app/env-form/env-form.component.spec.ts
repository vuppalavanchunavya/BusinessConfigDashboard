import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvFormComponent } from './env-form.component';

describe('EnvFormComponent', () => {
  let component: EnvFormComponent;
  let fixture: ComponentFixture<EnvFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnvFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EnvFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

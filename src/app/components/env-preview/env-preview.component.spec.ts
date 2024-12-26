import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvPreviewComponent } from './env-preview.component';

describe('EnvPreviewComponent', () => {
  let component: EnvPreviewComponent;
  let fixture: ComponentFixture<EnvPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnvPreviewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EnvPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

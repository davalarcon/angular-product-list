import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildProductComponentComponent } from './build-product-component.component';

describe('BuildProductComponentComponent', () => {
  let component: BuildProductComponentComponent;
  let fixture: ComponentFixture<BuildProductComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuildProductComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildProductComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

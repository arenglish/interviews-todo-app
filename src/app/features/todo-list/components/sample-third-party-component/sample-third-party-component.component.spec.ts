import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleThirdPartyComponentComponent } from './sample-third-party-component.component';

describe('SampleThirdPartyComponentComponent', () => {
  let component: SampleThirdPartyComponentComponent;
  let fixture: ComponentFixture<SampleThirdPartyComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SampleThirdPartyComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SampleThirdPartyComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

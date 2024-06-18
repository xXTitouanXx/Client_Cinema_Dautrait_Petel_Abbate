import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActorInformationComponent } from './actor-information.component';

describe('ActorInformationComponent', () => {
  let component: ActorInformationComponent;
  let fixture: ComponentFixture<ActorInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActorInformationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActorInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MirrorComponent } from './mirror-component.page';

describe('Tab2Page', () => {
  let component: MirrorComponent;
  let fixture: ComponentFixture<MirrorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MirrorComponent],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MirrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

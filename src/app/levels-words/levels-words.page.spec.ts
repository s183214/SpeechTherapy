import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { IonicModule } from "@ionic/angular";

import { LevelWordsComponent } from "./levels-words.page";

describe("Tab1Page", () => {
  let component: LevelWordsComponent;
  let fixture: ComponentFixture<LevelWordsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LevelWordsComponent],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LevelWordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});

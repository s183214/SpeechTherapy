import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WordsMenuComponent } from './words-menu';

describe('TabsPage', () => {
  let component: WordsMenuComponent;
  let fixture: ComponentFixture<WordsMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WordsMenuComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WordsMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

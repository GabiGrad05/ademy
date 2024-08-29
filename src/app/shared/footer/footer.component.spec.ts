import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';

import { FooterComponent } from './footer.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;
  let translateService: TranslateService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FooterComponent],
      imports: [TranslateModule.forRoot()],
      providers: [TranslateService],
    }).compileComponents();

    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    translateService = TestBed.inject(TranslateService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should switch language on onSwitchLang', fakeAsync(() => {
    const spy = jest.spyOn(translateService, 'use');
    const lang = 'de';
    component.onSwitchLang(lang);
    tick();
    expect(spy).toHaveBeenCalledWith(lang);
  }));
});

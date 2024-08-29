import { TestBed, waitForAsync } from '@angular/core/testing';
import { CoursesEffects } from './item.effects';

describe('ItemsEffects', () => { //use marbles
  let effects: CoursesEffects;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      providers: [
        CoursesEffects
      ],
    });

    effects = TestBed.inject(CoursesEffects);
  }));

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});

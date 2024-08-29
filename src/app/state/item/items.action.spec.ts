import { CourseApiActions } from './items.actions';

describe('ItemsActions', () => {
  describe('GetItems', () => {
    it('should create an action to get items', () => {
      const expectedAction = {
        type: CourseApiActions.getCourses.type,
      };
      const action = CourseApiActions.getCourses();
      expect(action).toEqual(expectedAction);
    });
  });
});

//Selectors fetch data from the store and return it as an observable.

import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CourseState } from './item.reducers';

export const selectCourseState = createFeatureSelector<CourseState>('courses');

export const selectCoursesList = createSelector(
  selectCourseState,
  (state: CourseState) => state.courses
);

export const selectCourseLoading = createSelector(
  selectCourseState,
  (state: CourseState) => state.loading
);

export const selectCourseError = createSelector(
  selectCourseState,
  (state: CourseState) => state.error
);

export const selectSelectedCourseId = createSelector(
  selectCourseState,
  (state: CourseState) => state.selectedCourseId
);

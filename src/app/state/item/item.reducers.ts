import { createReducer, on } from '@ngrx/store';
import { CourseApiActions } from './items.actions';
import { Item } from 'src/app/core/models/item.model';

export interface CourseState {
  courses: Item[];
  selectedCourseId: number | undefined;
  error: any;
  loading: boolean;
}

export const initialState: CourseState = {
  courses: [],
  selectedCourseId: undefined,
  error: null,
  loading: false,
};

export const courseReducer = createReducer(
  initialState,
  on(CourseApiActions.getCourses, (state) => ({ 
    ...state, 
    loading: true 
  })),
  on(CourseApiActions.getCoursesSuccess, (state, { courses }) => ({ 
    ...state, 
    courses, 
    loading: false 
  })),
  on(CourseApiActions.getCoursesFailure, (state, { error }) => ({ 
    ...state, 
    error, 
    loading: false 
  })),
  on(CourseApiActions.getCourseId, (state, { id }) => ({
    ...state, 
    selectedCourseId: id
  }))
);
//This file will hold all the actions we need to implement the basic CRUD operations.

import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Item } from 'src/app/core/models/item.model';

export const CourseApiActions = createActionGroup({
  source: 'CoursesApi',
  events: {
    'get courses': emptyProps(),
    'get courses success': props<{
      courses: Item[];
    }>(),
    'get courses failure': props<{
      error: any;
    }>(),
    'get course id': props<{
      id: number | undefined;
    }>(),
    'create course': props<{
      course: Item[] | undefined;
    }>(),
    'delete course': props<{
      course: Item | undefined;
    }>(),
  },
});

import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Item } from 'src/app/core/models/item.model';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CourseApiActions } from 'src/app/state/item/items.actions';
import { selectCoursesList } from 'src/app/state/item/item.selectors';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss'],
})
export class ItemsComponent {
  items$: Observable<Item[]> | undefined;
  isLoading$: Observable<boolean> | undefined;

  createItem: FormGroup = new FormGroup({});

  constructor(
    private readonly store: Store,
    private readonly fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.iniFormItem();
    this.initDispatch();
    this.initSubscriptions();
  }

  // onCreateItem(): void {
  //   if (this.createItem.valid) {
  //     this.store.dispatch(
  //       fromItems.createItem({
  //         item: {
  //           id: this.createItem.controls['id'].value,
  //           name: this.createItem.controls['name'].value,
  //           description: this.createItem.controls['description'].value,
  //         },
  //       })
  //     );
  //   }
  // }

  onDeleteItem(item: Item): void {
    this.store.dispatch(CourseApiActions.deleteCourse({ course: item }));
  }

  private initDispatch(): void {
    this.store.dispatch(CourseApiActions.getCourses());
  }

  private initSubscriptions(): void {
    this.items$ = this.store.pipe(select(selectCoursesList));
   // this.isLoading$ = this.store.pipe(select(CourseApiActions.selectItemIsLoading));
  }

  private iniFormItem() {
    this.createItem = this.fb.group({
      id: [''],
      name: [''],
      description: [''],
      price: [''],
    });
  }
}

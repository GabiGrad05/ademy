import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Item } from 'src/app/core/models/item.model';
import * as fromItems from '../../state/item/index';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent {
  allCourses$: Observable<Item[]> | undefined;
  createItem: FormGroup = new FormGroup({});

  constructor(
    private readonly store: Store,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    this.initDispatch();
    this.initSubscriptions();
  }

  onDeleteItem(item: Item): void {
    this.store.dispatch(fromItems.deleteItem({ item }));
  }

  onNavigateToAllCourses(url: string) {
    //const courses = `/items`;
    this.router.navigateByUrl('/items')
  }

  onCourseDetails(id: string) {  //TODO: maybe using ngrx routing
    const courseId = `/courses/${id}`
    this.router.navigateByUrl(courseId)
  }

  initSubscriptions(): void {
    this.allCourses$ = this.store.pipe(select(fromItems.selectItemList));
  }

  initDispatch(): void {
    this.store.dispatch(fromItems.getItems());
  }
}

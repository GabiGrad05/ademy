import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ItemService } from 'src/app/core/services/item.service';
import { Item } from 'src/app/core/models/item.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-items-details',
  templateUrl: './items-details.component.html',
  styleUrls: ['./items-details.component.scss'],
})
export class ItemsDetailsComponent implements OnInit{

  course: Item | undefined;
  errorMessage: string = ''


  constructor(
    private readonly store: Store,
    private readonly itemService: ItemService,
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {      
      this.getCourse(id);
    }
  }

  getCourse(id: number) {
    this.itemService.getItemId(id).subscribe({
      next: (course) => (this.course = course),
      error: (err) => (this.errorMessage = err),
    });
  }
}

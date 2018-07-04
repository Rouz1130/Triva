import { Component, OnInit, OnDestroy } from '@angular/core';
import { CategoryService } from '../../services/category.service';
import { Category } from '../../model';

@Component({
  selector: 'category-list',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  categories: Category[];
  sub: any;

  constructor(private categoryService: CategoryService) {
  }

  ngOnInit() {
    this.sub = this.categoryService.getCategories()
      .subscribe(categories => this.categories = categories);
  }

  ngOnDestroy() {
    if (this.sub)
      this.sub.unsubscribe();
  }

}

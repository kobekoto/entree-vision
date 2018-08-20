import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: 'category.html'
})
export class CategoryComponent {
  @Input() category;
  @Input() subtitle;

}

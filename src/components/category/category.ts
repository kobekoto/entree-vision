import { Component, Input } from '@angular/core';

/**
 * Generated class for the CategoryComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'app-category',
  templateUrl: 'category.html'
})
export class CategoryComponent {
  @Input() category;
  text: string;

  constructor() {
    console.log('Hello CategoryComponent Component');
    this.text = 'Hello World';
  }

}

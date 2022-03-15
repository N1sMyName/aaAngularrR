import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.sass']
})
export class ProductListComponent {
  list=[1,2,3,4,5,6]
  link='https://google.com'   
  createLink() {
    return 'https://google.com'
  }
}

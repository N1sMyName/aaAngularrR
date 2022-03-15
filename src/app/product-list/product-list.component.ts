import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.sass']
})
export class ProductListComponent {
  // lists
  list=[1,2,3,4,5,6]
  // prop binding
  link='https://google.com'
  // same with method worked...  
  createLink() {
    return 'https://google.com'
  }
  // directive ngIf
  flag=true
  
  switchFlag() {
    this.flag = !this.flag
  }
}

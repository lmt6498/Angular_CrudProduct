import { Component, OnInit } from '@angular/core';
interface Product {
  name: string;
  price: number;
  stock: number;
}
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  arr: Array<Product> = [];
  name!: string;
  price!: number;
  stock!: number;

  constructor() {
    this.arr.push({name: 'Iphone', price: 1000, stock: 5});
    this.arr.push({name: 'Ipad', price: 1000, stock: 5});
    this.arr.push({name: 'Làm đ gì có ICD', price: 1000, stock: 5});
  }

  ngOnInit(): void {
  }

  create(name: string, price: number, stock: number) {
    this.arr.push({name, price, stock})
  }

  edit(name: string, price: number, stock: number) {
    for (let i = 0; i < this.arr.length; i++) {
      if (this.arr[i].name === name) {
        this.arr[i] = {name,price,stock}
      }
    }
  }

  delete(name: any){
    this.arr = this.arr.filter(product => {
      return product.name !== name;
    })
  }

}

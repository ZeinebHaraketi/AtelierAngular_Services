import { Component, OnInit } from '@angular/core';
import { Product } from '../Core/Models/product.model';
import { ProductService } from '../Core/Services/product.service';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {

  ListProduct:Product[]= [];

  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    this.ListProduct= this.productService.getAllProducts();
  }

  Calculer(){
    return this.productService.getNbProductsByLibelle("PC");
  }
  
}

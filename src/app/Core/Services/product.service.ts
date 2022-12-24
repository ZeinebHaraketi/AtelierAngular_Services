import { Injectable } from '@angular/core';
import { Product } from '../Models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  ProductL=[
    { idProduct: 1, code: 127,libelle: "PC", prixunitaire : 2000, tauxTva :10},
    { idProduct: 2, code: 128,libelle: "TV", prixunitaire : 1000, tauxTva :20},
    { idProduct: 3, code: 128,libelle: "Table", prixunitaire : 200, tauxTva :30},
  ];

  p= new Product();
  constructor() { }


  getAllProducts(){
    return this.ProductL;
  }

  getNbProductsByLibelle(libelle:string){
    let nb=0;
     

    for(let i in this.ProductL){
      if(this.p.libelle== libelle){
        nb++;
      }
    }
    return nb;
  }
}

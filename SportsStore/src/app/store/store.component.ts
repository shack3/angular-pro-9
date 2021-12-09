import { Component } from "@angular/core";
import { Product } from "../model/product.model";
import { ProductRepository } from "../model/product.repository";

@Component
({
    selector:"app-store",
    templateUrl: "store.component.html"
})
export class StoreComponent{

        public selectedCategory:string | undefined;
        public productsPerPage = 4;
        public selectedPage = 1;
        public actualProductsPerPage:number = 3;


        constructor(private repository: ProductRepository){}

        get products():Product[]{
            let pageIndex = (Number(<string>this.selectedCategory) - 1) * this.productsPerPage;

            return this.repository.getProducts(this.selectedCategory).slice(pageIndex, pageIndex+this.productsPerPage);
        }

        changePage(newPage:number){
            this.selectedPage=newPage;
        }

        changePageSize(){
            this.productsPerPage= this.actualProductsPerPage;
            this.changePage(1);
        }


        get pageCount():number{
          return Math.ceil(this.repository.getProducts(this.selectedCategory).length / this.productsPerPage)
        }


        get categories(): string[]{
            return this.repository.getCategories();
        }
        changeCategory(newCategory?:string){
            this.selectedCategory = newCategory;
        }
}

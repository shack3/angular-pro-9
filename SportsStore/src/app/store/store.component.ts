import {Component} from "@angular/core";
import {Product} from "../model/product.model";
import {ProductRepository} from "../model/product.repository";
import {Cart} from "../model/cart.model";
import {Router} from "@angular/router";

@Component
({
  selector: "app-store",
  templateUrl: "store.component.html"
})
export class StoreComponent {

  public selectedCategory: string = '';
  public productsPerPage:number = 3;
  public selectedPage: number = 1;
  public actualProductsPerPage: number = 3;



  constructor(private repository: ProductRepository, private cart: Cart, private router:Router) {
  }

  get products(): Product[] {

    let pageIndex:number = Number((this.selectedPage - 1)) * (this.productsPerPage);

    return this.repository.getProducts(this.selectedCategory).slice(pageIndex, Number(this.productsPerPage) + Number(pageIndex));

  }

  changePage(newPage: number) {
    this.selectedPage = newPage;
  }

  changePageSize() {
    this.productsPerPage = this.actualProductsPerPage;
    this.changePage(1);
  }


  get pageCount(): number {
    return Math.ceil(this.repository.getProducts(this.selectedCategory).length / this.productsPerPage)
  }


  get categories(): string[] {
    return this.repository.getCategories();
  }

  changeCategory(newCategory: string) {
    this.selectedCategory = newCategory;
    this.selectedPage = 1;
  }

  addProductToCart(product: Product){
    this.cart.addLine(product);
    this.router.navigateByUrl("/cart")
  }


}

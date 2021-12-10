import {Component} from "@angular/core";
import {Product} from "../model/product.model";
import {ProductRepository} from "../model/product.repository";
import {Cart} from "../model/cart.model";


@Component
({
  selector: "app-store",
  templateUrl: "store.component.html"
})
export class StoreComponent {

  public selectedCategory: string = '';
  public productsPerPage = 3;
  public selectedPage: number = 1;
  public actualProductsPerPage: number = 3;



  constructor(private repository: ProductRepository, private cart: Cart) {
  }

  get products(): Product[] {

    let pageIndex = (this.selectedPage - 1) * this.productsPerPage;

    console.log(this.selectedPage);
    return this.repository.getProducts(this.selectedCategory).slice(pageIndex, pageIndex + this.productsPerPage);

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
  }

  addProductToCart(product: Product){
    this.cart.addLine(product);
  }


}

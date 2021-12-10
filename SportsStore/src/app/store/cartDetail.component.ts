import{Component} from "@angular/core";
import{Cart} from "../model/cart.model";
import{Input} from "@angular/core";


@Component({
  templateUrl:"cartDetail.component.html"
})
export class CartDetailComponent{

  @Input() cantidad:number = 1;


  constructor(public cart: Cart) {
  }
}

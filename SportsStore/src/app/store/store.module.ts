import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { ModelModule } from "../model/model.module";
import { StoreComponent } from "./store.component";
import {CounterDirective} from "./counter.directive";
import {CartSummaryComponent} from "./cartSummary.component";
import {CheckoutComponent} from "./checkout.component";
import {CartDetailComponent} from "./cartDetail.component";
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [ModelModule, BrowserModule, FormsModule, RouterModule],
    declarations: [StoreComponent, CounterDirective, CartSummaryComponent, CheckoutComponent, CartDetailComponent],
    exports: [StoreComponent, CheckoutComponent, CartDetailComponent]
})
export class StoreModule{ }

import { Injectable } from "@angular/core";
import { Product } from "./product.model";
import { StaticDataSource } from "./static.datasource";

@Injectable()
export class ProductRepository {
    private products: Product[] = [];
    private categories: string[] = [];

    constructor(private dataSource: StaticDataSource) {
        dataSource.getProducts().subscribe(data => {
            this.products = data;
            this.categories = data.map(p => p.category)
                .filter((c, index, array) => array.indexOf(c) == index).sort();
        });
    }

    getProducts(category?: string): Product[] {
        if(category==null){
            console.log(this.products)
            return this.products;
        }
        else
            return this.products.filter(p => category == p.category);
    }

    getProduct(id: number): Product {
        console.log(this.products.find(p => p.id == id))
        return this.products.find(p => p.id == id) || new Product(0,"", "", "", 0);
    }

    getCategories(): string[] {
        return this.categories;
    }
}
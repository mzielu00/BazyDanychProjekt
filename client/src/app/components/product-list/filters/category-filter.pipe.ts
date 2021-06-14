import { Pipe, PipeTransform } from '@angular/core';
import { Product } from "../../../Product";

@Pipe({
    name: 'categoryFilter',
})
export class CategoryFilterPipe implements PipeTransform {
    transform(products: Product[], categoryTerm: string): Product[] {
        if (!products || !categoryTerm) {
            return products;
        }
        return products.filter(trip => trip.category.toLowerCase().indexOf(categoryTerm.toLowerCase()) !== -1);
    }    
}
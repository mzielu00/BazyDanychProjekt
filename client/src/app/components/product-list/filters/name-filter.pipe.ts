import { Pipe, PipeTransform } from '@angular/core';
import { Product } from "../../../Product";

@Pipe({
    name: 'nameFilter',
})
export class NameFilterPipe implements PipeTransform {
    transform(products: Product[], nameTerm: string): Product[] {
        if (!products || !nameTerm) {
            return products;
        }
        return products.filter(trip => trip.name.toLowerCase().indexOf(nameTerm.toLowerCase()) !== -1);
    }    
}

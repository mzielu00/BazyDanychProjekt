export class Product {
  name: String;
  category: String;
  calories: Number;
  proteins: Number;
  carbohydrates: Number;
  fats: Number;
  isSet: { type: Boolean; default: false };
  products: [String];
  user: String;
}

export default class Item {
  constructor(id, name){
    this.id = id;
    this.name = name; // string value
    this.price = 0; // number value
    this.quantity = 1; // number value
    this.notes = ""; // string value
    this.purchased = false; // boolean value
  };
  setName(name){this.name = name};
  setPrice(price){this.price = price};
  setQuantity(quantity){this.setQuantity = quantity};
  setNotes(notes){this.notes = notes};
  togglePurchased(){
    this.purchased = this.purchased ? false : true;
  };
};
export function createNewItem(id, name, price=0, quantity=1, notes= ""){
  let newItem = new Item(id, name);
  if(price){
    newItem.setPrice(price);
  }
  if(quantity>1){
    newItem.setQuantity(quantity);
  }
  if(notes){
    newItem.setNotes(notes);
  }
  return newItem;
}

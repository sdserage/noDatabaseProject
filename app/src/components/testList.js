import {createNewItem} from '../models/Item';

const banana = createNewItem(0, 'banana', 40, 3);
const apple = createNewItem(1, 'apple', 55, 2);
const buns = createNewItem(2, 'buns package(8)', 233);
const cakeMix = createNewItem(3, 'cake mix', 345, 1, "for the party tomorrow night.");
buns.togglePurchased();
var testList = [];
testList.push(banana,apple,buns,cakeMix);

export default testList;

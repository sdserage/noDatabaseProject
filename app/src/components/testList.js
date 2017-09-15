import Item, {createNewItem} from '../models/Item';

const banana = createNewItem('banana', 40, 3);
const apple = createNewItem('apple', 55, 2);
const buns = createNewItem('buns package(8)', 233);
const cakeMix = createNewItem('cake mix', 345, 1, "for the party tomorrow night.");
var testList = [];
testList.push(banana,apple,buns,cakeMix);

export default testList;

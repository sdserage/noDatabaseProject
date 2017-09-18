// import Item from '../../src/models/Item';
// import testList from '../../src/components/testList';

let items = [
  {
    id:0,
    name:'banana',
    price: 40,
    quantity: 3,
  },
  {
    id:1,
    name:'apple',
    price: 55,
    quantity: 2,
  },
  {
    id:2,
    name:'buns package(8)',
    price: 233,
    quantity: 1
  },
  {
    id:3,
    name:'cake mix',
    price: 345,
    quantity: 1
  }
]; //[];
let id = 4;//0;

module.exports={
  create(req,res,next){
    const {name, price} = req.body;
    items.push({id, name, price});
    id++
    res.status(200).send(items);
  },
  read(req,res,next){
    res.status(200).send(items);
  },
  update(req,res,next){
    const reqIndex = req.params.index;
    const {name, price} = req.body;
    items.splice(reqIndex, 1,Object.assign(items[reqIndex], {name, price}));
    res.status(200).send(items);
  },
  delete(req,res,next){
    const reqIndex = req.params.index;
    items.splice(reqIndex, 1);
    res.status(200).send(items);
  }
};

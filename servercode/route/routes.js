const express = require('express');
const router = express.Router();

const Item = require('../model/shoppingItem');


router.get('/items',(req,res,next)=>{
  //res.send("Routing works Finally! dont Stress sumit!");
  Item.find((err,items)=>{
    if(err) res.json(err);
    else res.json(items);
  })
})

router.post('/item',(req,res,next)=>{
  let newShoppingItem = new Item({
    itemName: req.body.itemName,
    itemQuantity: req.body.itemQuantity,
    itemBought:req.body.itemBought
  });
  newShoppingItem.save((err,item)=>{
    if(err) res.json(err);
    else res.json({msg:"Item has added to db"})
  })
})

router.put('/item/:id',(req,res,next)=>{
  Item.findOneAndUpdate({_id: req.params.id},{
    $set: {
      itemName: req.body.itemName,
      itemQuantity: req.body.itemQuantity,
      itemBought:req.body.itemBought
    }
  },function(err,result){
      if(err) res.json(err);
      else res.json(result);
  })

})

router.delete('/item/:id',(req,res,next)=>{
  Item.deleteOne({_id: req.params.id},(err,result)=>{
    if(err) res.json(err);
    else res.json(result);
  })

});



module.exports = router;
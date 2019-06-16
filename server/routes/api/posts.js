const  express =require('express');
const mongodb = require('mongodb');
const router = express.Router();
//get post
router.get('/' , async(req ,res) => {
     const posts= await loadPostCollection();
     res.send(await posts.find({}).toArray());
});
//delete  post
//add  post
router.post('/', async (req, res)=>{
const posts =await loadPostCollection();
await  posts.insertOne({
    test:req.body.text,
    createdAt : new Date()
});
res.status(201).send();
});
//delete  reqvest
router.delete('/:id', async(req ,res)=>{
const post =await loadPostCollection();
await post.deleteOne({_id:new  mongodb.ObjectID(req.params.id)});
res.status(201).send();
});
async function  loadPostCollection () {
    const client = await mongodb.MongoClient.connect('mongodb://supun:supun123@ds031117.mlab.com:31117/supun_vue_express',{
useNewUrlParser: true
    });
    return client.db('supun_vue_express').collection('posts');
}
module.exports = router;
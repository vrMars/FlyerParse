var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
    var merchants = fs.readFileSync('./dataset/merchants.txt', 'utf8').toString().split('\n');
    const product = req.query.product.toLowerCase();
    try {
        output = [];
        for (const merchant of merchants) {
            if (merchant !== '') {
                var data = fs.readFileSync('./dataset/' + merchant + '.json', 'utf8');
                const obj = JSON.parse(data);
                // check query
                const items = obj.items;
                for (const item of items) {
                    if (item.name && item.name.toLowerCase().includes(product)) {
                        output.push({"name": item.name, "price": item.current_price, "merchant": merchant, "merchant_id": item.merchant_id });
                    } 
                }
            }
        }
        output.sort((a,b) => {
            return a.price - b.price;
        });
        res.send(output);
    } catch(e) {
        console.log('Error: ', e.stack);
    }  
  
  // res.render('index', { title: 'Express' });
});

module.exports = router;

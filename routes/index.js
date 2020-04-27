var express = require('express');
var router = express.Router();
var fs = require('fs');
const { spawn } = require('child_process');

router.post('/', (req, res, next) => {
    console.log('here');
    if (req.body.queryResult.parameters.food) {
        // run generation script
        const python = spawn('python3', ['./dataset/getFlyers.py']);
        python.on('close', (code) => {
            console.log(code);
            if (code == 0) {
                var merchants = fs.readFileSync('./dataset/merchants.txt', 'utf8').toString().split('\n');
                const product = req.body.queryResult.parameters.food.toLowerCase();
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
                                    output.push(
                                    {
                                        "name": item.name, 
                                        "price": item.current_price, 
                                        "merchant": item.merchant_name, 
                                        "merchant_id": item.merchant_id 
                                    });
                                } 
                            }
                        }
                    }
                    output.sort((a,b) => {
                        return a.price - b.price;
                    });

                    const formattedOutput = 
                        {
                            "payload": {
                                "google": {
                                    "expectUserResponse": true,
                                    "richResponse": {
                                        "items": [
                                            {
                                                "simpleResponse": {
                                                    "textToSpeech": "You can find " + output[0].name + " at " + output[0].merchant + " for " + output[0].price + " dollars."
                                                }
                                            }
                                        ]
                                    }
                                }
                            }
                        };

                    res.send(formattedOutput);
                } catch(e) {
                    console.log('Error: ', e.stack);
                }  

            }

        })
    } else {
        res.render('index', { title: 'Express' });
    } 
});

/* GET home page. */
router.get('/', function(req, res, next) {
    if (req.query.product) {
        // run generation script
        const python = spawn('python3', ['./dataset/getFlyers.py']);
        python.on('close', (code) => {
            console.log(code);
            if (code == 0) {
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
                                    output.push(
                                    {
                                        "name": item.name, 
                                        "price": item.current_price, 
                                        "merchant": item.merchant_name, 
                                        "merchant_id": item.merchant_id 
                                    });
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

            }

        })
    } else {
        res.render('index', { title: 'Express' });
    } 
});

module.exports = router;

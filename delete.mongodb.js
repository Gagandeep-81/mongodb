use('ecommerce');
db.orders.deleteMany({status:"Delivered"});

db.products.deleteMany({price:{$lt: 100}});
db.products.deleteMany({price:{$lt: 10}});
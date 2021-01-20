const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Order = require("../BackEndHandling(Models)/Order");
const Product = require("../BackEndHandling(Models)/Product");
const chalk = require("chalk");

router.get("/", (req, res, next) => {
  Order.find()
    .select("product days _id name price totalRent")
    .populate("product", "name")
    .exec()
    .then((docs) => {
      res
        .status(200)
        .json({
          count: docs.length,
          orders: docs.map((doc) => {
            return {
              _id: doc._id,
              product: doc.product,
              days: doc.days,
              name: doc.name,
              price: doc.price,
              totalRent: doc.totalRent,
              request: {
                type: "GET",
                url: "http://localhost:5000/orders/" + doc._id,
              },
            };
          }),
        })

        .catch((err) => {
          res.status(500).json({
            error: chalk.red.bold(err),
          });
        });
    });
});

router.post("/", (req, res, next) => {
  Product.findById(req.body.productId)
  .then((product) => {
    if (!product) {
      return res.status(404).json({
        message: "Product not found",
      });
    } else {

      const order = new Order({
        _id: mongoose.Types.ObjectId(),
        days: req.body.days,
        product: req.body.productId,
        name: product.name,
        price: product.price,
        totalRent: (req.body.days*product.price),
      });
      return (
        order
          .save()
          .then((result) => {

            console.log(result);
            console.log("result");
            console.log(result.product);
            res.status(201).json({
              message: "Order placed",
              createdOrder: {
                _id: result._id,
                product: result.product,
                days: result.days,
                name: result.name,
                price: result.price,
                totalRent: result.totalRent
              },
              request: {
                type: "GET",
                url: "http://localhost:5000/products/" + result._id,
              },
            });
            Product.updateOne(
              {"_id": req.body.productId}, 
              {$set: {"descriptionRegardingAvailability": false}}
              )
              .exec()
              .then((result) => {
                res.status(200).json({
                  message: "Product deleted",
                  request: {
                    type: "POST",
                    url: "http://localhost:5000/products/",
                    body: {
                      name: "String",
                      price: "Number",
                    },
                  },
                });
              })
              .catch((err) => {
                console.log(err);
                res.status(500).json({
                  error: err,
                });
              });
          })
          .catch(err => {
            console.log(err);
            res.status(500).json({
              error: err,
            });
          })

      );
    }
  });
});

router.get("/:orderId", (req, res, next) => {
  Order.findById(req.params.orderId)

    .populate("product")
    .exec()
    .then((order) => {
      if (!order) {
        return res
          .status(404)
          .json({
            message: "Order not found",
          })

          .populate("product")
          .exec()
          .then((order) => {
            if (!order) {
              return res.status(404).json({
                message: "Order not found",
              });
            }
            res
              .status(200)
              .json({
                order: order,
                request: {
                  type: "GET",
                  description: "GET DETAILS OF ALL ORDERS by below link",
                  url: "http://localhost:5000/Bookings  ",
                },
              })
              .catch((err) => {
                res.status(500).json({
                  error: err,
                });
              });
          });
      }
    });
});

router.delete("/:orderId", (req, res, next) => {
  Order.findById(req.params.orderId)
    .populate("product")
    .exec()
    .then((order) => {
      if (!order) {
        return res.status(404).json({
          message: "Order not found",
        });
      }

      const product = new Product({
        _id: new mongoose.Types.ObjectId(),
        name: order.name,
        price: order.price,
      });
      product
        .save()
        .then((result) => {
          console.log(result);
          res.status(201).json({
            message: "Created Product successfully",
            createdProduct: {
              name: result.name,
              price: result.price,
              _id: result.id,
              request: {
                type: "GET",
                url: "http://localhost:5000/products/" + result.id,
              },
            },
          });
          Order.deleteOne({
            _id: req.params.orderId,
          })
            .exec()
            .then((result) => {
              console.log(result);
              res.status(200).json({
                message: "order deleted",
                request: {
                  type: "POST",
                  url: "http://localhost:5000/Bookings",
                  body: {
                    productId: "ID",
                    days: "Number",
                  },
                },
              });
            })
            .catch((err) => {
              res.status(500).json({
                error: err,
              });
            });
        })
        .catch((err) => {
          console.log(err);
          res.status(500).json({
            error: err,
          });
        });
     
    })
    .catch((err) => {
      res.status(500).json({
        error: err,
      });
    })

    .catch((err) => {
      res.status(500).json({ error: err });
    });
});

module.exports = router;

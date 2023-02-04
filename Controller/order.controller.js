const db = require('./../model/index');

const addOrder = async (req, res) => {
  try {
    let orderDetail = req.body;
    let completeOrder;
    for (let i = 0; i < orderDetail.productId.length; i++) {
      completeOrder = await db.order.create({
        address: orderDetail.address,
        paymentMethod: orderDetail.paymentMethod,
        totalBill: orderDetail.totalBill,
        totalQuantity: orderDetail.totalQuantity,
        phone: orderDetail.phone,
      });
      let product = await db.product.findByPk(orderDetail.productId[i]);
      let user = await db.user.findByPk(orderDetail.userId);
      await completeOrder.setUser(user);
      await completeOrder.setProduct(product);
    }
    res.status(200).json({ complete: 'Your Order Successfully Placed ' });
    res.end();
  } catch (error) {
    res.status(400).json({ notComplete: 'Your Order Unsuccessfully Placed' });
    res.end();
  }
};

const getOrderByUser = async (req, res) => {
  let id = req.body.id;
  let allOrder = await db.order.findAll({
    where: {
      userId: [id],
    },
    include: [db.product],
  });

  res.status(200).json(allOrder);
  res.end();
};

module.exports = { addOrder, getOrderByUser };

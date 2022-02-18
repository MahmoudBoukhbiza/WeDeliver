import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrder } from "../../JS/actions/order";
import EmptyOrder from "./EmptyOrder";
import OrderCard from "./OrderCard";

const OrderList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getOrder());
  }, []);

  const orders = useSelector((state) => state.orderReducer.orders);
  const isEmpty = useSelector((state) => state.orderReducer.isEmpty);

  return (
    <div>
      {isEmpty ? <EmptyOrder /> : orders.map((el) => <OrderCard />)}
    </div>
  );
};

export default OrderList;

import React, { useState, useEffect } from 'react';
import Navbar from '../../components/NavbarSeller/Navbar';
import { fetchSellersOrders } from '../../helpers/api';

// imported components
import OrderCard from '../../components/SellerOrderCard/OrderCard';

function Orders() {
  const [orders, setOrders] = useState([]);

  const user = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    fetchSellersOrders(user.id).then((response) => setOrders(response));
  }, [user.id]);
  return (
    <section>

      <Navbar />

      <section>
        {
          orders.map((order) => (<OrderCard
            key={ order.id }
            orderData={ order }
          />))
        }
      </section>

    </section>
  );
}

export default Orders;

import {useState, useEffect} from "react";
import Order from "./Order/Order";
import  "./Orders.scss";
import { useSelector, useDispatch } from 'react-redux';
import { setOrders } from './../../redux/ordersSlice';
import api from './../../api';

function Orders(props) {
    
    const [loading, setLoading] = useState(true);

    const orders = useSelector((state) => state.orders.list);

    const orderIds = useSelector((state) => state.orders.orderIds);

    const dispatch = useDispatch();

    useEffect(() => {

        api.get('/orders')
        .then((response) => {
            if(response.status === 200){
                dispatch(setOrders(response.data));
                setLoading(false);
             }
        });
    
    }, [dispatch]);

  
  
    return(
    <div className="orders">
        {loading &&
         <img className="loading" src="images/loading.gif" alt="loading"/> 
        }

        {!loading &&
         <p className="order">Total Orders: <em className="ordernumber">{orderIds.length}</em></p>
        }

        {!loading &&
        orders.map(
            (order, index) => (
                <Order
                 key={index}
                 order={order}
                />
            )
        )
        }    
    </div>
    );
}

export default Orders;
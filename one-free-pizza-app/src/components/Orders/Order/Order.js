import {useState} from "react";
import './Order.scss';
import {MdPeople} from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { removeOrder } from '../../../redux/ordersSlice';
import api from "../../../api";


function Order(props) { 


  const dispatch = useDispatch();
  const[remove, setRemove] = useState(false);
  const[Removesuccess, setremoveSuccess] = useState(false);
  
  const handleRemoveClick = () => {
    const id = props.order.id;
    setRemove(true);

    api.delete('/orders/' + id)
    .then((response) => {
      if(response.status === 200){
        dispatch(removeOrder(id));
        setremoveSuccess(true);
      }
    });
    
  }

  const RemoveSuccess = () => {
		alert("Success! To see order list click OK ");
    return(
      <div className="ordercomponent"> 
      <h3 className="username"><MdPeople />{props.order.name} </h3>
      <div className="label">Address: <em className='item'>{props.order.address}</em></div>
      <div className="label">Style: <em className='item'>{props.order.style}</em></div>
      <div className="label">Crust: <em className='item'>{props.order.crust}</em></div>
      <div className="label">Extra Cheese: <em className='item'>{props.order.cheese}</em></div>
     
      <button className="remove-button" onClick={handleRemoveClick}>REMOVE</button>
    </div> 
    );
	}

  const OrderList = () => {
  
    return (
    <div className="ordercomponent"> 
        <h3 className="username"><MdPeople />{props.order.name} </h3>
        <div className="label">Address: <em className='item'>{props.order.address}</em></div>
        <div className="label">Style: <em className='item'>{props.order.style}</em></div>
        <div className="label">Crust: <em className='item'>{props.order.crust}</em></div>
        <div className="label">Extra Cheese: <em className='item'>{props.order.cheese}</em></div>
       
        <button className="remove-button" onClick={handleRemoveClick}>REMOVE</button>
    </div> 
  ); 

  }

  const Remove = () => {
    return (
        <div>
            <img className="loading" src="images/loading.gif" alt="loading"/>
        </div>
    );
}


if (Removesuccess) {
    return RemoveSuccess();
}
else if (remove) {
    return Remove();
}
else {
    return OrderList();
}

} 
export default Order;
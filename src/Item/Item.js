import React from 'react'
import "./Item.css";
import UpdatePop from '../UpdatePop/UpdatePop';

const Item = (props) => {
  
  return (

        <div className='item'>
            <h2>Id : {props.id}</h2>
            <h5>Product ID : {props.productId}</h5>
            <h5>Product Name : {props.productName}</h5>
            <h5>Amount : {props.amount}</h5>
            <h5>Customer Name : {props.customerName}</h5>
            <h5>Status : {props.status}</h5>
            <h5>Transaction Date : {props.transactionDate}</h5>
            <h5>Created By : {props.createdBy}</h5>
            <h5>Created On : {props.createdOn}</h5>
            <div className='item--wrapper' onClick={!props.popStatus ? ()=>props.handlePop(props) : undefined}>
                <div className='item--wrapper--button'>Update</div>
            </div>
           
        </div>
  )
}

export default Item
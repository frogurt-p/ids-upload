import React from 'react'
import "./UpdatePop.css";
import { useForm } from 'react-hook-form';
import axios from 'axios';

const UpdatePop = (props) => {
  const {register, handleSubmit, setValue} = useForm();

  return (
    <div className='pop--overlay'>
        <div className='pop--board'>

          <div className='pop--board--title'>
          <h2>Update ID : {props.id}</h2>
          </div>

          <div className='pop--board--exit' onClick={props.disablePop}>
          <h2>X</h2>
          </div>

          <div >
            <form className='pop--board--form' onSubmit={ handleSubmit((data)=>{
              axios.put(`http://localhost:3000/data/${props.id}`, data ).then((res)=>{
                alert(`ID ${props.id} Berhasil diupdate`)
                props.disablePop();
                props.setUpdateCount(prevState =>  prevState + 1)
              })
              // console.log(data)
              
              })}>
              {setValue("productID",props.productId)}
              {setValue("productName",props.productName)}
              {setValue("amount",props.amount)}
              {setValue("customerName",props.customerName)}
              {setValue("status",props.status)}
              {setValue("transactionDate",props.transactionDate)}
              {setValue("createBy",props.createdBy)}
              {setValue("createOn",props.createdOn)}
              
              <div>
                  <h3>Product ID</h3>
                  <input {...register("productID")} placeholder='Product ID'/>
              </div>
              
              <div>
                  <h3>Product Name</h3>
                  <input {...register("productName")} placeholder='Product Name'/>
              </div>

              <div>
                  <h3>Amount</h3>
                  <input {...register("amount")} placeholder='Amount'/>
              </div>
              
              <div>
                  <h3>Customer Name</h3>
                  <input {...register("customerName")} placeholder='Customer Name'/>
              </div>

              <div>
                  <h3>Status</h3>
                  <input {...register("status")} placeholder='Status'/>
              </div>

              <div>
                  <h3>Transacton Date</h3>
                  <input {...register("transactionDate")} placeholder='Transaction Date'/>
              </div>

              <div>
                  <h3>Created By</h3>
                  <input {...register("createBy")} placeholder='Created By'/>
              </div>

              <div>
                  <h3>Created On</h3>
                  <input {...register("createOn")} placeholder='Created On'/>
              </div>

              <div className='pop--board--form--submit'>
                   <input type="submit" />
              </div>

            </form>
          </div>


        </div>
        
        

    </div>
    
  )
}

export default UpdatePop
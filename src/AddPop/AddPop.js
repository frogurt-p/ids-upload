import React from 'react'
import "../UpdatePop/UpdatePop.css";
import { useForm } from 'react-hook-form';
import axios from 'axios';

const AddPop = (props) => {
  const {register, handleSubmit} = useForm();
    
  const getCurrentId = () =>{
    var arr = [];
    props.jsonData.map((item)=>{
      arr.push(item.id)
    })
   const nextId = Math.max(...arr) + 1;
   return nextId;
  }
  getCurrentId();
  return (
    <div className='pop--overlay'>
        <div className='pop--board'>

          <div className='pop--board--title'>
          <h2>Add Order | ID : {getCurrentId()}</h2>
          </div>

          <div className='pop--board--exit' onClick={props.disablePop}>
          <h2>X</h2>
          </div>

          <div >
            <form className='pop--board--form' onSubmit={handleSubmit((data)=>{
              const newData = {id : getCurrentId(), ...data}
              axios.post('http://localhost:3000/data', newData).then((res)=>{
                alert("Posting data berhasil")
                props.disablePop();
                props.setUpdateCount(prevCount=> prevCount + 1)
              })
            })}>
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
                   <input type="submit" value="Add Order" />
              </div>

            </form>
          </div>


        </div>
        
        

    </div>
    
  )
}

export default AddPop
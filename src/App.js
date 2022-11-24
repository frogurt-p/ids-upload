import logo from './logo.svg';
import './App.css';
import viewData from './viewData.json';
import Item from './Item/Item';
import UpdatePop from './UpdatePop/UpdatePop';
import React from 'react'
import axios from 'axios';
import AddPop from './AddPop/AddPop';

function App() {
  // console.log(viewData)
  const [popStatus, setPopStatus] = React.useState(false);
  const [addPopStatus, setAddPopStatus] = React.useState(false);
  const [curObj, setCurObj] = React.useState({});
  const [jsonData, setData] = React.useState({});
  const [loaded, setLoaded] = React.useState(false);
  const [updateCount, setUpdateCount] = React.useState(0);

  React.useEffect(()=>{
    axios.get("http://localhost:3000/data").then((res)=>{
      setData(res?.data ?? []);
      setLoaded(true)
    })
  },[updateCount])

  const handlePop = (ref) => {
    setPopStatus(true);
    setCurObj(ref);
  }
  const disablePop = () => {
    setPopStatus(false);
    setAddPopStatus(false);
  }

  return (
    <div>
      {addPopStatus && <AddPop
      disablePop={disablePop}
      jsonData={jsonData}
      setUpdateCount={setUpdateCount}/>}


       { popStatus && <UpdatePop
       disablePop={disablePop}
       setUpdateCount={setUpdateCount}
       id={curObj.id}
       productId={curObj.productId}
       productName={curObj.productName}
       amount={curObj.amount}
       status={curObj.status}
       transactionDate={curObj.transactionDate}
       createdBy={curObj.createdBy}
       createdOn={curObj.createdOn}
       customerName={curObj.customerName}/>}


      <nav>
      <h2>ViewData</h2>
        <div className='App--addButton' onClick={()=>{setAddPopStatus(true)}}>
          <h2>Add Data +</h2>
        </div>
      </nav>
      
      <div className="App">
      { loaded && jsonData.map((item)=>{
        return <Item key={item.id} 
        id={item.id}
        productId={item.productID}
        productName={item.productName}
        amount={item.amount}
        customerName={item.customerName}
        status={item.status}
        transactionDate={item.transactionDate}
        createdBy={item.createBy}
        createdOn={item.createOn}
        popStatus = {popStatus}
        handlePop={handlePop}
        /> 
      })}
      </div>
      
    </div>
    
  );
}

export default App;

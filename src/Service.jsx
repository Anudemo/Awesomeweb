import React from 'react';
import Card from './Card';
import Sdata from './Sdata';



const Service=()=> {
  return (
    <>
<div className="my-5">
  
</div>
<div className="container-fluid mb-5">
<div className="row">
  <div className="col-10 mx-auto">
    <div className="row gy-4">
     
       {
       Sdata.map((val,ind)=>{
         return <Card
           imgsrc={val.imgsrc}
           title={val.title}
           key={val.ind}
         />
       })
       }
      
  </div>
  </div>
</div>

</div>
    </>
  )
    
  }
export default Service;

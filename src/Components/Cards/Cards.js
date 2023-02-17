import React, { useEffect, useState } from 'react'
import './cards.css'
import gigname from '../../images/gigname.png'
import calender from '../../images/gigCalender.png'
import budget from '../../images/gigBudget.png'


function Cards({item}) {
  const [data,setData]=useState([])

  console.log(item);

const getData=()=>{
  return fetch('http://localhost:5000/details')
  .then((response)=>response.json()).
  then((datas)=>setData(datas.data))
}


useEffect(()=>{
getData()
},[])

console.log(data);



  return (
    <div>
       <div className='container ms-4 mt-5 '>
        {
        item.length>0?(
          item.map((display)=>(
            <div style={{ height:'370px',width:"320px"}} className='mt-3 bg-light rounded-3 border '>
              <div className='d-flex'>
                <div><img style={{width:'10x'}} className='pt-2 ps-2' src={gigname}/></div>
                <div>
                  <h6 className='pt-2 ps-3 text-secondary'>Gig Name</h6>
                  <h6 className=' ps-3 text-dark'><b>{display.gigname}</b></h6>
                </div>
              </div>

              <div className='d-flex'>
                <div><img style={{width:'30x'}} className='pt-4 ps-2' src={calender}/></div>
                <div>
                  <h6 className='pt-2 ps-3  text-secondary'>Required Date</h6>
                  <h6 className=' ps-3 text-dark'><b>{display.date}</b></h6>
                </div>
              </div>

              <div className='d-flex'>
                <div><img style={{width:'30x'}} className='pt-4 ps-2' src={budget}/></div>
                <div>
                  <h6 className='pt-2 ps-3 text-secondary'>Total Budget</h6>
                  <h6 className=' ps-3 text-dark'><b>{display.budget}</b></h6>
                </div>
              </div>
              <h6 style={{ fontSize:'14px'}} className='text-center'><b>100% Secured</b></h6>
              <hr style={{ width:'100%',border:"5px solid #00ff2a",borderRadius:'20px'}}/>
              <h6 style={{ fontSize:'14px'}} className='text-center'><b>Total Resources</b></h6>


              <div className='d-flex justify-content-around'>
                <div><h6 style={{ fontSize:'12px'}} className='text-center '><b>Required</b></h6></div>
                <div><h6 style={{ fontSize:'12px'}} className='text-center'><b>Hired</b></h6></div>
                <div><h6 style={{ fontSize:'12px'}} className='text-center'><b>Applicants</b></h6></div>
              </div>

              <div className='d-flex justify-content-around'>
                <div><h6 style={{ fontSize:'12px'}} className='text-center '><b>1</b></h6></div>
                <div><h6 style={{ fontSize:'12px'}} className='text-center'><b>1</b></h6></div>
                <div><h6 style={{ fontSize:'12px'}} className='text-center'><b>1</b></h6></div>
              </div>
            </div>
          ))): data.map((display)=>(
            <div style={{ height:'370px',width:"320px"}} className='mt-3 bg-light rounded-3 border '>
              <div className='d-flex'>
                <div><img style={{width:'10x'}} className='pt-2 ps-2' src={gigname}/></div>
                <div>
                  <h6 className='pt-2 ps-3 text-secondary'>Gig Name</h6>
                  <h6 className=' ps-3 text-dark'><b>{display.gigname}</b></h6>
                </div>
              </div>

              <div className='d-flex'>
                <div><img style={{width:'30x'}} className='pt-4 ps-2' src={calender}/></div>
                <div>
                  <h6 className='pt-2 ps-3  text-secondary'>Required Date</h6>
                  <h6 className=' ps-3 text-dark'><b>{display.date}</b></h6>
                </div>
              </div>

              <div className='d-flex'>
                <div><img style={{width:'30x'}} className='pt-4 ps-2' src={budget}/></div>
                <div>
                  <h6 className='pt-2 ps-3 text-secondary'>Total Budget</h6>
                  <h6 className=' ps-3 text-dark'><b>{display.budget}</b></h6>
                </div>
              </div>
              <h6 style={{ fontSize:'14px'}} className='text-center'><b>100% Secured</b></h6>
              <hr style={{ width:'100%',border:"5px solid #00ff2a",borderRadius:'20px'}}/>
              <h6 style={{ fontSize:'14px'}} className='text-center'><b>Total Resources</b></h6>


              <div className='d-flex justify-content-around'>
                <div><h6 style={{ fontSize:'12px'}} className='text-center '><b>Required</b></h6></div>
                <div><h6 style={{ fontSize:'12px'}} className='text-center'><b>Hired</b></h6></div>
                <div><h6 style={{ fontSize:'12px'}} className='text-center'><b>Applicants</b></h6></div>
              </div>

              <div className='d-flex justify-content-around'>
                <div><h6 style={{ fontSize:'12px'}} className='text-center '><b>1</b></h6></div>
                <div><h6 style={{ fontSize:'12px'}} className='text-center'><b>1</b></h6></div>
                <div><h6 style={{ fontSize:'12px'}} className='text-center'><b>1</b></h6></div>
              </div>




            </div>
          ))
        }
       
        </div>
    </div>
  )
}

export default Cards
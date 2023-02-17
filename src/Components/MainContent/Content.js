import axios from 'axios'
import React, { useState } from 'react'
import grid from '../../images/grid.png'
function Content({searchArray}) {

const [search,setSearch]=useState('')

const searchItem=async ()=>{
  const result= await axios.post('http://localhost:5000/search',{
    search
  })
  console.log(result.data);
  searchArray(result.data)
}

  return (
    <div className='title'>
<h2 className='pt-3 ps-4 fs-4'>Organization Gigs</h2>
<h6 className='pt-1 ps-4 text-secondary'>Manage Your Organization Here</h6>
<div className='d-flex justify-content-around containers ms-4'>
    
<div>All</div>
<div>Open</div>
<div style={{cursor:'pointer'}} className='pt-4 '>Completed
    <hr style={{borderColor: "rgb(236, 119, 11)",borderWidth: '3px'}} />
</div>
<div >Cancelled</div>
<div>

<select className='ms-5 pe-5 pt-2 pb-2 rounded-4 border border-secondary border-1 bg-light '>
    <option value="volvo">Sort By</option>
    <option value="saab">Saab</option>
    <option value="opel">Opel</option>
    <option value="audi">Audi</option>
  </select>

</div>

<div class="sb-example-1 ">
         <div class="search">
            <input type="text" value={search} onChange={(e)=>setSearch(e.target.value)} class="searchTerm" placeholder="Search"/>
            <button type="submit" onClick={searchItem} class="searchButton">
              <i class="fa fa-search"></i>
           </button>
         </div>
      </div>
  <img src={grid} style={{width:'15px'}}/>
</div>



    </div>
  )
}

export default Content
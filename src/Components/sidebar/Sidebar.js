import React, { useState } from 'react'
import Cards from '../Cards/Cards'
import Content from '../MainContent/Content'
import './index.css'
import img1 from '../../images/dashboard.png'
import img2 from '../../images/gigs.png'
import img3 from '../../images/training.png'
import img4 from '../../images/time.png'
import img5 from '../../images/user.png'
import img7 from '../../images/bell.png'
import img8 from '../../images/buissness.jpeg'

function Sidebar() {

const[item,searchItem]=useState([])

    function searchItems(data){
        searchItem(data);
    }


    
const  [show,setshow]=useState(false)

  return (
    <main className={show ? 'space-toggle' : null}>
        
        <header className={`header ${show ? 'space-toggle' : null}`}>
            <div className='header-toggle' onClick={()=>setshow(!show)}>
                <i class="fa fa-bars" aria-hidden="true"></i>
            </div>

<div className='d-flex justify-content-end'>

<div> <img src={img7} className='w-100 pe-4 pt-3'/></div>
<div><img src={img8}  style={{width:'50px',borderRadius:"50%"}} className='me-3' /></div>
<h6 className='pt-3 pe-3' style={{fontSize:'13px'}}><b>Santhosh</b></h6>
<i class="fa fa-caret-down pt-3" style={{cursor:'pointer'}} aria-hidden="true"></i>
</div>

        </header>
        <aside className={`sidebar ${show ? 'show' : null}`}>
            <nav className='nav'>
                <div>
                    <a href='#' className='nav-logo'>
                        <i className='nav-logo-icon'>@</i>
                       
                    </a>
                    <div className='nav-list'>
                    <a href='#' className='nav-link'>
                    <img src={img1} className='w-50'/>

                    </a>
                    <a href='#' className='nav-link'>
                    <img src={img2} className='w-50'/>
                        
                    </a>
                    <a href='#' className='nav-link'>
                        <img src={img3} className='w-50'/>
                        
                    </a>
                    <a href='#' className='nav-link'>
                    <img src={img4} style={{width:'15px'}}/>

                    </a>
                    <a href='#' className='nav-link'>
                    <img src={img5} className='w-50'/>

                    </a>
                    </div>
                </div>
            </nav>
        </aside>
        <Content searchArray={searchItems} />
        <Cards item={item} />
        
    </main>
  )
}

export default Sidebar
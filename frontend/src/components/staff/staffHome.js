import React, { useState } from "react";
// import axios from "axios";
import { Link } from "react-router-dom";

export default function StaffHome(props) {


  return (
  <div className=" text-center">
      <br/>
      <img src={'../images/home.jpg'} className="img-fluid" alt="Responsive "/>
     <br/><br/><br/>

    <div className="row" style={{color:'#3F3232', fontWeight:'bold', fontSize:'18px'}}>
        
        <div className="col-sm">
            <span>Categories</span>
        </div>
        <div className="col-sm">
            <span>Add Items</span>
        </div>
        <div className="col-sm">
            <span>Issued Items</span>
        </div>
        <div className="col-sm">
            <span>Add Customers</span>
        </div>
        <div className="col-sm">
            <span>New Membership</span>
        </div>
    </div>
    <br/><br/><br/><br/>

     <div className="row">
         
         <div className="col">
            <img  src = {'../images/book2.jpg'}  class="img-fluid" alt="Responsive "/>
            <br/>
            <span>Story Books</span>
         </div>

         
         <div className="col">
             <img src={'../images/book2.jpg'} className="img-fluid" alt="Responsive "/>
             <br/>
             <span>Story Books</span>
         </div>
         <div className="col">
             <img  src = {'../images/book3.jpg'}  class="img-fluid" alt="Responsive "/>
             <br/>
            <span>Articles</span>
         </div>
        
         <div className="col">
            <img  src = {'../images/book1.jpg'}  class="img-fluid" alt="Responsive "/>
            <br/>
            <span>Movies and comics</span>
         </div>
    </div>
    <br/><br/>

    <div className="row">
         
         <div className="col">
            <img  src = {'../images/book1.jpg'}  class="img-fluid" alt="Responsive "/>
            <br/>
            <span>Musics</span>
         </div>
         <div className="col">
             <img  src = {'../images/book2.jpg'}  class="img-fluid" alt="Responsive "/>
             <br/>
            <span>Educationl</span>
         </div>
         <div className="col">
            <img  src = {'../images/book3.jpg'}  class="img-fluid" alt="Responsive "/>
            <br/>
            <span>News Papers</span>
         </div>
         <div className="col">
            <img  src = {'../images/book5.jpg'}  class="img-fluid" alt="Responsive "/>
            <br/>
            <span>Childrens Books</span>
         </div>
    </div>
     
    

  </div>
  );
}

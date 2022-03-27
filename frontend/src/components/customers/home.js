import React, { useState } from "react";
// import axios from "axios";
import { Link } from "react-router-dom";

export default function Home(props) {


  return (
  <div className="container text-center">
      <br/>
     <img  src = {'../images/home.jpg'}  class="img-fluid" alt="Responsive "/>
     <br/><br/><br/>
     <h2>The Wonderful World of Reading</h2>
     <p>Read whatever you like whenever you like</p><br/><br/><br/>

     <div className="row">
         
         <div className="col">
            <img  src = {'../images/book2.jpg'}  class="img-fluid" alt="Responsive "/>
            <br/>
            <span>Story Books</span>
         </div>
         <div className="col">
             <img  src = {'../images/book3.jpg'}  class="img-fluid" alt="Responsive "/>
             <br/>
            <span>Articles</span>
         </div>
         <div className="col">
            <img  src = {'../images/book5.jpg'}  class="img-fluid" alt="Responsive "/>
            <br/>
            <span>Magazines</span>
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

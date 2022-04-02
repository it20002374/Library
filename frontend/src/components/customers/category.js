import React, { useState } from "react";
// import axios from "axios";
import { Link } from "react-router-dom";
import "../../css/search.css"

export default function Category(props) {


  return (

    <div className="container" style={{color:'#3F3232'}}>
            <div className="searchbaar">
                <div className="container h-100">
                    <div className="d-flex justify-content-center h-100">
                        <div className="searchbar" >
                            <input className="search_input" type="text" name=""/>
                            <a type="button" className="search_icon"  >
                            <img id="img141" src="../images/loupe.png" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

           <br/><br/>
            <div className="row">
                <div className="col-3">

                    <h4>Other Categories</h4>
                    <ul class="list-group">
                        <li class="list-group-item active" aria-current="true">Books</li>
                        <li class="list-group-item">Magazines</li>
                        <li class="list-group-item">Articles</li>
                        <li class="list-group-item">News Papers</li>
                        <li class="list-group-item">Movies and comics</li>
                        <li class="list-group-item">Articles</li>
                        <li class="list-group-item">News Papers</li>
                        <li class="list-group-item">Movies and comics</li>
                        </ul>

                </div>
                <div className="col-1"></div>
                <div className="col-8 overflow-auto">
                <h3>Books</h3>
                <br/><br/>

                <div className="row">
         
                    <div className="col ">
                        <img  src = {'../images/book2.jpg'}  className="img-fluid" alt="Responsive "/>
                        <br/>
                        <span className="modal-dialog modal-dialog-centered">Story Books</span>
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

            </div>


            <div class="modal" tabindex="-1">
                <div class="modal-dialog">
                    <div class="modal-content">
                   
                    <div class="modal-body">
                        <p>Modal body text goes here.</p>
                    </div>
                    
                    </div>
                </div>
                </div>

    </div>

  );
}

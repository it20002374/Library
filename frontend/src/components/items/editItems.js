import React, {useState, useEffect} from "react";
import Swal from "sweetalert2";
import axios from "axios";

export default function EditItems(){

    const[items,setItems] = useState("");


    // const[Author,setAuthor] = useState("");
    // const[Date,setDate] = useState("");
    // const[SubTitle,setSubTitle] = useState("");
    // const[Quantity,setQuantity] = useState("");
    // const[Price,setPrice] = useState("");
    // const[Category,setCategory] = useState("");
    // const[Description,setDescription] = useState("");
    // const[ItemAvailabilityStatus,setItemAvailabilityStatus] = useState("");

    let [errorMsg,setErrorMsg] = useState("");


    useEffect(()=>{
        function getItems(){
            axios.get("http://localhost:8070/items/get/623d9001e14fb57281e5ea5f")
            .then((res)=>{
                console.log(res)
                setItems(res.data)
            }).catch((err)=>{
                alert(err.errorMsg)    
            })
        }
        getItems();
    },[])

    console.log(items.Title)


    return(

    <div className="items">
        <div className="container" style={{width:'80%'}}>
            <br/><br/>
            <h2 className="text-center" style={{color:'#3F3232', fontWeight:'bold'}}>Edit the {items.Category}</h2>
            <br/><br/>
            <form  id="create-course-form">
                <div className="row">

                    <div className="col-sm">
                        <label for="exampleInputEmail1" class="form-label" style={{color:'#3F3232', fontWeight:'bold'}}>Title <span style={{color:'red'}}>*</span> </label>
                        <input type="text" class="form-control" id="exampleInputtext1" aria-describedby="textHelp" style={{border:'1px solid #3F3232' }} 
                        placeholder={items.Title} disabled/>
                    </div>

                    <div className="col-sm">
                        <label for="exampleInputEmail1" class="form-label" style={{color:'#3F3232', fontWeight:'bold'}}>Author<span style={{color:'red'}}>*</span> </label>
                        <input type="text" class="form-control" id="exampleInputtext1" aria-describedby="textHelp" style={{border:'1px solid #3F3232'}} 
                        placeholder={items.Author} disabled/>
                    </div>

                    <div class="col-sm">
                        <label for="exampleInputEmail1" class="form-label" style={{color:'#3F3232', fontWeight:'bold'}}>Added Date </label>
                        <input type="text" class="form-control" id="exampleInputtext1" aria-describedby="textHelp" style={{border:'1px solid #3F3232'}}
                        placeholder={items.AddedDate} disabled />
                    </div>

                </div>
                <br/><br/>
                <div className="row">
                <div class="col-sm">
                        <label for="exampleInputEmail1" class="form-label" style={{color:'#3F3232', fontWeight:'bold'}}>Rent Price <span style={{color:'red'}}>*</span> </label>
                        <input type="text" class="form-control" id="exampleInputtext1" aria-describedby="textHelp" style={{border:'1px solid #3F3232'}}
                        placeholder={items.Price}
                        />
                    </div>
                    <div class="col-sm">
                        <label for="exampleInputEmail1" class="form-label" style={{color:'#3F3232', fontWeight:'bold'}}>Quantity <span style={{color:'red'}}>*</span></label>
                        <input type="text" class="form-control" id="exampleInputtext1" aria-describedby="textHelp" style={{border:'1px solid #3F3232'}}
                        placeholder={items.Quantity}
                        />
                    </div>
                    <div class="col-sm">
                        <label for="exampleInputEmail1" class="form-label" style={{color:'#3F3232', fontWeight:'bold'}}>Category<span style={{color:'red'}}>*</span> </label>
                        <input type="text" class="form-control" id="exampleInputtext1" aria-describedby="textHelp" style={{border:'1px solid #3F3232'}}
                        placeholder={items.Category}
                       />
                    </div>
                </div>
                <br/><br/>
       
                <div className="row">
                    <div class="col-sm">
                        <label for="exampleInputEmail1" class="form-label" style={{color:'#3F3232', fontWeight:'bold'}}>Description </label>
                        <textarea type="text" class="form-control" id="exampleInputtext1" aria-describedby="textHelp" placeholder={items.Description}/>
                    </div>
                  
                </div>

                <br/><br/>

                <div className="row" >
                    <div className="col-sm" style={{float:'right'}}>
                        <span style={{float:'left', color : '#3FC1C9', fontWeight:'bold'}}>Disabled fields cannot be edited !</span>
                    </div>
                    <div className="col-sm" style={{float:'right'}}>
                        <button type="submit" class="btn" style={{backgroundColor:'#F2AB39',color:'#f5f5f5', fontWeight:'bold', width:'120px', float:'right'}}>Submit</button>
                       
                        <button type="cancel" class="btn" style={{backgroundColor:'#3FC1C9',color:'#f5f5f5', fontWeight:'bold', width:'100px', float:'right', marginRight:'30px'}}>Clear</button>
                        
                    </div>
                </div>
            </form>
        </div>
        </div>
    )

}


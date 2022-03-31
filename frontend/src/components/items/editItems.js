import React, {useState, useEffect} from "react";
import Swal from "sweetalert2";
import axios from "axios";

export default function EditItems(){

    const[items,setItems] = useState("");


    // const[Author,setAuthor] = useState("");
    // const[Date,setDate] = useState("");
    // const[SubTitle,setSubTitle] = useState("");
    const[Quantity,setQuantity] = useState("");
    const[Price,setPrice] = useState("");
    const[Category,setCategory] = useState("");
    const[Description,setDescription] = useState("");
    // const[ItemAvailabilityStatus,setItemAvailabilityStatus] = useState("");

    let [errorMsg,setErrorMsg] = useState("");


    useEffect(()=>{
        function getItems(){
            axios.get("http://localhost:8070/items/get/6245484c1ca4285af7a92b3d")
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


    function updateItem(id) {
        // const objectId = "6245484c1ca4285af7a92b3d";
        console.log(id);
    
        // alert("d0");
        // e.preventDefault();
    
        const UpdatedItem = {
          Price,
          Quantity,
          Category,
          Description
        }
    
        console.log(UpdatedItem);
        //document.write("newStudent");
        axios
          .put("http://localhost:8070/items/update/" + id, UpdatedItem)
          .then(() => {
            //alert("Student Updated");
            document.getElementById("txt").innerHTML =
              "Student Updated Successfully!";
          })
          .catch((err) => {
            alert(err);
          });
      }


    //   function updateItem(e) {
   
    //     const objectId = "6245484c1ca4285af7a92b3d";
    
    //     e.preventDefault();
    
    //     // addImages();
    //     // colors();
    //     // warrentyChecks();
    //     // ItemCategorySelection();
    //     // data.Category = "apple";
    //    //console.log(data.Color_family);
    //   // console.log(data.Category);
    //     console.log(data);
      
    //       axios
    //       .put("http://localhost:8070/items/update/" + objectId, data)
    //       .then(() => {
    
    //         Swal.fire({
    //           position: 'center',
    //           icon: 'success',
    //           title: 'Your Item has been updated',
    //           showConfirmButton: false,
    //           timer: 1500
    //         })
    
    //         props.history.push("/customers/home");
      
    //       })
    //       .catch((err) => {
    //         alert(err);
       
    //       });
        
        
    //   }
    
    //   function handle(e) {
    //     const newdata = { ...data };
    //     newdata[e.target.id] = e.target.value;
    //     setData(newdata);


    return(

    <div className="items">
        <div className="container" style={{width:'80%'}}>
            <br/><br/>
            <h2 className="text-center" style={{color:'#3F3232', fontWeight:'bold'}}>Edit the {items.Category}</h2>
            <br/><br/>
            <form  id="create-course-form">
                <div className="row">

                    <div className="col-sm">
                        <label for="exampleInputEmail1" class="form-label" style={{color:'#3F3232', fontWeight:'bold'}}>Title  </label>
                        <input type="text" class="form-control" id="exampleInputtext1" aria-describedby="textHelp" style={{border:'1px solid #3F3232' }} 
                        placeholder={items.Title} disabled/>
                    </div>

                    <div className="col-sm">
                        <label for="exampleInputEmail1" class="form-label" style={{color:'#3F3232', fontWeight:'bold'}}>Author </label>
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
                        <label for="exampleInputEmail1" class="form-label" style={{color:'#3F3232', fontWeight:'bold'}}>Rent Price  </label>
                        <input type="text" class="form-control" id="exampleInputtext1" aria-describedby="textHelp" style={{border:'1px solid #3F3232'}}
                        placeholder={items.Price}
                        // onChange={(e) => handle(e)}
                        />
                    </div>

                    <div class="col-sm">
                        <label for="exampleInputEmail1" class="form-label" style={{color:'#3F3232', fontWeight:'bold'}}>Quantity </label>
                        <input type="text" class="form-control" id="exampleInputtext1" aria-describedby="textHelp" style={{border:'1px solid #3F3232'}}
                        placeholder={items.Quantity}
                        // onChange={(e) => handle(e)}
                        />
                    </div>

                    <div class="col-sm">
                        <label for="exampleInputEmail1" class="form-label" style={{color:'#3F3232', fontWeight:'bold'}}>Category </label>
                        <input type="text" class="form-control" id="exampleInputtext1" aria-describedby="textHelp" style={{border:'1px solid #3F3232'}}
                        placeholder={items.Category}
                    //    onChange={(e) => handle(e)}
                       />
                    </div>
                </div>
                <br/><br/>
       
                <div className="row">
                    <div class="col-sm">
                        <label for="exampleInputEmail1" class="form-label" style={{color:'#3F3232', fontWeight:'bold'}}>Description </label>
                        <textarea type="text" class="form-control" id="exampleInputtext1" aria-describedby="textHelp" style={{border:'1px solid #3F3232'}} 
                        placeholder={items.Description}
                        // onChange={(e) => handle(e)}
                        />
                    </div>
                  
                </div>

                <br/><br/>

                <div className="row" >
                    <div className="col-sm" style={{float:'right'}}>
                        <span style={{float:'left', color : '#3FC1C9', fontWeight:'bold'}}>Disabled fields cannot be edited !</span>
                    </div>
                    <div className="col-sm" style={{float:'right'}}>
                        <button type="submit" class="btn" style={{backgroundColor:'#F2AB39',color:'#f5f5f5', fontWeight:'bold', width:'120px', float:'right'}}
                        onClick={() => updateItem(items._id)}>Submit</button>
                       
                        <button type="cancel" class="btn" style={{backgroundColor:'#3FC1C9',color:'#f5f5f5', fontWeight:'bold', width:'100px', float:'right', marginRight:'30px'}}>Clear</button>
                        
                    </div>
                </div>
            </form>
        </div>
        </div>
    )

}


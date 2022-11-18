import React,{useState,useEffect} from "react";
import Button from 'react-bootstrap/Button';
import Modal  from 'react-bootstrap/Modal';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';


 function Users({selected}){
    const [show, setShow] = useState(false);
    const [data,setData] = useState([]);
    const [modeldata, setModeldata] = useState({
      name:'',
      gender:"",
                      phone:"",
                      email:"",
                      dob:"",
                      age:""
    });
    // const [open,setOpen] = useState(true);
    const handleClose =()=>{setShow(!show)}
    let api = 'https://randomuser.me/api/'
    useEffect(()=>{
        axios.get(api).then(async(res)=>{
             console.log("val", res.data.results,'090',res.data)
            // res.data.results.map(async(item)=>{
            //     console.log("item",item)
                await setData( res.data.results)
            // })
        }).catch((err)=>{
            console.log("err",err)
        })
    },[selected])
    
 return(
    <>
{/* <table>
    <tr>
        <th>name</th>
        <th>gender</th>
    </tr>
  { data.map((item,index)=>{
    {console.log("items",item,selected)}
   return(

    <tr key={index}>
       {selected===item.gender?
       <>
        <td>{item.name.title}{item.name.first}{item.name.last}</td>
        <td>{item.gender}</td>
        </>:
        <p>please select gender</p>
        }
    </tr>
   ) 
   }) }
</table> */}
 <table style={   { margin:"100px auto",
    position:"relative"}}>
  <tr>
    <th>First Name</th>
    <th>Last Name</th>
    <th>Gender</th>
    <th>Location</th>
    <th>Number</th>
    <th>Country</th>
  </tr>
  { data.map((item,index)=>{
    {console.log("items",item,selected)}
   return(

    <tr key={index}>
       {item.gender===selected||selected==='Choose One'?
       <>
        <td style={{cursor:"pointer"}}>{item.name.title}{item.name.first}</td>
        <td>{item.name.last}</td>
        <td>{item.gender}</td>
        <td>{item.location.city}</td>
        <td>{item.phone}</td>
        <td>{item.location.country}</td>
        <td>
                  <button
                    className="btn btn-danger"
                    onClick={() =>{setShow(!show)  ; setModeldata({
                      name:item.name.title+'.'+item.name.first+item.name.last,
                      gender:item.gender,
                      phone:item.phone,
                      email:item.email,
                      dob:item.dob.date,
                      age:item.dob.age
                    })}}
                  >
                    View
                  </button>
                </td>
        </>:
        <p style={{color:'red'}}>----no result found------ </p>
        }
    </tr>
   ) 
   }) }
</table>
<Modal show={show} 
         onHide={handleClose}
        >
          <Modal.Header  closeButton>
            <Modal.Title>User Details</Modal.Title>
          </Modal.Header>
        
          <Modal.Body>
            <>
            <p>Name:{modeldata.name}</p>
            <p>  gender:{modeldata.gender}</p>
                   <p>phone:{modeldata.phone}</p>   
                     <p>email:{modeldata.email}</p> 
                       <p>dob:{modeldata.dob}</p> 
                     <p> age:{modeldata.age}</p>
            </>
  
                  
         
            
          </Modal.Body>
          {/* <Modal.Footer>
            <Button variant="secondary" 
            // onClick={handleClose}
            >
              Close
            </Button>
            <Button variant="primary" 
            // onClick={handleClose}
            >
              Save Changes
            </Button>
          </Modal.Footer> */}
        </Modal>
    </>
);
}

 export default Users ; 
import React from "react";
import Pupup from './Pupup';
class Table extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            list:[]
        }
        this.callAPI = this.callAPI.bind(this)
        this.callAPI();
    }
    callAPI(){
        fetch("https://randomuser.me/api/").then((Response) => 
        Response.json()).then((data)=>{
            console.log(data)
            this.setState({
                list: data.data
            })
        })
    }
    render(){
        let tb_data = this.state.list.map((item)=>{
            return (
                <tr key={item.id}>
                   <td>{item.employee_firstname}</td> 
                   <td>{item.employee_lastname}</td>
                   <td>{item.employee_gender}</td>
                   <td>{item.employee_location}</td>
                   <td>{item.employee_number}</td>
                   <td>{item.employee_country}</td>
                   <td>
                  <button
                    className="btn btn-danger"
                   
                  >
                    View
                  </button>
                </td>
                </tr>
            )
        })
        return (
            <div className="container">
                <table className="table table-striped">
                    <thead>
                        <tr>
                        <th>First Name</th>
    <th>Last Name</th>
    <th>Gender</th>
    <th>Location</th>
    <th>Number</th>
    <th>Country</th>
                        </tr>
                    </thead>
                    
                </table>
            </div>
        )
    }
}
export default Table;
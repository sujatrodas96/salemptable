import React from 'react';
import axios from 'axios';

class Update extends React.Component
{
    state={
             id:"",
            empname:"",
            emploc:"",
            empph:"",
            empdept:"",
            empdesig:""
    }
    updateUser=(e)=>{ 
        e.preventDefault();  
        axios.post('http://localhost/ci_sujatro/index.php/CrudControl/updateByID',
            JSON.stringify({
            "id":this.state.id,
            "empname":this.state.empname,
            "emploc":this.state.emploc,
            "empph":this.state.empph,
            "empdept":this.state.empdept,
            "empdesig":this.state.empdesig
        })).then(res=>{
                console.log(res.data)
            })
            .catch(err=>{
                console.log(err)
            })
    }
handleChange =(e) =>{
    this.setState({[e.target.name]:e.target.value});
}
     render() {
        return (
            <form name="fm" onSubmit={this.updateUser}>
                  USER_ID:<input type="number" name="id"    value={this.state.id}    onChange={this.handleChange}/>
                <br></br><br></br>
                  EMPNAME : <input type="text" name="empname"   value={this.state.empname}    onChange={this.handleChange}/>
                  <br></br><br></br>
                  EMPLOC : <input type="text" name="emploc" value={this.state.emploc}  onChange={this.handleChange}/>
                  <br></br><br></br>
                  EMPPH : <input type="number"  name="empph" value={this.state.empph} onChange={this.handleChange}/>
                  <br></br><br></br>
                  EMPDEPT : 
                  <input type="text" name="empdept"  value={this.state.empdept} onChange={this.handleChange}/>
                  <br></br><br></br>
                  EMPDESIG : 
                  <input type="text" name="empdesig" value={this.state.empdesig}  onChange={this.handleChange}/>
                  <br></br>
                  <input type="submit" name="update"/>
                  </form>
        );
    }
}

export default Update
import React from 'react';
import axios from 'axios';

class Register extends React.Component
{
  state={
      empname:'',
      emploc:'',
      empph:'',
      empdept:'',
      empdesig:'',
      msg:''
     }
     
     handleChange=(e)=>{
         this.setState({[e.target.name]:e.target.value});
     }

     handleSubmit=(e)=>{
        e.preventDefault();
        axios.post('http://localhost/CI_sujatro/index.php/CrudControl/insertData',
        JSON.stringify({
            empname:this.state.empname,
            emploc:this.state.emploc,
            empph:this.state.empph,
            empdept:this.state.empdept,
            empdesig:this.state.empdesig
        })).then(res=>{
                console.log(res.data)
                this.setState({msg:'USER REGISTRATION SUCCESSFUL !'});
            })
            .catch(err=>{
                console.log(err)
            })
     }


     render()
     {
         return(
           <>
              <form name="fm"  onSubmit={this.handleSubmit}>
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
                  {/* LOCATION :
                  <select name="user_loc" onChange={this.handleChange}>
                    <option value="">Select Location</option>
                    <option value="india">India</option>
                    <option value="australia">Australia</option>
                    <option value="canada">Canada</option>
                    <option value="srilanka">SriLanka</option>
                    <option value="pakistan">Pakistan</option>
                  </select> */}
                  <br></br><br></br>
                  <input type="submit" value="REGISTER"/>
              </form>
                <br></br><br></br>
                <h3>{this.state.msg}</h3>
           </>
         );
     }


}

export default Register
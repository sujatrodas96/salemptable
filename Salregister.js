import React from 'react';
import axios from 'axios';

class Salregister extends React.Component
{
  state={
      basicsalary:'',
      hra:'',
      lta:'',
      ma:'',
      da:'',
      pf:'',
      grosspay:'',
      msg:''
     }
     
     handleChange=(e)=>{
         this.setState({[e.target.name]:e.target.value});
     }

     handleSubmit=(e)=>{
        e.preventDefault();
        axios.post('http://localhost/CI_sujatro/index.php/Empsalinfo/insertData',
        JSON.stringify({
            basicsalary:this.state.basicsalary,
            hra:this.state.hra,
            lta:this.state.lta,
            ma:this.state.ma,
            da:this.state.da,
            pf:this.state.pf,
            grosspay:this.state.grosspay
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
                  BASICSALARY: <input type="number" name="basicsalary"   value={this.state.basicsalary}    onChange={this.handleChange}/>
                  <br></br><br></br>
                   HRA: <input type="number" name="hra" value={this.state.hra}  onChange={this.handleChange}/>
                  <br></br><br></br>
                   LTA : <input type="number"  name="lta" value={this.state.lta} onChange={this.handleChange}/>
                  <br></br><br></br>
                   MA : 
                  <input type="number" name="ma"  value={this.state.ma} onChange={this.handleChange}/>
                  <br></br><br></br>
                   DA : 
                  <input type="number" name="da" value={this.state.da}  onChange={this.handleChange}/>
                  <br></br><br></br>
                   PF:
                   <input type="number" name="pf" value={this.state.pf} onChange={this.handleChange}/>
                   <br></br><br></br>
                   GROSSPAY:
                   <input type="number" name="grosspay" value={this.state.grosspay} onChange={this.handleChange}/>
                  
                  <br></br><br></br>
                  <input type="submit" value="REGISTER"/>
              </form>
                <br></br><br></br>
                <h3>{this.state.msg}</h3>
           </>
         );
     }


}

export default Salregister
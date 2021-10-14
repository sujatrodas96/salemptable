import React from 'react';
import axios from 'axios';

class Search extends React.Component
{
    state={user_id:'',
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
        axios.post('http://localhost/CI_sujatro/index.php/CrudControl/showByID',
        JSON.stringify({
            "id":this.state.user_id
        })).then(res=>{
                console.log(res.data);
                // console.log(res.data.user[0]);
                let flag=res.data.success;
                if(flag==1)
                {
                  this.setState({empname:res.data.user[0].empname});
                  this.setState({emploc:res.data.user[0].emploc});
                  this.setState({empph:res.data.user[0].empph});
                  this.setState({empdept:res.data.user[0].empdept});
                  this.setState({empdesig:res.data.user[0].empdesig});
                  this.setState({msg:''});
                }
                else
                {
                  this.setState({msg:'UserID is wrong. Try Again!'});
                  this.setState({empname:''});
                  this.setState({emploc:''});
                  this.setState({empph:''});
                  this.setState({empdept:''});
                  this.setState({empdesig:''});
                }

            })
            .catch(err=>{
                console.log(err)
            })
    }



    render()
    {
        return(
            <>
             <h4>SEARCH EMPLOYEE  :</h4>
              <form onSubmit={this.handleSubmit}>
                EMPLOYEE ID : 
                <input type="number" name="user_id"  value={this.state.user_id} onChange={this.handleChange}/>
                <br></br><br></br>
                <input type="submit" value="SEARCH"/>
                
              </form>
               <br></br><br></br>
               <h4>{this.state.msg}</h4>
               <br></br><br></br>
               <table style={{backgroundColor:'lightgreen',color:'brown',width:'50%'}}>
                    <tr style={{border:'3px ridge brown'}}>
                       <th>EMPNAME</th>
                       <th>EMPLOC</th>
                       <th>EMPPH</th>
                       <th>EMPDEPT</th>
                       <th>EMPDESIG</th>
                    </tr>
                    <tr style={{border:'3px ridge brown'}}>
                        <td>{this.state.empname}</td>
                        <td>{this.state.emploc}</td>
                        <td>{this.state.empph}</td>
                        <td>{this.state.empdept}</td>
                        <td>{this.state.empdesig}</td>
                    </tr>
               </table>

            </>
        );
    }



}

export default Search
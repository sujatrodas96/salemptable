import React from 'react';
import axios from 'axios';

class Salsearch extends React.Component
{
    state={user_id:'',
           basicsalary:'',
           hra:'',
           lta:'',
           ma:'',
           da:'',
           pf:'',
           grosspay:''
          }


    handleChange=(e)=>{
        this.setState({[e.target.name]:e.target.value});
    }

     
    handleSubmit=(e)=>{
        e.preventDefault();
        axios.post('http://localhost/CI_sujatro/index.php/Empsalinfo/showByID',
        JSON.stringify({
            "id":this.state.user_id
        })).then(res=>{
                // console.log(res.data);
                // console.log(res.data.user[0]);
                let flag=res.data.success;
                if(flag==1)
                {
                  this.setState({basicsalary:res.data.user[0].basicsalary});
                  this.setState({hra:res.data.user[0].hra});
                  this.setState({lta:res.data.user[0].lta});
                  this.setState({ma:res.data.user[0].ma});
                  this.setState({da:res.data.user[0].da});
                  this.setState({pf:res.data.user[0].pf});
                  this.setState({grosspay:res.data.user[0].grosspay});
                  this.setState({msg:''});
                }
                else
                {
                  this.setState({msg:'UserID is wrong. Try Again!'});
                  this.setState({basicsalary:''});
                  this.setState({hra:''});
                  this.setState({lta:''});
                  this.setState({ma:''});
                  this.setState({da:''});
                  this.setState({pf:''});
                  this.setState({grosspay:''});
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
             <h4>SEARCH EMPLOYEE SALARY  :</h4>
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
                       <th>BASICSALARY</th>
                       <th>HRA</th>
                       <th>LTA</th>
                       <th>MA</th>
                       <th>DA</th>
                       <th>PF</th>
                       <th>GROSSPAY</th>
                    </tr>
                    <tr style={{border:'3px ridge brown'}}>
                        <td>{this.state.basicsalary}</td>
                        <td>{this.state.hra}</td>
                        <td>{this.state.lta}</td>
                        <td>{this.state.ma}</td>
                        <td>{this.state.da}</td>
                        <td>{this.state.pf}</td>
                        <td>{this.state.grosspay}</td>
                    </tr>
               </table>

            </>
        );
    }



}

export default Salsearch
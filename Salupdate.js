import React from 'react';
import axios from 'axios';

class Salupdate extends React.Component
{
    state={
            id:"",
            basicsalary:"",
            hra:"",
            lta:"",
            ma:"",
            da:"",
            pf:"",
            grosspay:""
    }
    updateUser=(e)=>{
        e.preventDefault();     
        axios.post('http://localhost/CI_sujatro/index.php/Empsalinfo/updateByID',
        JSON.stringify({
            "id":this.state.id,
            "basicsalary":this.state.basicsalary,
            "hra":this.state.hra,
            "lta":this.state.lta,
            "ma":this.state.ma,
            "da":this.state.da,
            "pf":this.state.pf,
            "grosspay":this.state.grosspay
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
            <div>
            <form name="fm" onSubmit={this.updateUser}>
            USER_ID:<input type="number" name="id"   value={this.state.id}  onChange={this.handleChange}/>
            <br></br><br></br>
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
            <input type="submit" name="update"/>
        </form>
        </div>
        );
    }
}

export default Salupdate
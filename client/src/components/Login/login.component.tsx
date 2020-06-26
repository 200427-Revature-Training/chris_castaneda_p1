import React, { useState, useEffect } from 'react';
import * as usersRemote from '../../remote/users.remote';
import { withRouter, RouteComponentProps } from 'react-router';
import { User } from '../../models/User';
import '../Login/login.component.css'
import { useHistory } from 'react-router';


export const LoginComponent:React.FC = ()=>{
   
    const history = useHistory(); // Access history for Login redirect
    
    const [reimbursements, setReimbursements] = useState<User[]>([]); /**SET PAGE DATA HERE */

    const [inputUsertName, setInputUsertName] = useState('');
    const [inputPassword, setinputPassword] = useState('');

    useEffect(() => {
        loadCredentails();
    }, []);


    const addUser = async () => {
        const payload = {
            userID: undefined, 
            userRole: undefined,
            userName: inputUsertName,
            userPassword: inputPassword
        };
        history.push('/employee');
        
      console.log('Sending authentication request: ', payload);
      const response = await usersRemote.createToken(payload); //SEnd POST
        // setInputUsertName(''); //clear fields
        // setinputPassword('');
        const userName = response.data.userName;
        const roleID = response.data.roleID;
        const accessToken = response.data.accessToken;
       
        localStorage.setItem('userName', userName);
        localStorage.setItem('roleID', roleID); 
        localStorage.setItem('accessToken', accessToken); 
        


        loadCredentails(); 
    };


     const loadCredentails = () => {   

       usersRemote.getAllUserTable().then(user => { 
        setReimbursements(user);
        console.log('Recieved authentication request: ', user);
        });        
    };

    return(
        <div>






            <label>username</label><input type="text" name="text" value={inputUsertName} onChange={e => setInputUsertName(e.target.value)}/>
            
            <label>password</label><input type="password" name="password" value={inputPassword} onChange={e => setinputPassword(e.target.value)}/>
            
            <button onClick={() => addUser()}>Submit</button>

            {/* <table className="table table-striped">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">userName</th>
                        <th scope="col">password</th>
                    </tr>
                </thead>
                <tbody>
                    {reimbursements.map(u => {
                        return (
                            <tr key={u.id}>
                            <td>{u.userName}</td>
                            <td>{u.password}</td>
                        </tr>)
                    })}
                </tbody>
            </table> */}






{/* <section id="main-container">        
        <div id="login-container">


<div className="Panel">
<div className="ui middle aligned center aligned grid">
  <div className="column">
    <h2 className="ui teal image header">
      <img src="assets/images/logo.png" className="image"/>
      <div className="content">
        Log-in to your account
      </div>
    </h2>
    <form className="ui large form">
      <div className="ui stacked segment">
        <div className="field">
          <div className="ui left icon input">
            <i className="user icon"></i>
            <input type="text" name="email" placeholder="E-mail address"/>
          </div>
        </div>
        <div className="field">
          <div className="ui left icon input">
            <i className="lock icon"></i>
            <input type="password" name="password" placeholder="Password"/>
          </div>
        </div>
        <div className="ui fluid large teal submit button">Login</div>
      </div>

    </form>

  
  </div>
</div>
</div>
</div>
</section> */}



        </div>
    );
};
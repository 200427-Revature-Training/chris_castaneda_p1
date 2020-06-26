import React from 'react';
import { Link, withRouter, RouteComponentProps } from 'react-router-dom';
import './navbar.component.css';


const NavbarComponent: React.FC<RouteComponentProps> = (props) => {

    const renderOnCurrentPath = (path: string) => {
        console.log(props.location.pathname);


        // return path === props.location.pathname ? 
        // <span className="sr-only">(current)</span> : <span></span>
    }

    
    return (
        // <nav class="navbar navbar-light" style="background-color: #e3f2fd;"></nav>
            <nav className="navbar navbar-expand-lg navbar-light" id="navbar" >
  
  <a className="navbar-brand font-color" href="#" >Reimburse Trip</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav">
      <a className="nav-item nav-link active font-color" href="#">
      <Link to="/employee">Employee {renderOnCurrentPath('/employee') }</Link>
      </a>
      <a className="nav-item nav-link font-color" href="#">
      <Link to="/reimburse">Reimburse {renderOnCurrentPath('/reimburse') }</Link>
      </a>
      <a className="nav-item nav-link font-color" href="#">
          <Link to="/manager">Manager {renderOnCurrentPath('/manager') }</Link>
      </a>
      <a className="nav-item nav-link font-color" href="#">
          <Link to="/review">Review {renderOnCurrentPath('/review') }</Link>
      </a>
      {/* <a className="nav-item nav-link font-color" href="#">
      <Link to="/template">Template {renderOnCurrentPath('/template') }</Link>
      </a>
      <a className="nav-item nav-link disabled" href="#"  aria-disabled="true">Disabled</a> */}
    </div>
  </div>
</nav>
      

        



        // <nav className="navbar navbar-dark bg-primary">
        //     <a className="navbar-brand" href="#">Bank of Money</a>
        //     <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        //         <span className="navbar-toggler-icon"></span>
        //     </button>
        //     <div className="collapse navbar-collapse" id="navbarNav">
        //         <ul className="navbar-nav">
        //             <li className="nav-item active">
        //                 <Link to="/employee">Employee {renderOnCurrentPath('/employee') }</Link>
        //             </li>
        //             <li className="nav-item">
        //                 <Link to="/reimburse">Reimburse {renderOnCurrentPath('/reimburse') }</Link>
        //             </li>
        //             <li className="nav-item">
        //                 <Link to="/manager">Manager {renderOnCurrentPath('/manager') }</Link>
        //             </li>
        //             <li className="nav-item">
        //                 <Link to="/review">Review {renderOnCurrentPath('/review') }</Link>
        //             </li>
        //             <li className="nav-item">
        //                 <Link to="/template">Template {renderOnCurrentPath('/template') }</Link>
        //             </li>
        //         </ul>
        //     </div>
        // </nav>
    )
}

export default withRouter(NavbarComponent);
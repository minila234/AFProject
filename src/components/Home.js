import React from "react";
import './home.css';
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Viewtable } from "./Viewtable";
import {Table} from "./Table";
export class Home extends React.Component {

    render() {

        return (
            <div className="abc">
                Home
                <Link to={"/view"}>View</Link>
                <Link to={"/examination"}>Examination</Link>
                <Link to={"/treatment"}>Treatment</Link>
                <Link to={"/injection"}>Order injection</Link>
                <Link to={"/viewtable"}>Create View</Link>
                <Link to={"/examinationtable"}>Examination view</Link>
                <Link to={"/treatmenttable"}> Treatment view</Link>
                <Link to={"/injectiontable"}>Injection view</Link>
                <div>
              
              
                    </div>
                    <div>
                    <Router>
                       <Table>
                        <Route path ="/viewtable" Component={Viewtable}/>
                   </Table>
                   </Router>
                        </div>
                     
            </div>
        );
    }
}



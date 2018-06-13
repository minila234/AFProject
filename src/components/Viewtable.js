import React from "react";
import { BrowserRouter } from 'react-router-dom';
import axios from 'axios';


export class Viewtable extends React.Component {

    
state={
    view:[]
};

    componentDidMount(){
        axios.get('http://localhost:3001/view/')
        .then(res=>{
            this.setState({
                view:res.data.data || res.data
            });
        });
     }
    render() {
        return (
            <div>
                <h3>The User Page</h3>
                <table class="table table-hover">
                <thead>
                <tr>
      <th scope="col">Injuty</th>
      <th scope="col">visit type</th>
      <th scope="col">remark</th>
      <th scope="col">doctor</th>
    </tr>
  </thead>
  <tbody>
      {this.state.view.map(number=>
    <tr className="table-active"key={number.id}>
      <td>{number.injury}</td>
      <td>{number.visittype}</td>
      <td>{number.iremark}</td>
      <td>{number.Dateandtime}</td>
      <td>{number.doctor}</td>
    </tr>
    
    )}
      </tbody>
  </table>
            </div>
        );
    }
}



import React from "react";
import { BrowserRouter } from 'react-router-dom';

export class Treatmenttable extends React.Component {
  

    render() {
        return (
            <div>
                <h3>Treatment</h3>
                <table class="table table-hover">
                <thead>
                <tr>
      <th scope="col">Treatment Date & Time</th>
      <th scope="col">Treatment</th>
      <th scope="col">Remark</th>
      <th scope="col">Active</th>
    </tr>
  </thead>
  </table>
            </div>
        );
    }
}



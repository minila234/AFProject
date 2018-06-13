import React from "react";
import { BrowserRouter } from 'react-router-dom';

export class Injectiontable extends React.Component {
  

    render() {
        return (
            <div>
                <h3>Injection</h3>
                <table class="table table-hover">
                <thead>
                <tr>
      <th scope="col">Injection Data & Time</th>
      <th scope="col">Injection</th>
      <th scope="col">Remaks</th>
      <th scope="col">Active</th>
    </tr>
  </thead>
  </table>
            </div>
        );
    }
}
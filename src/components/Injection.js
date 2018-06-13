import React from "react";
import { BrowserRouter } from 'react-router-dom';

export class Injection extends React.Component {
   

    render() {
        return (
            <div>
                <h1>Order Injection</h1>
                <div className="form-group">
      <label htmlFor="Injection Data & Time">Injection Data & Time</label>
      <input type="text" className="form-control" id="Injection DataTime" placeholder="Injection Data & Time"></input>
        </div>
        <div className="form-group">
      <label htmlFor="Injection">Injection</label>
      <input type="text" className="form-control" id="Injection" placeholder="Injection"></input>
        </div>
        <div className="form-group">
      <label htmlFor="exampleTextarea">Remark</label>
      <textarea class="form-control" id="Remark" rows="3"></textarea>
    </div>
    <div className="form-group">
      <label htmlFor="Injection">Active</label>
      <input type="text" className="form-control" id="active" placeholder="active"></input>
        </div>
        <button type="submit" class="btn btn-primary">Save</button>
            </div>
        );
    }
}
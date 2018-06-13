import React from "react";
import { BrowserRouter } from 'react-router-dom';

export class Treatment extends React.Component {

    render() {
        return (
            <div>
                <h1>Treatment</h1>
                <div className="form-group">
      <label htmlFor="exampleInputPassword1">Treatment date & time</label>
      <input type="text" class="form-control" id="Treatment date & time" placeholder="Treatment date & time"></input>
    </div>
    <div className="form-group">
      <label htmlFor="exampleSelect2">Treatment</label>
      <select multiple="" class="form-control" id="exampleSelect2">
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
      </select>
    </div>
    <div className="form-group">
      <label htmlFor="exampleTextarea">Remark</label>
      <textarea class="form-control" id="Remark" rows="3"></textarea>
    </div>
    <div className="form-group">
      <label htmlFor="exampleInputPassword1">Active</label>
      <input type="text" class="form-control" id="active" placeholder="Active"></input>
    </div>
    <button type="submit" class="btn btn-primary">Save</button>
            
            </div>
        );
    }
}



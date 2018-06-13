import React from "react";


export class Examination extends React.Component {
    render() {
        return (
            <div >
                <h1>Examination</h1>
                <form>
                <div className="form-group">
      <label htmlFor="Examination Data & Time">Examination Data & Time</label>
      <input type="text" className="form-control" id="Examination DataTime" placeholder="Examination Data & Time"></input>
        </div>
        <div className="form-group">
      <label htmlFor="hight">Hight(cm)</label>
      <input type="text" className="form-control" id="hight" placeholder="Hight"></input>
        </div>
        <div className="form-group">
      <label htmlFor="weight">Weight(kg)</label>
      <input type="text" className="form-control" id="wight" placeholder="wight"></input>
        </div>
        <div className="form-group">
      <label htmlFor="weight">BMI</label>
      <input type="text" className="form-control" id="BMI" placeholder="BMI"></input>
        </div>
        <div className="form-group">
      <label htmlFor="weight">Temperature(C)</label>
      <input type="text" className="form-control" id="temp" placeholder="Temperature"></input>
        </div>
        <div className="form-group">
      <label htmlFor="preasure"> S Blood preasure</label>
      <input type="text" className="form-control" id="Spreasure" placeholder=" S Blood preasure"></input>
        </div>
        <div className="form-group">
      <label htmlFor="preasure"> D Blood preasure</label>
      <input type="text" className="form-control" id="preasure" placeholder="D Blood preasure"></input>
        </div>
        <button type="submit" class="btn btn-primary">Save</button>
                    </form>
            </div>
        );
    }
}
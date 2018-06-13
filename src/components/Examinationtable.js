import React from "react";
import { BrowserRouter } from 'react-router-dom';

export class Examinationtable extends React.Component {
  

    render() {
        return (
            <div>
                <h3>Examinations</h3>
                <table class="table table-hover">
                <thead>
                <tr>
      <th scope="col">data & time</th>
      <th scope="col">Hight(cm)</th>
      <th scope="col">weight(kg)</th>
      <th scope="col">BMI</th>
      <th scope="col">S Blood preasure</th>
      <th scope="col">D Blood preasure</th>
    </tr>
  </thead>
  </table>
            </div>
        );
    }
}
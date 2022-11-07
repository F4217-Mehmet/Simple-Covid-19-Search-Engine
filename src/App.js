import './App.css';
import React, {useState, useEffect} from 'react';
import Axios from 'axios';
import axios from 'axios';



function App() {

  const[data, setData]= useState();
  const[date, setDate]= useState("");

  useEffect(()=>{

    axios
      .get(
        "https://raw.githubusercontent.com/ozanerturk/covid19-turkey-api/master/dataset/timeline.json"
      )
      .then((res) => setData(res.data[date]))
      .catch((err) => console.log(err));
    

  },[data, date])

  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-md-8 mx-auto mt-4">
            <h2 className="text-white text-center display-4 mt-2">
              TÜRKİYE COVID-19 SEARCH ENGINE
            </h2>
            <input
              type="text"
              placeholder="GG/AA/YY"
              className="form-control"
              onChange={(e) => setDate(e.target.value)}
            />
            <table className="table table-dark table-striped">
              <thead>
                <tr>
                  <th scope="col">Date</th>
                  <th scope="col">Number of Tests</th>
                  <th scope="col">Number of Patients</th>
                  <th scope="col">Number of Deaths</th>
                  <th scope="col">Number of Total Deaths</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">{data === undefined ? "-" : data.date}</th>
                  <td>{data === undefined ? "-" : data.tests}</td>
                  <td>{data === undefined ? "-" : data.patients}</td>
                  <td>{data === undefined ? "-" : data.deaths}</td>
                  <td>{data === undefined ? "-" : data.totalDeaths}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

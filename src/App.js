import './App.css';


function App() {


  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-md-8 mx-auto mt-4">
            <h2 className="text-white text-center display-4 mt-2">
              TÜRKİYE COVID-19 ARAMA MOTORU
            </h2>
            <input
              type="text"
              placeholder="GG/AA/YY"
              className="form-control"
            />
            <table class="table table-dark table-striped">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Test Sayısı</th>
                  <th scope="col">Hasta Sayısı</th>
                  <th scope="col">Vefat Sayısı</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>300.000</td>
                  <td>45.000</td>
                  <td>250</td>
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

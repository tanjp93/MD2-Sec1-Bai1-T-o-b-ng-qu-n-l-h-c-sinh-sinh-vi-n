import FormSV from "./Components/FormSV";
import Header from "./Components/Header";
import ListStudent from "./Components/ListStudent";
function App() {
  return (
    <div className="App">
      <div className="row">
        <div className="col-lg-7 grid-margin stretch-card">
          <div className="card">
            {/* START CONTROL */}
           <Header />
            {/* END CONTROL */}
            {/* START LIST STUDENT */}
            <ListStudent/>
            {/* END LIST STUDENT */}
          </div>
        </div>
        {/* START FORM SINH VIEN */}
        <FormSV/>
        {/* END FORM SINH VIÊN */}
      </div>
    </div>
  );
}

export default App;

import AppName from "./Components/AppName";
import "./Components/App.css";


function App() {
  return (
    <center class="todo-container">
      <AppName></AppName>

      <div class="container text-center">
        <div class="row">
          <div class="col-4">
            <input type="text" placeholder="Enter TODO"/>
          </div>
          <div class="col-4">
            <input type="date"/>
          </div>
          <div class="col-2">
            <button type="button" class="btn btn-success">Add</button>
          </div>
       </div>
      </div>

        <div class="row">
          <div class="col-4">
             Buy Milk 
          </div>
          <div class="col-4">
            1233333
          </div>
          <div class="col-2">
            <button type="button" class="btn btn-success">Add</button>
          </div>
        </div>

        
        <div class="row">
          <div class="col-4">
             Go to College 
          </div>
          <div class="col-4">
            1233333
          </div>
          <div class="col-2">
            <button type="button" class="btn btn-success">Add</button>
          </div>
        </div>

    </center>
  );
}

export default App;

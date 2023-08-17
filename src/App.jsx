import { useState } from "react";
import AddWorker from "./components/Workers/AddWorker";
import WorkerList from "./components/Workers/WorkerList";

function App() {

  const [workers, setWorkers] = useState([]);

  return (
    <div className="App bg">
      <header className="App-header">
        <AddWorker setWorkers={setWorkers}/>
        <WorkerList workers={workers} setWorkers={setWorkers}/>
      </header>
    </div>
  );
}

export default App;

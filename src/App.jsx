import AddWorker from "./components/Workers/AddWorker";
import WorkerList from "./components/Workers/WorkerList";

function App() {
  return (
    <div className="App bg">
      <header className="App-header">
        <AddWorker />
        <WorkerList />
      </header>
    </div>
  );
}

export default App;

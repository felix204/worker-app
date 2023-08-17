import Wrapper from "../Helper/Wrapper";
import Card from "../UI/Card";

const WorkerList = (props) => {
  const { workers, setWorkers } = props;

  if (workers.length < 1) {
    return;
  }

  const deleteWorker = (id) => {
    setWorkers(workers.filter((item) => item.id !== id));
  }

  return (
    <Wrapper>
      <Card className="mt-5">
        <ul>
          <li className="flex justify-between">
            <span className="font-bold">İsim</span>
            <span className="font-bold">Maaş</span>
          </li>
          {workers.map((worker) => (
            <li
              className="flex justify-between cursor-pointer hover:shadow-xl p-2"
              key={worker.id}
              onClick={() => deleteWorker(worker.id)}
            >
              <span>{worker.name}</span>
              <span>{worker.wage}</span>
            </li>
          ))}
        </ul>
      </Card>
    </Wrapper>
  );
};

export default WorkerList;

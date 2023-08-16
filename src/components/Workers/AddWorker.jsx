import { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";

const AddWorker = () => {
  const [enteredWorkerName, setEnteredWorkerName] = useState("");
  const [enteredWage, setEnteredWage] = useState("");

  const minwage = 5000;

  const addWorkerHandler = (e) => {
    e.preventDefault();
    
    if (
      enteredWorkerName.trim().length === 0 ||
      enteredWage.trim().length === 0
    ) {
      return;
    }
    if (+enteredWage < minwage) {
      return;
    }
    console.log(enteredWorkerName, enteredWage);
    setEnteredWorkerName("");
    setEnteredWage("");
  };

  return (
    <div>
      <Card className="mt-10">
        <form className="flex flex-col gap-y-2" onSubmit={addWorkerHandler}>
          <label htmlFor="name" className="font-medium">
            Çalışan İsmi
          </label>
          <input
            type="text"
            className="max-w-[40rem] w-full mx-auto border p-2"
            placeholder="Çalışan İsmi Giriniz"
            id="name"
            onChange={(e) => setEnteredWorkerName(e.target.value)}
            value={enteredWorkerName}
          />
          <label htmlFor="wage">Maaş Miktarı</label>
          <input
            type="number"
            className="max-w-[40rem] w-full mx-auto border p-2"
            placeholder="Maaş Miktarı Giriniz"
            id="wage"
            onChange={(e) => setEnteredWage(e.target.value)}
            value={enteredWage}
          />
          <Button className="mt-3" type="submit">
            Ekle
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default AddWorker;

import { useRef, useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";

const AddWorker = (props) => {
  const [enteredWage, setEnteredWage] = useState("");
  const [error, setError] = useState();

  const useRefWorkerName = useRef();


  const minwage = 5000;

  const addWorkerHandler = (e) => {
    e.preventDefault();

    if (useRefWorkerName.current.value.trim().length === 0) {
      setError({
        title: "İsim Alanı Zorunludur",
        message: "Lütfen Bir İsim Giriniz",
      });
      return;
    }

    if (+enteredWage < minwage) {
      setError({
        title: "Maaş Alanı Zorunludur",
        message: `Lütfen ${minwage} Üstünde Bir Değer Giriniz.`,
      });
      return;
    }

    props.setWorkers((prevState) => [
      {
        id: Math.floor(Math.random() * 1000),
        name: useRefWorkerName.current.value,
        wage: enteredWage,
      },
      ...prevState,
    ]);
    useRefWorkerName.current.value = "";
    setEnteredWage("");
  };
  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && <ErrorModal onConfirm={errorHandler} error={error} />}
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
            ref={useRefWorkerName}
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

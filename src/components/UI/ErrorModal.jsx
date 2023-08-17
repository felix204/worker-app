import Button from "./Button";
import Card from "./Card";

const ErrorModal = () => {
  return (
    <div className="fixed top-1/4 left-0 flex justify-center mx-auto w-full z-50">
      <div
        className="backdrop-blur-sm bg-white/30 fixed w-screen h-screen top-0"
        onClick=""
      ></div>
      <Card className="w-[36rem] p-0 z-20">
        <header className="bg-red-700 p-4  rounded-t-xl">
          <h2 className="text-center text-xl text-white">
            İsim Alanı Zorunludur!
          </h2>
        </header>
        <section className="p-4">Lütfen bir isim giriniz.</section>
        <footer className="p-4 flex justify-end">
          <Button className="w-32">Tamam</Button>
        </footer>
      </Card>
    </div>
  );
};

export default ErrorModal;

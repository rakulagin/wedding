import './App.css';
import PhoneForm from "./components/PhoneForm/PhoneForm";
import flowers from './img/flowers.png'

function App() {
  return (
    <div className="App">
      <img className='img' src={flowers} alt="flowers"/>
      <div className='container'>
        <h1>Привет!</h1>
        <p>С тобой говорит Рома и Алена. Нам надо узнать кто же ты. Введи свой номер телефона.</p>
        <form action="#">
          <PhoneForm/>
          <div>
            <button>Отправить</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;

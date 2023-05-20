import './App.css';
import PhoneForm from "./components/PhoneForm/PhoneForm";
import flowers from './img/flowers.png'

function App() {
  return (
    <div className="App">
      <div className='header'></div>
      <div className="content">
        <div>
          <img className='img' src={flowers} alt="flowers"/>
        </div>
        свадьба
        <form action="#">
          <PhoneForm/>
          <button>Отправить</button>
        </form>
      </div>
    </div>
  );
}

export default App;

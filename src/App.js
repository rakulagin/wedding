import './App.css';
import flowers from './img/flowers.png'
import InputForm from "./components/InputForm/InputForm";

function App() {

  return (
    <div className="App">
      <img className='img' src={flowers} alt="flowers"/>
      <div className='container'>
        <h1 className='app-header'>Привет!</h1>
        <p className='app-text'>С&nbsp;тобой говорит Рома и&nbsp;Алена. Нам надо узнать, с&nbsp;кем имеем дело. Для этого введи свое имя и&nbsp;фамилию полностью.</p>
        <InputForm/>
      </div>
    </div>
  );
}

export default App;

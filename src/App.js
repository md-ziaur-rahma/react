import logo from './logo.svg';
import './App.css';
import Hello from './my_component/Hello';
import Welcome from './my_component/Welcome';
import MyFun from './my_component/MyFun';
import ArrowFun from './my_component/ArrowFun';
import StateManagement from './my_component/StateMangement';

function App() {
  return (
    <div className="App">
      <h2>Md. Ziaur Rahman ({12+13})</h2>
      <Hello age="21" name="Ziaur Rahman"></Hello>
      <Welcome name="Class 1"></Welcome>
      <MyFun></MyFun>
      <ArrowFun></ArrowFun>
      <StateManagement></StateManagement>
    </div>
  );
}

export default App;

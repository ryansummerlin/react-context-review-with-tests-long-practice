import React from 'react';
import coffeeBeans from "./mockData/coffeeBeans.json";
import SelectedCoffeeBean from './components/SelectedCoffeeBean';
import SetCoffeeBean from './components/SetCoffeeBean';

function App() {
  return (
    <div>
      <h1>Welcome to Coffee App</h1>
      <SelectedCoffeeBean></SelectedCoffeeBean>
      <SetCoffeeBean coffeeBeans={coffeeBeans} ></SetCoffeeBean>
    </div>
  );
}

export default App;

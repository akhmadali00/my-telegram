import { useState } from 'react'
import './App.css';
import Navbar from './components/Navbar';
import items from './allData';
import Button from './components/Button';
import Menu from './components/Menu';

function App() {
  const allCategories = ['All', ...new Set(items.map(item => item.category))]
  const [menuItem, setMenuItem] = useState(items);
  const [buttons, setButtons] = useState(allCategories);
  const filter = (button) => {
    if(button === 'All'){
      setMenuItem(items);
      return;
    }
    const filteredData = items.filter(item => item.category === button)
    setMenuItem(filteredData)
  }
  return (
    <div className="App">
      <header>
          <Navbar />
          <div className="buttons">
            <Button button={buttons} filter={filter} />
        </div>
      </header>
      <section>
        
        <Menu menuItem={menuItem} />
      </section>
      <footer>

      </footer>
    </div>
  );
}

export default App;

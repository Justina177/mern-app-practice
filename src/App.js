import Content1 from './Content1';
import Footer from './Footer';
import Header from './Header';
import { useState } from 'react'
import AddItem from './AddItem';

function App() {
  const [items, setItems] = useState([
    {
        id: 1,
        checked: false,
        item: "One Bag of Rice"
    },
    {
        id: 2,
        checked: true,
        item: "Five Kilo of Meat"
    },
    {
        id: 3,
        checked: false,
        item: "Item 3"
    },
    {
        id: 4,
        checked: false,
        item: "Milk"
    }
]);

const handleCheck = (id) => {
  const listItems = items.map((item) => item.id === id ? { ...item,
  checked: !item.checked } : item);
  setItems(listItems);
  localStorage.setItem('shoppingList', JSON.stringify(listItems));
}

const handleDelete = (id) => {
  const listItems = items.filter((item) => item.id !== id);
  setItems(listItems);
localStorage.setItem('shoppingList', JSON.stringify(listItems));
}

  return (
    <div className="App">
      <Header title="Grocery List" />
      <AddItem />
      <Content1 
      items={items}
      handleCheck={handleCheck}
      handleDelete={handleDelete}
      />
      <Footer length={items.length} />
    </div>
  );
}

export default App;

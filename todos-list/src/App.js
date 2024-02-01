import './App.css';
import Header from './MyComponents/Header';
import Todos from './MyComponents/Todos';
import Footer from './MyComponents/Footer';

function App() {
  let todoList = [
    {
      sno: 1,
      title: "Go to the market",
      desc: "You need to go to the market to purchase fruits",
    },
    {
      sno: 2,
      title: "Go to the mall",
      desc: "You need to go to the market to purchase fruits2",
    },
    {
      sno: 3,
      title: "Go to the Dubai",
      desc: "You need to go to the market to purchase fruits3",
    }
  ]
  return (
    <>
      <Header title="My Todos List" searchBar={false} />
      <Todos todos={todoList} />
      <Footer />
    </>
  );
}

export default App;

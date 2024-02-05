import "./App.css";
import { Header } from "./components/header/header";
import { UserList } from "./components/userList/userList";

function App() {
  const wrapperStyle = {};
  return (
    <div className="App">
      <Header></Header>
      <UserList />
    </div>
  );
}

export default App;

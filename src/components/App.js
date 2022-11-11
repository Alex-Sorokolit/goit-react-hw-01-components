import "./App.css";
import userData from "./user.json";
import UserList from "./UserList/UserList";
function App() {
  return (
    <div className="App">
      <UserList items={userData} />
    </div>
  );
}

export default App;

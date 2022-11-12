import "./App.css";
import Section from "./Section/Section";

import userData from "./user.json";
import UserList from "./UserList/UserList";

import statistics from "./statistic.json";
import StatisticsList from "./StatisticsList/StatisticsList";
function App() {
  return (
    <div className="App">
      <Section title="User List">
        <UserList items={userData} />
      </Section>
      <Section title="Statistics">
        <StatisticsList items={statistics} />
      </Section>
    </div>
  );
}

export default App;

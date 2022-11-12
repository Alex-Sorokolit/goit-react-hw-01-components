import "./App.css";
import Section from "./Section/Section";

import userData from "./user.json";
import UserList from "./UserList/UserList";

import statistics from "./statistic.json";
import StatisticsList from "./StatisticsList/StatisticsList";

import friends from "./friends.json";
import FriendsList from "./FriendsList/FriendsList";

function App() {
  return (
    <div className="App">
      <Section title="User List">
        <UserList items={userData} />
      </Section>
      <Section title="Statistics">
        <StatisticsList items={statistics} />
      </Section>
      <Section title="Friends">
        <FriendsList friends={friends} />
      </Section>
    </div>
  );
}

export default App;

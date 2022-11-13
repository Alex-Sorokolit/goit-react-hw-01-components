import Section from "../Section/Section";

import userData from "../user.json";
import UserList from "../UserList/UserList";

import statistics from "../statistic.json";
import StatisticsList from "../StatisticsList/StatisticsList";

import friends from "../friends.json";
import FriendsList from "../FriendsList/FriendsList";

import transaction from "../transactions.json";
import Transaction from "../Transaction/Transaction";
import { Conteiner } from "./App.styled";
function App() {
  return (
    <Conteiner>
      <Section title="User List">
        <UserList items={userData} />
      </Section>
      <Section title="Statistics">
        <StatisticsList items={statistics} />
      </Section>
      <Section title="Friends">
        <FriendsList friends={friends} />
      </Section>
      <Section title="Transaction History">
        <Transaction items={transaction} />
      </Section>
    </Conteiner>
  );
}

export default App;

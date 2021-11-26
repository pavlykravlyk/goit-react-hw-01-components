import './App.css';
import Container from 'components/Container/Container';
import Section from 'components/Section/Section';
import Profile from 'components/Profile/Profile';
import user from './user.json';
import Statistics from 'components/Statistics/Statistics';
import data from './data.json';
import FriendList from 'components/FriendList/FriendList';
import friends from './friends.json';
import TransactionHistory from 'components/TransactionHistory/TransactionHistory';
import transactions from './transactions.json';

const App = () => {
  return (
    <Container>
      <Section>
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          followers={user.stats.followers}
          views={user.stats.views}
          likes={user.stats.likes}
        />
      </Section>
      <Section>
        <Statistics title="Upload stats" stats={data} />
        <Statistics stats={data} />
      </Section>
      <Section>
        <FriendList friends={friends} />
      </Section>
      <Section>
        <TransactionHistory items={transactions} />
      </Section>
    </Container>
  );
};

export default App;

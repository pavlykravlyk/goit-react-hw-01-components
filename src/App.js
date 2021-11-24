import './App.css';
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
    <>
      <div>
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          followers={user.stats.followers}
          views={user.stats.views}
          likes={user.stats.likes}
        />
      </div>
      <div>
        <Statistics title="Upload stats" stats={data} />
        <Statistics stats={data} />
      </div>
      <div>
        <FriendList friends={friends} />
      </div>
      <div>
        <TransactionHistory items={transactions} />;
      </div>
    </>
  );
};

export default App;

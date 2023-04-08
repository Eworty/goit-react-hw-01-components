import { FriendList } from './FriendList/FriendList';
import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';

import upcomingFriends from 'friends.json';
import user from 'user.json';
import data from 'data.json';
import transactions from 'transactions.json';

export const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      ></Profile>
      <Statistics stats={data}></Statistics>
      <FriendList friends={upcomingFriends} />
      <TransactionHistory transactions={transactions} />
    </>
  );
};

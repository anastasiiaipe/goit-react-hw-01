import FriendListItem from "../FriendListItem/FriendListItem";
import style from './FriendList.module.css'

const FriendList = ({ friends }) => {
  return (
    <ul className={style.friensList}>
      {friends.map(({ id, avatar, name, isOnline }) => (
        <li key={id} className={style.friendsItem}>
          <FriendListItem avatar={avatar} name={name} isOnline={isOnline} />
        </li>
      ))}
    </ul>
  );
};
export default FriendList;

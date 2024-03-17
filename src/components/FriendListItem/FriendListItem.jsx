import style from "./FriendListItem.module.css";
const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <>
      <img className={style.avatar} src={avatar} alt={name} width="48" />
      <p className={style.name}>{name}</p>
      <p className={isOnline ? style.isOnline : style.isOffline}>
        {isOnline ? "Online" : "Offline"}
      </p>
    </>
  );
};
export default FriendListItem;

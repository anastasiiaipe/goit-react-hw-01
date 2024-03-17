import styles from "./Profile.module.css";
const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={styles.card}>
      <div className={styles.profileBox}>
        <img className={styles.profileImg} src={image} alt={name} />
        <p className={styles.profileName}>{name}</p>
        <p className={styles.profileTag}>@{tag}</p>
        <p className={styles.profileLoc}>{location}</p>
      </div>
      <ul className={styles.profileList}>
        <li className={styles.profileItem}>
          <span className={styles.itemText}>Followers</span>
          <span className={styles.itemDesc}>{stats.followers}</span>
        </li>
        <li className={styles.profileItem}>
          <span className={styles.itemText}>Views</span>
          <span className={styles.itemDesc}>{stats.views}</span>
        </li>
        <li className={styles.profileItem}>
          <span className={styles.itemText}>Likes</span>
          <span className={styles.itemDesc}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};
export default Profile;

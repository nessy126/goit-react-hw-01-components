import PropTypes from "prop-types"
import css from "./FriendListItem.module.scss"

const FriendListItem = ({ friends }) => {
  return (
    <>
      {friends.map((friend) => (
        <li className={css.item} key={friend.id}>
          <span className={friend.isOnline ? css.online : css.offline}></span>
          <img
            className={css.avatar}
            src={friend.avatar}
            alt="User avatar"
            width="48"
          />
          <p className={css.name}>{friend.name}</p>
        </li>
      ))}
    </>
  )
}

FriendListItem.prototype = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
}

export default FriendListItem

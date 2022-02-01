import FriendListItem from "../FriendListItem/FriendListItem"
import css from "./FriendList.module.scss"
import PropTypes from "prop-types"

const FriendList = ({friends}) => {
  return (
    <ul className={css.friendList}>
      <FriendListItem friends={friends} />
    </ul>
  )
}

FriendList.prototype = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
}


export default FriendList

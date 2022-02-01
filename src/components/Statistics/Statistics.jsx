import css from "./Statistics.module.scss"
import PropTypes from "prop-types"


const Statistics = ({ title, stats }) => {
  return (
    <section className={css.statistics}>
      {title && (
        <h2 className={css.title}>{title.toUpperCase()}</h2>
      )}
      <ul className={css.statList}>
        {stats.map(item => (
            <li className={css.item} key={item.id} style={{backgroundColor: getRandomHexColor()}}>
              <span className={css.label}>{item.label}</span>
              <span className={css.percentage}>{item.percentage}%</span>
            </li>
          )
        )}
      </ul>
    </section>
  )
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      percentage: PropTypes.number.isRequired,
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
}
export default Statistics

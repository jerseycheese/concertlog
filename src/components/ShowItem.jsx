const ShowItem = ({ artist, venue, date }) => {
  return (
    <li className="show-item">
      <strong>{artist}</strong>
      <div className="show-details">{venue} - {date}</div>
    </li>
  )
}

export default ShowItem

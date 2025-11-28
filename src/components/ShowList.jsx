import ShowItem from './ShowItem.jsx'

const ShowList = () => {
  return (
    <section>
      <h2>Upcoming shows</h2>
      <ul className="show-list">
        <ShowItem artist="The Flaming Lips" venue="9:30 Club" date="Jan 18, 2026" />
        <ShowItem artist="Khruangbin" venue="Red Rocks" date="Apr 4, 2026" />
        <ShowItem artist="moe." venue="The Anthem" date="Jun 12, 2026" />
      </ul>
    </section>
  )
}

export default ShowList

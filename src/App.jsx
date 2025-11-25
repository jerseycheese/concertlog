import './App.css'
import Header from './components/Header.jsx'
import ShowList from './components/ShowList.jsx'

function App() {
  return (
    <div className="app">
      <Header title="ConcertLog" subtitle="Shows you want to remember" />
      <ShowList />
    </div>
  )
}

export default App

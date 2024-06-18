import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './Navbar'
import './App.css'
import Table from './Table'

function App() {

  return (
    <>
      <Navbar/>
      <section>
        <div>
          <h1>CCTV 알람 기록</h1>
          <div>
            <Table/>
          </div>
        </div>
      </section>
    </>
  )
}

export default App

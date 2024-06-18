import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './Navbar'
import classes from './App.module.css'
import Table from './Table'
function App() {
  return (
    <>
      <Navbar/>
      <section className={classes.section}>
        <div>
          <h1>CCTV 정보</h1>
          <div>
            <Table/>
          </div>
        </div>
        <h1></h1>
      </section>
    </>
  )
}

export default App

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import icu from '../public/공개SW 로고.png'
import Navbar from './Navbar'
import classes from'./App.module.css'
import { useNavigate } from 'react-router-dom'

function App() {
  let navigate = useNavigate();

  function cctv_page(){
    navigate('/cctv');
  }
  function setting_page(){
    navigate('/setting');
  }
  return (
    <>
      <Navbar/>
      <section className={classes.section}>
        <div className={classes.welcome}>
          <img className={classes.icu} src={icu} alt="no data" />
          <h1>ICU 프로그램에 오신 것을 환영합니다</h1>
          <p className={classes.main}>이 icu 프로그램은 cctv 화면과 연동하여 노숙 취객 탐지를 제공하는 서비스입니다. 
            사람을 자동으로 인식하고 내장된 알고리즘이 움직임이 없다 판단하면 신고 알림을 사용자에게 알려줍니다. </p>
          <button style={{backgroundColor:"#5555ee"}} onClick={cctv_page}>cctv</button>
          <button style={{backgroundColor:"#5555ee"}} onClick={setting_page}>정보 입력</button>
        </div>
      </section>
    </>
  )
}

export default App

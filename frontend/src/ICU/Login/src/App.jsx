import React, { useState, useEffect, useRef } from 'react';
import Cookies from 'js-cookie';
import classes from './App3.module.css';
import { useNavigate,  } from 'react-router-dom';

function App() {
  let navigate = useNavigate();
  let id = useRef();
  let password= useRef();
  function cctv_page(){
    navigate('/cctv');
  }
  const [IPandPORT, setIPandPORT] = useState([]);

  // 컴포넌트가 마운트될 때 한 번 쿠키에서 데이터를 불러옵니다.
  useEffect(() => {
    const data = JSON.parse(Cookies.get('IPandPORT') || '[]');
    setIPandPORT(data);
  }, []);

  const submit = (e) => {
    e.preventDefault();
    const newIp = document.getElementById('id').value.trim();
    const newPort = document.getElementById('password').value.trim();

    // IP와 PORT 입력 검증
    if (!newIp || isNaN(parseInt(newPort))) {
      alert("유효한 IP 주소와 포트 번호를 입력해주세요.");
      return;
    }

    let currentData = [...IPandPORT];
    if (currentData.length >= 4) {
      alert('저장 가능한 IP와 PORT 정보는 최대 4개입니다.');
      return;
    }

    currentData.push({ ip: newIp, port: newPort });
    Cookies.set('IPandPORT', JSON.stringify(currentData));
    setIPandPORT(currentData); // 상태 업데이트
    alert('저장되었습니다');

    id.current.value="";
    password.current.value="";
  };

  const show = () => {
    const data = JSON.parse(Cookies.get('IPandPORT') || '[]');
    if (data.length === 0) {
      alert("저장된 IP와 PORT 정보가 없습니다.");
      return;
    }
    let displayText = '저장된 모든 IP와 PORT:\n';
    data.forEach((element, index) => {
      displayText += `${index + 1}. IP: ${element.ip}, PORT: ${element.port}\n`;
    });
    alert(displayText);
  };

  return (
    <section className={classes.display}>
      <div className={classes.logIn}>
        <div className={classes.content}>
          <h1 className={classes.title}>Information</h1>
          <p className={classes.main}>CCTV의 정보를 입력하세요</p>
          <form onSubmit={submit}>
            <div className={classes.id}>
              <input type="text" id='id' ref={id} placeholder='IP' required />
            </div>
            <div className={classes.password}>
              <input type="text" id='password' ref={password} placeholder='PORT' required />
            </div>
            <button type='submit'>저장</button>
            <button type='button' onClick={cctv_page}>CCTV</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default App;

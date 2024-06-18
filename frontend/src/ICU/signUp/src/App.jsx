import classes from './App1.module.css'
import Input from './Input'
import Header from './Header'
import { useState } from 'react'
import { useRef } from 'react'

function App() {

  let password=useRef()
  let confirm=useRef()

  const [condition,setCondition]=useState({
    id:false,
    password:false,
    confirm:false,
    name:false,
    email:false,
  })


  function handleSignUp(event){
      const fd = new FormData(event.target)
      const data=Object.fromEntries(fd.entries())
      const idCondition = /^[0-9a-zA-Z]{6,}$/;
      const passwordCondition= /^[a-zA-Z\d`~!@#$%^&*()-_=+]{8,}$/;
      const emailCondition=/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/
      let update={...condition}
      if(!idCondition.test(data.id))
      {
        event.preventDefault()
        update.id=true
      }
      if(!passwordCondition.test(data.password))
      {
        event.preventDefault()
        update.password=true
      }
      if(data.password !== data.confirm)
      {
        event.preventDefault()
        update.confirm(true)
      }
      if(data.name.length<=0)
      {
        event.preventDefault()
        update.name=true
      }
      if(!emailCondition.test(data.email))
      {
        event.preventDefault()
        update.email=true
      }
      setCondition({...update})
  }
  function focus(event)
  {
    let update={...condition}
    update[event.target.name]=false
    setCondition({...update})
  }
  function blur(event)
  {
    if(confirm.current.value !== password.current.value)
    {
      setCondition({...condition,confirm:true})
    }
  }
  return (
    <section className={classes.section}>
      <div>
        <Header></Header>
        <form onSubmit={handleSignUp}>
          <Input id={"id"} name={"id"} text={"아이디"} type={"text"} onFocus={focus}/>
          {condition.id && <p>아이디는 영문,숫자로만 구성되고 6글자 이상이여야 합니다.</p>}
          <div className='passwordControl'>
            <div>
              <Input id={"password"} name={"password"} text={"비밀번호"} type={"password"} onFocus={focus} ref={password}/>
              {condition.password && <p>비밀번호는 8글자 이상이여야 합니다.</p>}
            </div>
            <div>
              <Input id={"confirm"} name={"confirm"} type={"password"} text={"비밀번호 확인"}  onBlur={blur} onFocus={focus} ref={confirm}/>
              {condition.confirm && <p>비밀번호와 일치하지 않습니다</p>}
            </div>
          </div>
          <hr />
          <Input id={"name"} name={"name"} text={"이름"} type={"type"} onFocus={focus}/>
          {condition.name && <p>이름을 입력하세요</p>}
          <Input id={"email"} name={"email"} text={"이메일"} type={"email"} onFocus={focus} />
          {condition.email && <p>이메일을 바르게 입력하세요</p>}
          <div className='button-group'>
            <button type='reset'>초기화</button><button>완료</button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default App

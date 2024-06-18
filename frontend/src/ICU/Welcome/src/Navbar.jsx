import icu from '../public/공개SW 로고.png'
import classes from './Navbar.module.css'
import { useNavigate } from 'react-router-dom'

export default function Navbar()
{
    const navigate=useNavigate();
    function link(link)
    {
        navigate(link)
    }

    function handleSelectChange(event) {
        const value = event.target.value;
        switch(value) {
            case '1':
                link('/cctv');
                break;
            case '2':
                link('/record');
                break;
            case '3':
                link('/edit');
                break;
            default:
                // 기본 경로나 오류 처리
                break;
        }
    }
    return(
        <ul className={classes.navBar}>
            <li className={classes.photo}>
                <a href="welcome">
                <img src={icu} alt="no data" />
                </a>
            </li>
            <li className={classes.icu}>
                <div>ICU</div>
            </li>
            <li className={classes.link}>
                <a href="cctv">cctv 화면</a>
                <a href="record">기록</a>
                <a href="edit">cctv 정보</a>
            </li>
            <li className={classes.select}>
                <select name="link" id="link-select" onChange={handleSelectChange}>
                    <option value={"0"}>메인</option>
                    <option value={"1"}>cctv 화면</option>
                    <option value={"2"}>기록</option>
                    <option value={"3"}>cctv 정보</option>
                </select>
            </li>
        </ul>
    )
}
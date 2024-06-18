import icu from '../public/공개SW 로고.png'

export default function Navbar()
{
    return(
        <ul className='navBar'>
            <li className='photo'>
                <a href="welcome">
                <img src={icu} alt="no data" />
                </a>
            </li>
            <li className='icu1'>
                <div>ICU</div>
            </li>
            <li>
                <a href="cctv">cctv 화면</a>
            </li>
            <li>
                <a href="record">기록</a>
            </li>
            <li>
                <a href="welcome">메인</a>
            </li>
        </ul>
    )
}
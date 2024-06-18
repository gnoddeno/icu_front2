import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import classes from './Table.module.css'

export default function Table() {
    const [content, setContent] = useState([]);

    // 컴포넌트 마운트 시 쿠키에서 데이터 로드
    useEffect(() => {
        let data = JSON.parse(Cookies.get("IPandPORT") || "[]");
        // 새 데이터에 id 부여
        if (data.length > 0 && !data[0].id) {
            data = data.map((item, index) => ({ ...item, id: index + 1 }));
            Cookies.set('IPandPORT', JSON.stringify(data));  // 쿠키 업데이트
        }
        setContent(data);
    }, []);

    // 데이터 삭제 함수
    function deletion(id) {
        const filteredContent = content.filter(item => item.id !== id);
        setContent(filteredContent);
        Cookies.set('IPandPORT', JSON.stringify(filteredContent));
    }

    // 데이터 수정 함수
    function modify(id) {
        const item = content.find(item => item.id === id);
        const newIp = prompt("새로운 IP를 입력하세요:", item.ip);
        const newPort = prompt("새로운 PORT를 입력하세요:", item.port);

        if (newIp && newPort) {
            const updatedContent = content.map(item => item.id === id ? { ...item, ip: newIp, port: newPort } : item);
            setContent(updatedContent);
            Cookies.set('IPandPORT', JSON.stringify(updatedContent));
        }
    }

    return (
        <table className={classes.table}>
            <thead>
                <tr>
                    <th scope="col">번호</th>
                    <th scope="col">IP</th>
                    <th scope="col">PORT</th>
                    <th scope="col">수정</th>
                    <th scope="col">삭제</th>
                </tr>
            </thead>
            <tbody>
                {content.map((item, index) => (
                    <tr key={item.id}>
                        <td>{index + 1}</td>
                        <td>{item.ip}</td>
                        <td>{item.port}</td>
                        <td><button onClick={() => modify(item.id)}>수정</button></td>
                        <td><button onClick={() => deletion(item.id)}>삭제</button></td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

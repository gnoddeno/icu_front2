import { useState, useEffect } from "react";
import classes from './Table.module.css';
import Cookies from 'js-cookie';

export default function Table() {
    const [content, setContent] = useState([]);

    function deletion(id) {
        const temp = content.filter((element) => {
            return (
                element.id !== id,
                element.camera !== camera,
                element.day !== day,
                element.time !== time
            )
        })
        setContent(temp)
        getDelete(id)
    }

    async function getDelete(id) {
        try {
            const response = await fetch('http://localhost:8000/test/', {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(id),
            });
        }
        catch (error) {
            console.error('Error:', error);
            alert('Error: An error occurred while getting the data.');
        }
    }

    useEffect(() => {
        const alarmData = JSON.parse(Cookies.get('alarm') || '[]');
        setContent(alarmData);
    }, []);

    return (
        <>
            <table className={classes.table}>
                <thead>
                    <tr>
                        <th scope="col">카메라</th>
                        <th scope="col">날짜</th>
                        <th scope="col">시간</th>
                        <th scope="col">삭제</th>
                    </tr>
                </thead>
                <tbody>
                    {content.map((element) => {
                        return (
                            <tr key={element.id}>
                                <td>{element.camera}</td>
                                <td>{element.day}</td>
                                <td>{element.time}</td>
                                <td><button onClick={() => deletion(element.id)}>삭제</button></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </>
    )
}

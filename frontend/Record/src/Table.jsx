import { useState } from "react"

export default function Table()
{
    const [content,setContent]=useState([{id:1, camera: 1, day: "2024-05-05", time: "12:00:01"},
    {id:2, camera: 2, day: "2024-05-05", time: "13:00:01"}])
    function deletion(id)
    {
        const temp = content.filter((element)=>{
            return(
                element.id != id
            )
        })
        setContent(temp)
    }
    return(
        <>
            <table>
                <thead>
                    <tr>
                        <th scope="col">카메라</th>
                        <th scope="col">날짜</th>
                        <th scope="col">시간</th>
                        <th scope="col">삭제</th>
                    </tr>
                 </thead>
                 <tbody>
                    {content.map((element)=>
                    {
                        return(
                            <tr key={element.id}>
                                <td>{element.camera}</td>
                                <td>{element.day}</td>
                                <td>{element.time}</td>
                                <td><button onClick={()=>deletion(element.id)}>삭제</button></td>
                            </tr>
                        )
                    })}
                </tbody>  
            </table>
        </>
    )
}
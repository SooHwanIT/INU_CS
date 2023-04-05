import React, { useState, useEffect } from 'react';

import axios from 'axios'

function Admin(){
    const [isAuth,SetIsAuth] = useState(true)
    const [timeTable,SetTimeTable] = useState([false,false,false,false,false,,false,false,false,false])
    const [current,SetCurrent] = useState(false)
    
    const domain = "http://inucs-server-qmmpu.run.goorm.site/"

    const adminAcount = {id:"soohwan",pw:""}
    const timeSchedule = ["9:10~10:10","10:10~11:10","11:10~12:10","12:10~13:10","13:10~14:10","14:10~15:10","15:10~16:10","16:10~17:10","17:10~18:10"]
useEffect(()  =>{
  axios.get(`${domain}api/booktable`)
  .then((Response)=>{
    SetTimeTable(Response.data.timeTable)
    SetCurrent(Response.data.current)
  })
  .catch((Error)=>{console.log(Error)})
  
},[timeTable])
const roomreser = async (time) => {
    timeTable.splice(time,1,true)
    await axios.post(`http://inucs-server-qmmpu.run.goorm.site/api/roomreser/`,{time:time})
}
const roomcancel =  async (time) =>{

    timeTable.splice(time,1,false)
    await axios.post(`${domain}api/roomcancel`,{time})
}
    const Auth = () =>{
        SetIsAuth(true)
    }
    return(
        <div>
            {isAuth ? 
            //관리
            <div>
        <h2>예약표 현황</h2>
          <table className="table">
          {timeTable.map((data,i)=>{
              return(
              <tr>
                <th>{timeSchedule[i]}</th>
                {data?
                <div>
                    <td className='activate'> 예약 완료 </td>
                    <button onClick={()=>roomcancel(i)}>예약 취소</button>
                </div> 
                :
                <div>
                    <td className='disabled'> 예약 가능 </td>
                    <button onClick={()=>roomreser(i)}>예약 하기</button>
                </div>
                }
              </tr>)
            })}
          </table>
            </div>
            :
            //인증
            <div>
                <input type="text"></input>
                <input type="password"></input>
                <button onClick={Auth}></button>
            </div>
            }
        </div>
    )
}
export default Admin
import {useState, useEffect} from 'react'

import axios from 'axios'

const Main = ()=>{
  const [timeTable,SetTimeTable] = useState([false,false,false,false,false,,false,false,false,false])
  const [current,SetCurrent] = useState(false)
  const timeSchedule = ["9:10~10:10","10:10~11:10","11:10~12:10","12:10~13:10","13:10~14:10","14:10~15:10","15:10~16:10","16:10~17:10","17:10~18:10"]

  const domain = "http://inucs-server-qmmpu.run.goorm.site/"

  useEffect(()=>{
  axios.get(`${domain}api/booktable`)
  .then((Response)=>{
    SetTimeTable(Response.data.timeTable)
    SetCurrent(Response.data.current)
  })
  .catch((Error)=>{console.log(Error)})
  
},[])

return(    <div className="App">
      <div className="content">
        {/* logo */}
        <div className="logo">
          <h1>INUSOING</h1>
        </div>
        {/* 예약표 */}
        <div className="schedule">
          <h2>예약표 현황</h2>
          <table className="table">
            {timeTable.map((data,i)=>{
              return(
              <tr>
                <th>{timeSchedule[i]}</th>
                {data? 
                <td className='activate'> 예약 완료 </td>:
                <td className='disabled'> 예약 가능 </td>}
              </tr>)
            })}
          </table>
        </div>
        {/* 선착순 */}
        <div className="queue">
          <h2>대기 인원</h2>
          <div className="que disabled">대기 없음</div>
        </div>
        {/* 이용 방법 */}
        <div className="howto">
          <h2>이용 방법</h2>
          <ol>
            <li>qqq</li>
            <li>eee</li>
            <li>555</li>
          </ol>
        </div>
        {/* 찾아오는 길 */}
        <div className="way">
          <h2>찾아오시는 길</h2>
          {/* <img></img>
          <img></img>
          <img></img> */}
        </div>
      </div>
    </div>
)
}

export default Main;
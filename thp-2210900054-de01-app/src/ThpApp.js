import React, { useEffect, useState } from 'react';
import ThpListTableName from './thp_components/ThpListTableName';
import axios from './thp_apis/thp-2210900054';
import ThpFormTableName from './thp_components/ThpFormTableName';

export default function ThpApp() {
    // Đọc dữ liệu từ API
    const [thpListTableName, setThpListTableName] = useState([]);

    const thpGetTableName = async () => {
        try {
            const thpResp = await axios.get("thpTableName");
            console.log("App List:", thpResp.data);
            setThpListTableName(thpResp.data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }

    useEffect(() => {
        thpGetTableName();
    }, []);

    //ham xoa
    const thpHandleDelete = async (thpId)=>{
      let thpResp = await axios.delete("thpTableName/"+thpId)
      thpGetTableName();
    }
    
    const thpOjbTableName = {
      
        "thpTbName": "Trinh Huu Phuc",
        "thpTbEmail": "toiduaroima@gmail.com",
        "thpTbPhone": "1234567890",
        "thpTbStatus": true,
        "thpId": "2210900054"
      
    };
    const [thpTableName,setThpTableName]=useState(thpOjbTableName);

    const thpHandleAdd = ()=>{
      thpGetTableName();

    }

    const thpHandleEdit = (thpOjbEditTableName)=>{
      setThpTableName(thpOjbEditTableName);
    }

    return (
        <div className='container border my-3'>
            <h1>Bài đánh giá học phần - Trịnh Hữu Phúc: 2210900054</h1>
            <hr/>
            <ThpListTableName renderThpListTableName={thpListTableName} 
              onThpDelete={thpHandleDelete} 
              onThpEdit={thpHandleEdit} 
              />
            <hr/>
            <ThpFormTableName rendeThpTableName={thpTableName} onThpAdd={thpHandleAdd}/>
        </div>
    );
}

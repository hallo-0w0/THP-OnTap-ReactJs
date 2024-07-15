import axios from '../thp_apis/thp-2210900054'
import React, { useEffect, useState } from 'react'

export default function ThpFormTableName({ rendeThpTableName,onThpAdd }) {
    const [thpId, setThpId] = useState(rendeThpTableName.thpId)
    const [thpTbName, setThpTbName] = useState(rendeThpTableName.thpTbName)
    const [thpTbEmail, setThpTbEmail] = useState(rendeThpTableName.thpTbEmail)
    const [thpTbPhone, setThpTbPhone] = useState(rendeThpTableName.thpTbPhone)
    const [thpTbStatus, setThpTbStatus] = useState(rendeThpTableName.thpTbStatus)

    useEffect (()=>{
        setThpId(rendeThpTableName.thpId)
        setThpTbName(rendeThpTableName.thpTbName)
        setThpTbEmail(rendeThpTableName.thpTbEmail)
        setThpTbPhone(rendeThpTableName.thpTbPhone)
        setThpTbStatus(rendeThpTableName.thpTbStatus)

    },[rendeThpTableName])

    const thpHandleSubmit = async (thpEvent) => {
        thpEvent.preventDefault();
        const thpOjbTableName = {
            "thpTbName": thpTbName,
            "thpTbEmail": thpTbEmail,
            "thpTbPhone": thpTbPhone,
            "thpTbStatus": thpTbStatus,
            "thpId": thpId
        }
        console.log(thpOjbTableName);

        //them data vao api
        await axios.put("thpTableName/"+thpOjbTableName.thpId,thpOjbTableName);
        onThpAdd();
    }

    return (
        <div>
            <h2>Form xu ly dữ liệu sửa thông tin</h2>
            <form>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="thpId">thpId</span>
                    <input type="text" className="form-control" placeholder="thpId"
                        name='thpId'
                        value={thpId}
                        onChange={(thpEv) => setThpId(thpEv.target.value)}
                        aria-label="thpId"
                        aria-describedby="thpId" />
                </div>

                <div className="input-group mb-3">
                    <span className="input-group-text" id="thpTbName">thpTbName</span>
                    <input type="text" className="form-control" placeholder="thpTbName"
                        name='thpTbName'
                        value={thpTbName}
                        onChange={(thpEv) => setThpTbName(thpEv.target.value)}
                        aria-label="thpTbName"
                        aria-describedby="thpTbName" />
                </div>

                <div className="input-group mb-3">
                    <span className="input-group-text" id="thpTbEmail">thpTbEmail</span>
                    <input type="text" className="form-control" placeholder="toiduaroima@gmail.com"
                        name='thpTbEmail'
                        value={thpTbEmail}
                        onChange={(thpEv) => setThpTbEmail(thpEv.target.value)}
                        aria-label="thpTbEmail"
                        aria-describedby="thpTbEmail" />
                </div>

                <div className="input-group mb-3">
                    <span className="input-group-text" id="thpTbPhone">thpTbPhone</span>
                    <input type="text" className="form-control" placeholder="1234567890@gmail.com"
                        name='thpTbPhone'
                        value={thpTbPhone}
                        onChange={(thpEv) => setThpTbPhone(thpEv.target.value)}
                        aria-label="thpTbPhone"
                        aria-describedby="thpTbPhone" />
                </div>

                <div className="input-group mb-3">
                    <span className="input-group-text" id="thpTbStatus">thpTbStatus</span>
                    <select id='thpTbStatus' classNameName='form-control'
                        name='thpTbStatus'
                        value={thpTbStatus}
                        onChange={(thpEv) => setThpTbStatus(thpEv.target.value)}
                    >

                        <option value={true} >Active</option>
                        <option value={false} >Non-Active</option>

                    </select>
                </div>
                <button className='btn btn-primary my-3' name='btnThpSave' onClick={thpHandleSubmit}>THP: Save</button>
            </form>
        </div>
    )
}

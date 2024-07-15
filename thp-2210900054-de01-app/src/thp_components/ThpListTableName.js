import React from 'react';

export default function ThpListTableName({ renderThpListTableName, onThpDelete ,onThpEdit}) {
    console.log("List:", renderThpListTableName);

    // Hiển thị dữ liệu
    const thpElementTableName = renderThpListTableName.map((thpItem, thpIndex) => {
        return (
            <tr key={thpIndex}>
                <td>{thpItem.thpId}</td>
                <td>{thpItem.thpTbName}</td>
                <td>{thpItem.thpTbEmail}</td>
                <td>{thpItem.thpTbPhone}</td>
                <td>{(thpItem.thpTbStatus === true || thpItem.thpTbStatus === "true") ? "Active" : "Non-Active"}</td>
                <td>
                    <button className='btn btn-success m-2'
                        onClick={() => thpHandleEdit (thpItem)}
                        >thp-edit</button>
                    <button className='btn btn-danger'
                        onClick={() => thpHandleDelete(thpItem.thpId)}
                     >thp-delete</button>
                </td>
            </tr>
        );
    });
    //Su kien xoa
    const thpHandleDelete = (thpId) => {
        if (window.confirm('Bạn có muốn xóa dữ liệu thpId' + thpId)) {
            onThpDelete(thpId);

        }
    }
    //su kien sua
    const thpHandleEdit=(thpOjbTableName)=>{
        onThpEdit(thpOjbTableName);
    }

    return (
        <div>
            <h2>Danh sách thông tin...</h2>
            <hr />
            <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th>thpId</th>
                        <th>thpTbName</th>
                        <th>thpTbEmail</th>
                        <th>thpTbPhone</th>
                        <th>thpTbStatus</th>
                        <th>Thp: chức năng</th>
                    </tr>
                </thead>
                <tbody>
                    {thpElementTableName}
                </tbody>
            </table>
        </div>
    );
}

import Axios from 'axios';
import React from 'react';

function CustomerDelete(props) {

    const deleteCustomer=(key)=> {
        const variable={
            id:key
        }
        Axios.post('/api/remove',variable)
        .then((response)=>{
            console.log(variable)
                if (response.data.success) {
                    console.log(response.data.result)
                    props.stateRefresh()
                } else {
                    alert('커멘트를 저장하지 못했습니다.')
                }
        })
    }

        return (
            <button onClick={() => { deleteCustomer(props.id) }}>삭제</button>
        )
}

export default CustomerDelete;

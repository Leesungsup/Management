import React from 'react'

function Customer(props) {
    return (
        <div>
            <CustomerProfile id={props.id} img={props.img} name={props.name}/>
            <CustomerInfo birth={props.birth} />
        </div>
    )
}
function CustomerProfile(props){
    return(
        <div>
            <img src={props.img} alt="profile" />
            <h2>{props.name}({props.id})</h2>
        </div>
    )
}
function CustomerInfo(props){
    return(
        <div>
            <p>{props.birth}</p>
        </div>
    )
}
export default Customer

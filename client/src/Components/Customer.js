import React from 'react'
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell'
function Customer(props) {
    return (
        <div>
            <TableRow>
                <TableCell>{props.id}</TableCell>
                <TableCell><img src={props.img} alt='profile'/></TableCell>
                <TableCell>{props.name}</TableCell>
                <TableCell>{props.birth}</TableCell>
            </TableRow>
        </div>
    )
}

export default Customer

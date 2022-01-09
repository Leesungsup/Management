import logo from './logo.svg';
import React,{useState,useEffect} from 'react';
import './App.css';
import Customer from './Components/Customer';
import './App.css';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import {withStyles} from '@material-ui/core/styles';
import Axios from 'axios';
    const styles = theme => ({
      root: {
      width: "100%",
      marginTop: theme.spacing.unit * 3,
      overflowX: "auto"
      },
      table: {
      minWidth: 1080
      }
      });
function App() {
  const [Customers, setCustomers] = useState([])
  useEffect(() => {
    Axios.get('/api/customer')
    .then(response=>{
      if (response.data) {
        console.log(response.data)
        setCustomers(response.data)
    } else {
        alert('Failed to get Customer Info')
    }
    })
  }, [])
  return (
    <Paper className={styles.root}>
      <Table className={styles.table}>
        <TableHead>
          <TableRow>
            <TableCell>번호</TableCell>
            <TableCell>이미지</TableCell>
            <TableCell>이름</TableCell>
            <TableCell>생년월일</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {
        Customers.map(c=>{
          return(
            <Customer 
            key={c.id}
            id={c.id}
            name={c.name}
            image={c.image}
            birth={c.birthday}/>
          )
        })
      }
        </TableBody>
      </Table>
      </Paper>
  );
}

export default withStyles(styles)(App);

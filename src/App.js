import logo from './logo.svg';
import './App.css';
import Customer from './Components/Customer';
import './App.css'
function App() {
  const customers=[{
    'id':1,
    'name':'홍동',
    'image':'https://placeimg.com/64/64/1',
    'birth':'12.12'
  },
  {
    'id':2,
    'name':'기동',
    'image':'https://placeimg.com/64/64/2',
    'birth':'12.14'
  },
  {
    'id':3,
    'name':'이동',
    'image':'https://placeimg.com/64/64/3',
    'birth':'12.15'
  }]
  return (
    <div>
      {
        customers.map((c)=>{
          return(
            <Customer 
            key={c.id}
            id={c.id}
            name={c.name}
    image={c.image}
    birth={c.birth}/>
          )
        })
      }
    <Customer 
    id={customers[0].id}
    name={customers[0].name}
    image={customers[0].image}
    birth={customers[0].birth}/>
    <Customer 
    id={customers[1].id}
    name={customers[1].name}
    image={customers[1].image}
    birth={customers[1].birth}/>
    <Customer 
    id={customers[2].id}
    name={customers[2].name}
    image={customers[2].image}
    birth={customers[2].birth}/>
    </div>
  );
}

export default App;

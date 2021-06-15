import PropsTypes from "prop-types";

function ViewThis({ name, value, rating }) {
  return(
  <div>
      <h1>hi my name is {name} </h1>
      <h4>{rating/5.0}</h4>
      <h2>and my value is {value} </h2>
    </div>
    )
}

ViewThis.propsTypes = {
  name: PropsTypes.string.isRequired,
  id: PropsTypes.number.isRequired,
  rating:PropsTypes.number.isRequired
}


const arrays = [
  {
    id:1,
    name: 'a',
    value: 1,
    rating: 1.1
  },
  {
    id:2,
    name: 'b',
    value: 2,
    rating: 1.3
  },
  {
    id:3,
    name: 'c',
    value: 3,
    rating: 2.1
  },
  {
    id: 4,
    name: 'd',
    value: 4,
    rating: 4.1
  },
];
function Redender(as) {  
  return (
    <ViewThis
      key={as.arrays.id}
      name={as.arrays.name}
      value={as.arrays.value}
      rating={as.arrays.rating} />
  )
}

function Props() {
  return (
    <div className="App">
      {arrays.map(as => (
          <Redender arrays={as} key={as.id} />
          )
        )
      }
    </div>
  );
}

export default Props;
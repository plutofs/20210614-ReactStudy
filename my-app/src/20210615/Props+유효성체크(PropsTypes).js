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
/**
|--------------------------------------------------
| 값 유효성 체크하는곳 
| 실행이 안되는 에러가 발생하진 않으나, 
| 유효성에 문제가 있다면 경고를 콘솔에 출력한다. 
| 체크하고싶은 변수명 : PropsType.형식
| 숫자면 number, 문자면 string등.
| 값이 반드시 필요하면 isRequired를 뒤에붙이면된다. 
|--------------------------------------------------
*/
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

/**
|--------------------------------------------------
| 이런식으로 넘길때, List를 넘긴다면 key를 줘야한다.
| 실행이 안되는 에러가 발생하진 않으나,
| key가 없다면 경고를 콘솔에 출력한다. 
| key는 idx,즉 Primary key라고 생각하면된다. 
|--------------------------------------------------
*/

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
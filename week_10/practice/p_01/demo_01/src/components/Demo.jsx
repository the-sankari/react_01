import '../App.css';

const Box = (props)=>{

  return(
      <div>
          <p>Name: {props.name} </p>
          <p>Title: {props.title} </p>
          <p>Age: {props.age} </p>
      </div>
  )
}

const name = 'kajol';
const first_page = 2020;
const Demo = ()=>{
  return(
    <div>
      <h1>Hello, my name {name}</h1>
      <p>I made my first web page {new Date().getFullYear() - first_page} years agp</p>
      <Box name= 'Mondal' title = 'none' age= '30' />
      <Box name= 'Das' title = 'don' age= '31' />
    </div>
  )
};

export default Demo;
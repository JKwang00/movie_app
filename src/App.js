import React from 'react';

function Potato({name}) {
  return (
    <div>I love Potato{name}</div>
  )
}

const datas = [
  {
    name: "홍길동"
  },
  {
    name: "강감찬"
  }
];

function App() {
  return (
    <div>
      <h1>Hello!!!</h1>
      {datas.map( current => (
        <Potato name="apple" />
      ))}
    </div>
  );
}

export default App;

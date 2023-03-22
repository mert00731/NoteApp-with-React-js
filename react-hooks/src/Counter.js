// class component (Component), lifecycle

// import React, { Component } from "react";

// export class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       count: 0,
//     };
//   }

//   componentDidMount(){
//     console.log('did mount')
//   }

//   componentDidUpdate(){
//     console.log('componentupdate')
//   }

//   render() {
//     return (
//       <>
//         <p> Buttona {this.state.count} kez tikladiniz.</p>
//         <button onClick={() => this.setState({ count: this.state.count + 1 })}>
//           Button
//         </button>
//       </>
//     );
//   }
// }
// export default App

// function component + state (hooks) +

import { useState,useEffect } from "react";

function App(props) {
  const [count, setCount] = useState(props.count);
  const [text, setText] = useState(props.text);

  useEffect(() => {
    console.log('count updated')
  },[count])

  useEffect(() => {
    console.log('didmount')
  },[])

  useEffect( () => {
    console.log('update')
  })

  return (
    <div className="App">
      <p>Butona {count} kez tikaldiniz.</p>
      <p>girilen text : {text}</p>
      <button onClick={() => setCount(count + 1)}>Button</button>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  );
}

App.defaultProps = {
  count: 0,
  text: "mert",
};

export default App;

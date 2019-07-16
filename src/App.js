import React, { Component } from 'react';
import './App.css';



//first we make a new context
const MyContext = React.createContext();


//then we create a privider class
class MyProvider extends Component {
  state = {
    name: 'wes',
    age: 10,
    cool: true
  }

  render() {
    return (
      <MyContext.Provider value={{ 
        state: this.state

      }}>
        {this.props.children}
      </MyContext.Provider>
    )
  }
}

const Family = (props) => {
  return (
    <div className='family'>
      <Person />
    </div>
  )

}

class Person extends Component {
  render() {
    return (
      <div>
        <MyContext.Consumer>
          {(context) =>
            (
              <React.Fragment>
                <p>Age: {context.state.age}</p>
              </React.Fragment>

            )}
        </MyContext.Consumer>

      </div>

    );
  }
}


class App extends Component {
  render() {
    return (
      <MyProvider>
        <div >
          Hello, we are here
        <Family />
        </div>
      </MyProvider>

    );
  }

}

export default App;















// class Person extends Component{

//   render(){
//       return (
//           <div >
//               <MyContext.Consumer>
//                   {(context) => 
//                       (
//                         <React.Fragment>
//                           <p>Age: {context.state.age}</p>
//                         </React.Fragment>

//                       )}
//           </MyContext.Consumer>

//           </div>
//               );

//   }

// }






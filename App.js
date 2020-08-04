import React, {Fragment, Component} from 'react';
import MyPic from './MyPic';

// // Using Class Component
// class App extends Component {

//    constructor(props) {
//         super(props);
//         this.state = {
//             isHidden: false,
//             firstImg:{uri: 'https://upload.wikimedia.org/wikipedia/commons/e/ec/Cones500.jpg'},
//             secondImg:{uri: 'https://upload.wikimedia.org/wikipedia/commons/4/40/Amsterdam_(NL),_Spui_--_2015_--_7227.jpg'}        }
//     };
  
//   render() {
//     return(
//       <Fragment>
//         <MyPic url={this.state.firstImg} title={"first title"} />
//         <MyPic url={this.state.secondImg} title={"second title"} />
//       </Fragment>
//     );
//   }
// }

// export default App;


// Using functional Component
const App = ()=> {
  let firstImg = {uri: 'https://upload.wikimedia.org/wikipedia/commons/e/ec/Cones500.jpg'};
  let secondImg = {uri: 'https://upload.wikimedia.org/wikipedia/commons/4/40/Amsterdam_(NL),_Spui_--_2015_--_7227.jpg'};

  return(
    <Fragment>
      <MyPic url={firstImg} title={"first title"} />
      <MyPic url={secondImg} title={"second title"} />
    </Fragment>
  );
}
export default App;
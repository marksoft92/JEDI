import React from 'react';
import Status from '../Status/Status'






class Power extends React.Component {
state={
  
 power:[],
 
}


componentDidMount() {
const API=`https://challenge.codetain.com/api/v1/charging_status?`
setInterval(() => {
  fetch(API)
.then(res => res.json())
.then(json => this.setState({ power: json.charging_status}));

}, 10000);
fetch(API)
.then(res => res.json())
.then(json => this.setState({ power: json.charging_status}));

}
  
  render() {
    
    return (<section >
    
   <Status power={this.state.power}/>
    </section>
    );
  }
}

export default Power;

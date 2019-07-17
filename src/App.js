import React from 'react';
import Head from './Components/Head/head';
import IG from './Components/ImageGetter/IG';
import Particles from "react-particles-js";
import IMAGE from'./Components/Image/Image';
import './App.css';
import Clarifai from 'clarifai';
import Palette from './Components/Palette/Palette' 
const particlesProps={
  particles:{
    number:{
      value: 20,
      density: {
        enable:true,
        value_area:200
      }
    }
  }
}
const app = new Clarifai.App({
  apiKey: '91497a9a068544fb8a8375437eedb7e7'
 });
class App extends React.Component {
  constructor(){
    super();
    this.state={
      input:"",
      Url:"",
      Border:"Black",
      Colors:[]
    }
  }
  onInpCh=(event)=>{
    this.setState({input:event.target.value});
    // console.log(this.state.Url);
  }
  onSubmit=()=>{
    var {input,Colors}=this.state;
    let b='black';
    if(input!==''){
      b='white';
    }
    this.setState({
      Url:input,
      Border:b
    });
    app.models.predict(Clarifai.COLOR_MODEL,input)
    .then(resp=>resp.rawData.outputs[0])
    .then(resp=>resp.data.colors)
    .then((cols)=>{
      console.log(cols);
      this.setState({Colors:cols});
    });
    // console.log(this.state.Url);
  }
  render(){
    var {Colors}=this.state;
  return (
      <div>
        <Particles params={particlesProps} className="particles"/>
        <div>
          <div className='start'>
            <Head val="C" col="purple"/>
            <Head val="O" col="indigo"/>
            <Head val="L" col="green"/>
            <Head val="D" col="yellow"/>
            <Head val="E" col="orange"/>
            <Head val="T" col="red"/>
          </div>
          <hr className='horz'/>
        </div>
        <div className='screen' style={{color:"white"}}>
          <div className="lsec">
            <IG onInpCh={this.onInpCh} onSubmit={this.onSubmit}/>
            <IMAGE URL={this.state.Url} Border={this.state.Border}/>
          </div>
          <div className="rsec">
            {
              Colors.map((obj,i)=>{
                return <Palette value={obj.raw_hex} key={obj.i}/>
              })
            }
          </div>
        </div>
      </div>
    );
  }
}

export default App;

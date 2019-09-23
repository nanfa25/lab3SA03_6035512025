import React,{component} from 'react'
   
 export  default class compnent extends Componnet{
     constructor(){

        super()
        this.state={
             count:0  // ประกาศตัวแปร
        }
     }
 adddNum=()=>{
     this.setState({count: this.state.count+1}) //นำค่ามาบวก 1
 }

  render(){
      return(
          <div>
              <botton  onclick={this.adddNaum}>num: {this.state.count</botton> 
        
          </div>
      )
  }

}
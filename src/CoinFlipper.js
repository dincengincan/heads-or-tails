import React, { Component } from 'react'
import Coin from './Coin';
import './CoinFlipper.css';




class CoinFlipper extends Component {
  constructor(props){
    super(props);
    // State üzerinde paranın başlangıçtaki durumunu veriyoruz, başlangıçta "tura" olsun.
    // Daha sonra şu anda paranın dönüp dönmeme durumunu da veriyoruz, başlangıçta para atılmamış olduğundan "false" olarak verdik.
    this.state = {
        side: "heads",
        donuyor: false,
        result: []  
    }
     
  }
  
  handleClick = () => {
    let resultCoin = Math.random() < 0.5 ? "heads" : "tails"; 
      
    this.setState({
                  donuyor: true, 
                  side: resultCoin,
                  
      })

    // 1 saniye kadar dönmesi yeterli, bu yüzden 1 saniye sonra "donuyor" durmunu tekrar "false" yapıyoruz.
    //Animasyon bittikten sonra değerleri yazmak için state.side ı yukarda değil burada güncelledim böylelikle dönüyor:false olduğu anda günceliyor.
    
    setTimeout(() => this.setState({
      donuyor: false,
      result: [this.state.side].concat(this.state.result)
    }), 1000);
    
    
  };

  //Resetleme fonksiyonu
  reset = () => {
    this.setState({result:[]})
  };

  

  render(){
    
    return (
      <div className="CoinFlipper">
        <h1>Heads or Tails</h1>
        <Coin side={this.state.side} donuyor={this.state.donuyor} />
        
        {
          !this.state.donuyor
          ? <button onClick={this.handleClick}>Toss !</button>
          : <button disabled onClick={this.handleClick}>Toss !</button>

        }
        
        <div>
            <button onClick={this.reset} >Reset !</button>
        </div >
        
            <div style={{padding: "5px"}} >
                Total Count: <strong> {this.state.result.length} </strong> 
            </div>
            <div style={{padding: "5px"}}>
                Heads Count: <strong> {this.state.result.filter(item => item === "heads").length} </strong>
            </div>
            <div style={{padding: "5px"}}>
                Tails Count: <strong> {this.state.result.filter(item => item === "tails").length} </strong>
            </div>
            <div style={{padding: "5px"}}>
                <strong> {this.state.result[0]} </strong>
            </div>
            <div style={{padding: "5px"}}>
                <strong> {this.state.result[1]} </strong>
            </div>
            <div style={{padding: "5px"}}>
                <strong> {this.state.result[2]} </strong>
            </div>
            <div style={{padding: "5px"}}>
                <strong> { this.state.result[0] && this.state.result[0] === this.state.result[1] && this.state.result[1] === this.state.result[2] 
                 && <h3 style = {{color: "red"}} >BINGO!</h3> } </strong>
            </div>

            
        
      </div>
    )
  }
}

export default CoinFlipper;
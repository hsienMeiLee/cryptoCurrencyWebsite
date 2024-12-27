import React, { useContext, useEffect, useState } from 'react';
import './Home.css';
import { CoinContext } from '../../context/CoinContext';
import { Link } from 'react-router-dom';

const Home = () => {

  const {allCoin, currency} = useContext(CoinContext);
  const [displayCoin, setDisplayCoin] = useState([]);
  const [input, setInput] = useState("");

  const inputHandler = (event) => {
    setInput(event.target.value);
    
  }

  const searchHandler = async (event) => {
    event.preventDefault();
    if(input === ""){
      setDisplayCoin(allCoin);
      return;
    }
    const coins = await allCoin.filter((item)=>{
      return item.name.toLowerCase().includes(input.toLowerCase())
    })
    setDisplayCoin(coins);
    
  }


  useEffect(()=>{
    setDisplayCoin(allCoin);
  },[allCoin])

  return (
    <div className='home'>
      <div className="hero">
        <h1> 全台最大 <br /> 加密貨幣市場</h1>
        <p>歡迎來到全台最大的加密貨幣市場。 註冊以探索有關加密貨幣的更多資訊。</p>

        <form onSubmit={searchHandler}>
          <input 
          onChange={inputHandler} 
          value={input} 
          type="text" 
          placeholder='Search crypto..'
          list='coinlist' 
          />
          <datalist id='coinlist'>
            {allCoin.map((item, index)=>(
              <option value={item.name} key={index}/>
            ))}
          </datalist>
          <button type='submit'>Search</button>
        </form>
      </div>

      <div className="crypto-table">
        <div className="table-layout">
          <p>#</p>
          <p>Coins</p>
          <p>Price</p>
          <p style={{textAlign:"center"}}>24H Change</p>
          <p className='market-cap'>Market Cap</p>
        </div>

        {
          displayCoin.slice(0,10).map((item, index)=>(
            <Link to={`/coin/${item.id}`} className="table-layout" key={index}>
              <p>{item.market_cap_rank}</p>
              <div>
                <img src={item.image} alt="iamge" />
                <p>{item.name +" - "+ item.symbol}</p>
              </div>
              <p>{currency.symbol} {item.current_price.toLocaleString()}</p>
              <p 
              style={{textAlign : "center"}} 
              className={item.price_change_percentage_24h > 0 ? "green" : "red"}
              >
                {item.price_change_percentage_24h.toFixed(2)}
              </p>
              <p className='market-cap'>{currency.symbol} {item.market_cap.toLocaleString()}</p>
            </Link>
          ))
        }
      </div>
    </div>
  )
}

export default Home

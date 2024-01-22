import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import coinObject from '../functions/coinObject';
import List from '../components/Dashboard/List';
import Header from '../components/Common/Header';
import Loader from '../components/Common/Loader';

function CoinPage() {
  const { id } = useParams();

  const [coinData, setCoinData] = useState(null);
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    fetchData();
  }, [id])

  async function fetchData() {
    setIsLoading(true);
    try {
      const response = await axios.get(`https://api.coingecko.com/api/v3/coins/${id}`);
      coinObject(setCoinData, response.data);
      setIsLoading(false);
    }
    catch (err) {
      alert(err.message);
      setIsLoading(false);
    }
  }

  if (isLoading) {
    return (
      <div>
        <Header />
        <Loader />
      </div>
    )
  }

  return (
    <div>
      <Header />
      <table>
        <thead className='id-info'>
          {
            coinData !== null && <List coin={coinData} />
          }
        </thead>

      </table>


    </div>
  )
}

export default CoinPage
import React, { useEffect, useState } from 'react';
import Chart from 'react-google-charts';

const LineChart = ({historicalData}) => {

    const [data, setData] = useState([["Date", "Prices"]]);

    useEffect(()=>{
        let datacopy = [["Date", "Prices"]];
        if(historicalData.prices){
            historicalData.prices.map((item)=>{
                datacopy.push([`${new Date(item[0])}`,item[1]])
            })
            setData(datacopy);
            console.log(data);
            
        }
    },[historicalData])
  return (
    <Chart 
        chartType='LineChart'
        data={data}
        height={'100%'}
        legendToggle
    />
  )
}

export default LineChart
import React from 'react';
import {data} from '../shared/data';
import {Bar} from 'react-chartjs-2';

const ShowView = () => {
    return (
        <div className='container'>
            <div className='row'>
            <GraphicalView />
                <div className='col-md-5 offset-md-1'>
                    <h3>Expense History</h3>
                    <ul>
                        { 
                            data.map(d => (
                                <li key={d.id}>
                                    <p>Amount Spent: {d.amount} <br/>
                                    Spent for: {d.used} <br/>
                                    Spent on: {d.date}</p>
                                    <hr />
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    )}

const GraphicalView = () => {
  let dataMap = new Map();
  for(let i=0;i<data.length;i++) {
      if(dataMap.get(data[i].date)===undefined) {
          dataMap.set(data[i].date, data[i].amount)
      } else {
          dataMap.set(data[i].date, (data[i].amount + dataMap.get(data[i].date)))
      }
  }

  const graphData = {
      labels: [...dataMap.keys()],
      datasets: [
         {
            label: 'Expense History',
            data: [...dataMap.keys()].map(key => dataMap.get(key)),
            backgroundColor: '#ff0000',
            borderColor: '#ff0000'
         }
      ]
  }

  return (
      <div className='col-md-6'>
        <Bar data={graphData} />
        <p className='text-center'>Plot of Daily Expenses vs Date</p>
      </div>
  )
}


export default ShowView;
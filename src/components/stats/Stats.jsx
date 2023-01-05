import React from 'react'
import './stats.css';

const Stats = () => {
  const statsData = [
    {
      amount: "8",
      description: "Cannonical Books"
    },
    {
      amount: "7",
      description: "Games in the franchise"
    },
    {
      amount: "2",
      description: "Seasons: Netflix Series",
      indicator: "last"
    }
  ]
  return (
    <div className="stats-section">
      {
        statsData.map((data, index) => {
          return (
            <div className="stats-content" key={index}>
              <div className="stats-container">
                <h1>{data.amount}</h1>
                <h3>{data.description}</h3>
              </div>
              {data.indicator !== "last" ? <div className="stats-divider"/> : ''}
            </div>
          )
        })
      }
    </div>
  )
}

export default Stats
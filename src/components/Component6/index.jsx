import React from 'react'
import { component6 } from '../../assets/constant'
import '../../styles/Component6.css'

const columns = [
  {
    label: "Product",
    value: "product"
  },
  {
    label: "Sold amount",
    value: "sold_amount"
  },
  {
    label: "Unit Price",
    value: "unit_price"
  },
  {
    label: "Revenue",
    value: "revenue"
  },
  {
    label: "Rating",
    value: "rating"
  },
]

function Component6() {
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center",margin:"20px 0" }}>
        <h2 className='header6'>Top Products</h2>
        <div className='result'>Full results</div>
      </div>
      <div>
        <table style={{ width: "100%" }} >
          <thead>
            <tr>
              {
                columns.map((column) => {
                  return <td key={column.value} value={column.value}>{column.label}</td>
                })
              }
            </tr>
          </thead>
          <tbody>
            {
              component6.map((row) => {
                return <tr key={row.product.name}>
                  {columns.map((column) => {
                      if(column.value==="product"){
                        return <td key={column.value}>{row[column.value].name}</td>
                      }
                      else if(column.value==="rating"){
                        return <td key={column.value} className='rating'><div className='star'>*</div><div>{row[column.value]}</div></td>
                      }
                      else{
                        return <td key={column.value}>{row[column.value]}</td>
                      }
                    })}
                </tr>
              })
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Component6

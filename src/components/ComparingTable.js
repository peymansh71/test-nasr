import React from 'react'

export default function ComparingTable(props) {
  console.log(props.data)

  const getData = function(){
    return props.data?.length ?  props.data : []
  }

  const getHeader = function(){
    let data =  getData()
    return data.map((key, index)=>{
      return <div key={index}> {key.employee_name} </div>
    })
  }

  return (
    <div className='comapring'>
        {getHeader()}
    </div>
  )
}

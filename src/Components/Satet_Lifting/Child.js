import React from 'react'

const Child = (props) => {
    const childData = "I am ChildData From Child Component"
    props.onChildData(childData)

  return (
    <div>Child</div>
  )
}
export default Child
import React from 'react'

const CenterBox = ({children}) => {
  return (
    <div
        style={{display : "flex",
            justifyContent : "center",
            alignItems :"center",
            width : "100%",
            flexWrap : 'wrap',

            
        }}
    >{children}</div>
  )
}

export default CenterBox
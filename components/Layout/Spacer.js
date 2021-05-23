import React from 'react'

const Spacer = ({ h, id }) => {
    return (
        <div
            id={id}
            style={{
                height: h,
                width: '100%'
            }}>
        </div>
    )
}

export default Spacer
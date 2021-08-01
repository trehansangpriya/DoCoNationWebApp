import React from 'react'
import style from './style.module.css'
import Card from './Card';
const Clubs = ({ data }) => {
    return (
        <div className='section'>
            <h2
                style={{
                    textAlign: 'center',
                    marginBottom: '30px'
                }}
            >Join <span className="c-blue">Clubs!</span></h2>
            <div className={style.cardRow}>
                {data.map(({ name, icon, desc, form, web }, index) => (
                    <Card
                        key={index}
                        name={name}
                        icon={icon}
                        desc={desc}
                        form={form}
                        web={web}
                    />
                ))}

            </div>
        </div>
    )
}

export default Clubs

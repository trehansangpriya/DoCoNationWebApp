import React from 'react'
import style from './style.module.css'
import MemberCard from './../MemberCard/index';
import Spacer from './../../../Layout/Spacer';
const Department = ({ title, data }) => {
    const departmentMembers = data.filter(d => d.department === title)
    console.log(departmentMembers);
    return (
        <div className='section'>
            <h2 style={{ textAlign: "center" }}>{title}</h2>
            <Spacer h='16px' />
            <div className={style.cardRow}>
                {departmentMembers.map(d => (
                    <MemberCard key={d.name} hashtag={d.hashtag} name={d.name} image={d.image} quote={d.quote} links={d.links} />
                ))}
            </div>
        </div>
    )
}

export default Department

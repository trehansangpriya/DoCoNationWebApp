import React from 'react';
import detailRCstyles from '../../styles/Utilities/DetailRC.module.css';
import Button from './Button';

const DetailRC = ({
  generalTitle,
  coloredTitle,
  content,
  img,
  btnPri,
  btnSec,
  rev,
  alt,
}) => {
  return (
    <div className="section">
      <div className={
        rev
          ? 'd-flex d-row-rev ' + detailRCstyles.detailRC
          : 'd-flex ' + detailRCstyles.detailRC
      }>

        <div className={detailRCstyles.imgContainer}>
          <img src={img} alt={alt} />
        </div>

        <div className={detailRCstyles.textDetail}>
          <h2>
            {generalTitle}
            <br />
            <span className="c-blue">{coloredTitle}</span>
          </h2>

          <p>{content}</p>

          <div className={detailRCstyles.btns}>
            {btnPri && (
              <Button
                label={btnPri.label}
                type={btnPri.type + " " + detailRCstyles.btn}
                link={btnPri.link}
              />
            )}
            {btnSec && <Button label={btnSec.label} type={btnSec.type} link={btnSec.link} />}
          </div>
        </div>
      </div>
    </div>
  )
};

export default DetailRC;

import React from 'react';
import detailRCstyles from '../../styles/Utilities/Detail.module.css';
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
  return rev ? (
    <div className={'d-flex d-row-rev ' + detailRCstyles.detailRC}>
      <div className={detailRCstyles.imgContainer}>
        <img src={img} alt={alt} />
      </div>
      <div className={detailRCstyles.textDetail}>
        <h2>
          {generalTitle} <span className="c-blue">{coloredTitle}</span>{' '}
        </h2>
        <p>{content}</p>
        <div className={'btns '}>
          {btnPri && (
            <Button
              className={detailRCstyles.randomClass}
              label={btnPri.label}
              type={btnPri.type + ' ' + detailRCstyles.randomClass}
            />
          )}
          {btnSec && <Button label={btnSec.label} type={btnSec.type} />}
        </div>
      </div>
    </div>
  ) : (
    <div className={'d-flex ' + detailRCstyles.detailRC}>
      <div className={detailRCstyles.imgContainer}>
        <img src={img} alt={alt} />
      </div>
      <div className={detailRCstyles.textDetail}>
        <h2>
          {generalTitle} <span className="c-blue">{coloredTitle}</span>{' '}
        </h2>
        <p>{content}</p>
        <div className={'btns ' + detailRCstyles.buttonRes}>
          {btnPri && (
            <Button
              className={detailRCstyles.randomClass}
              label={btnPri.label}
              type={btnPri.type + ' ' + detailRCstyles.mRight}
              link={'#'}
            />
          )}
          {btnSec && (
            <Button label={btnSec.label} type={btnSec.type} link={'#'} />
          )}
        </div>
      </div>
    </div>
  );
};

export default DetailRC;

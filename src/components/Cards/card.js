import StarIcon from '@mui/icons-material/Star';
import React, { useState } from 'react';
import Carousel from './swip';
import rev from '../../assets/rev.webp';
import './styles.css';
import PopUp from '../Reviews/PopUp';

function Card(props) {
  const [isFullBioVisible, setFullBioVisible] = useState(false);
  const handleImageClick = () => {
    props.setPopupVisible(true);
  };

  const closePopup = () => {
    props.setPopupVisible(false);
  };
  const toggleFullBio = () => {
    setFullBioVisible(!isFullBioVisible);
  };

  return (
    <>
      <div>
        <div className="card">
          <div className="card-grid mb-10">
            <Carousel data={props.imgSrc} className="card-img" />
            <div className="-mt-20 ml-10 absolute">
              <img
                src={rev}
                className="h-10 w-10 rounded-md cursor-pointer"
                onClick={handleImageClick}
                alt="Review Icon"
              />
            </div>
          </div>
          <div className="card-title">
            <div className="card-title-desc">{props.desc}</div>
            <div className="card-rating">
              <StarIcon fontSize="small" />
              {props.rating}
            </div>
          </div>
          <div className="card-date">{props.date}</div>
          <div className="card-price">
            <strong>₹{props.price}</strong>
          </div>
        </div>
      </div>
      {props.isPopupVisible && (
        <PopUp
          isPopupVisible={props.isPopupVisible}

          closePopup={closePopup}
        />
      )}
    </>
  );
}

export default Card;

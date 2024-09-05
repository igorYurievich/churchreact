import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faTimes } from '@fortawesome/free-solid-svg-icons';
import './photomodal.css';

const PhotoModal = ({ isOpen, currentIndex, images, onClose }) => {
  const [index, setIndex] = useState(currentIndex);

  useEffect(() => {
    setIndex(currentIndex);
  }, [currentIndex, isOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') {
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      }
    };

    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, index]);

  const handleNext = () => {
    if (index < images.length - 1) {
      setIndex(index + 1);
    }
  };

  const handlePrev = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal fade show" style={{ display: 'block' }} aria-labelledby="photoModalLabel">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content bg-dark">
          <div className="modal-body">
            <div className="modal-image-container">
              <button type="button" className="modal-nav-btn left" onClick={handlePrev} disabled={index === 0}>
                <FontAwesomeIcon icon={faChevronLeft} />
              </button>
              
              <img src={images[index]} alt={`Gallery item ${index + 1}`} className="img-fluid" />
              
              <button type="button" className="modal-nav-btn right" onClick={handleNext} disabled={index === images.length - 1}>
                <FontAwesomeIcon icon={faChevronRight} />
              </button>
            </div>
          </div>
          <div className="modal-footer justify-content-between">
            <span className="modal-index">
              {index + 1} / {images.length}
            </span>
          
            <button type="button" className="btn btn-danger" onClick={onClose}>
              <FontAwesomeIcon icon={faTimes} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoModal;

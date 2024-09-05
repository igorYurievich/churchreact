import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faTimes, faSearchPlus, faSearchMinus } from '@fortawesome/free-solid-svg-icons';
import './photomodal.css';

const PhotoModal = ({ isOpen, currentIndex, images, onClose }) => {
  const [index, setIndex] = useState(currentIndex);
  const [isZoomed, setIsZoomed] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startPos, setStartPos] = useState({ x: 0, y: 0 });
  const [imgPos, setImgPos] = useState({ x: 0, y: 0 });
  const imgRef = useRef(null);

  useEffect(() => {
    setIndex(currentIndex);
  }, [currentIndex]);

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
      resetZoomAndPosition();
    }
  };

  const handlePrev = () => {
    if (index > 0) {
      setIndex(index - 1);
      resetZoomAndPosition();
    }
  };

  const toggleZoom = () => {
    if (isZoomed) {
      resetZoomAndPosition();
    } else {
      setIsZoomed(true);
    }
  };

  const resetZoomAndPosition = () => {
    setIsZoomed(false);
    setImgPos({ x: 0, y: 0 });
  };

  const handleMouseDown = (e) => {
    if (isZoomed && e.button === 0) {
      setIsDragging(true);
      setStartPos({ x: e.clientX - imgPos.x, y: e.clientY - imgPos.y });
      imgRef.current.classList.add('grabbing');
    }
  };

  const handleMouseMove = (e) => {
    if (isDragging && isZoomed) {
      const moveX = e.clientX - startPos.x;
      const moveY = e.clientY - startPos.y;
      setImgPos({ x: moveX, y: moveY });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    if (imgRef.current) {
      imgRef.current.classList.remove('grabbing');
    }
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
    if (imgRef.current) {
      imgRef.current.classList.remove('grabbing');
    }
  };

  const handleTouchStart = (e) => {
    if (isZoomed) {
      setIsDragging(true);
      const touch = e.touches[0];
      setStartPos({ x: touch.clientX - imgPos.x, y: touch.clientY - imgPos.y });
      imgRef.current.classList.add('grabbing');
    }
  };

  const handleTouchMove = (e) => {
    if (isDragging && isZoomed) {
      const touch = e.touches[0];
      const moveX = touch.clientX - startPos.x;
      const moveY = touch.clientY - startPos.y;
      setImgPos({ x: moveX, y: moveY });
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    if (imgRef.current) {
      imgRef.current.classList.remove('grabbing');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="wp-modal-overlay fullscreen">
      <div className="wp-modal-content fullscreen-dialog">
        <div className="wp-modal-header">
          <span className="modal-index">{index + 1} / {images.length}</span>
          <button className="wp-modal-zoom" onClick={toggleZoom}>
            <FontAwesomeIcon icon={isZoomed ? faSearchMinus : faSearchPlus} />
          </button>
          <button className="wp-modal-close" onClick={onClose}>
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>
        <div 
          className="wp-modal-body"
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onTouchStart={handleTouchStart}
        >
          <div className="wp-modal-image-container">
            <img
              ref={imgRef}
              src={images[index]}
              alt={`Gallery item ${index + 1}`}
              className={`wp-modal-image ${isZoomed ? 'zoomed' : ''}`}
              onMouseDown={handleMouseDown}
              style={{ transform: `translate(${imgPos.x}px, ${imgPos.y}px) scale(${isZoomed ? 1.2 : 1})` }}
            />
          </div>
        </div>
        <button className="modal-nav-btn left" onClick={handlePrev} disabled={index === 0}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <button className="modal-nav-btn right" onClick={handleNext} disabled={index === images.length - 1}>
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
    </div>
  );
};

export default PhotoModal;

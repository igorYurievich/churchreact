import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faTimes, faSearchPlus, faSearchMinus } from '@fortawesome/free-solid-svg-icons';
import './photomodal.css';

const PhotoModal = ({ isOpen, currentIndex, images, onClose }) => {
  const [index, setIndex] = useState(currentIndex);
  const [isZoomed, setIsZoomed] = useState(false);
  const [imagePosition, setImagePosition] = useState({ x: 0, y: 0 });
  const [dragStart, setDragStart] = useState(null);
  const imageRef = useRef(null);

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
      resetZoom();
    }
  };

  const handlePrev = () => {
    if (index > 0) {
      setIndex(index - 1);
      resetZoom();
    }
  };

  const toggleZoom = () => {
    setIsZoomed(!isZoomed);
    if (isZoomed) {
      resetZoom();
    }
  };

  const resetZoom = () => {
    setIsZoomed(false);
    setImagePosition({ x: 0, y: 0 });
  };

  const handleMouseDown = (e) => {
    if (isZoomed) {
      setDragStart({ x: e.clientX, y: e.clientY });
    }
  };

  const handleMouseMove = (e) => {
    if (isZoomed && dragStart) {
      const dx = e.clientX - dragStart.x;
      const dy = e.clientY - dragStart.y;
      setImagePosition((prevPosition) => ({
        x: prevPosition.x + dx,
        y: prevPosition.y + dy,
      }));
      setDragStart({ x: e.clientX, y: e.clientY });
    }
  };

  const handleMouseUp = () => {
    setDragStart(null);
  };

  if (!isOpen) return null;

  return (
    <div className="wp-modal-overlay fullscreen">
      <div className="wp-modal-content fullscreen-dialog">
        <div className="wp-modal-header">
          <span className="modal-index">
            {index + 1} / {images.length}
          </span>
          <button type="button" className="wp-modal-close" onClick={onClose}>
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>
        <div className="wp-modal-body">
          <button type="button" className="modal-nav-btn left" onClick={handlePrev} disabled={index === 0}>
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          
          <div
            className={`wp-modal-image-container ${isZoomed ? 'zoomed' : ''}`}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            style={{
              cursor: isZoomed ? 'grab' : 'auto',
            }}
          >
            <img
              src={images[index]}
              alt={`Gallery item ${index + 1}`}
              className={`wp-modal-image ${isZoomed ? 'zoomed' : ''}`}
              ref={imageRef}
              style={{
                transform: `translate(${imagePosition.x}px, ${imagePosition.y}px) scale(${isZoomed ? 2 : 1})`,
              }}
            />
          </div>

          <button type="button" className="modal-nav-btn right" onClick={handleNext} disabled={index === images.length - 1}>
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
        <div className="wp-modal-footer">
          <button type="button" className="btn btn-primary" onClick={toggleZoom}>
            <FontAwesomeIcon icon={isZoomed ? faSearchMinus : faSearchPlus} /> 
          </button>
        </div>
      </div>
    </div>
  );
};

export default PhotoModal;

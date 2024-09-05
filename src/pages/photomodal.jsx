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
  const [scale, setScale] = useState(1);
  const [startDistance, setStartDistance] = useState(null);
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

  useEffect(() => {
    if (!isOpen) {
      resetZoomAndPosition();
    }
  }, [isOpen]);

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
    setScale(1);
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
    if (e.touches.length === 2) {
      setStartDistance(getDistance(e.touches[0], e.touches[1]));
    }
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
    if (e.touches.length === 2) {
      const newDistance = getDistance(e.touches[0], e.touches[1]);
      const newScale = newDistance / startDistance;
      setScale(newScale);
      setImgPos({
        x: (e.touches[0].clientX + e.touches[1].clientX) / 2 - imgRef.current.clientWidth * newScale / 2,
        y: (e.touches[0].clientY + e.touches[1].clientY) / 2 - imgRef.current.clientHeight * newScale / 2
      });
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    if (imgRef.current) {
      imgRef.current.classList.remove('grabbing');
    }
  };

  const handleContextMenu = (e) => {
    e.preventDefault(); // Prevent right-click menu
  };

  const getDistance = (touch1, touch2) => {
    return Math.sqrt(
      Math.pow(touch2.clientX - touch1.clientX, 2) +
      Math.pow(touch2.clientY - touch1.clientY, 2)
    );
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
              onContextMenu={handleContextMenu} // Prevent right-click context menu
              draggable={false} // Prevent image dragging
              style={{ transform: `translate(${imgPos.x}px, ${imgPos.y}px) scale(${scale})` }}
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

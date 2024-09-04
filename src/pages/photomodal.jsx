import { useEffect } from 'react';

function PhotoModal({ currentIndex, images, showPrevImage, showNextImage }) {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (!images || !images.current) return;

      if (event.key === 'ArrowLeft' && currentIndex > 0) {
        showPrevImage();
      } else if (event.key === 'ArrowRight' && currentIndex < images.current.length - 1) {
        showNextImage();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentIndex, images, showPrevImage, showNextImage]);

  return (
    <div className="modal fade bg-dark" id="photoModal" tabIndex="-1" aria-labelledby="photoModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className="modal-content">
          <div className="modal-body text-center">
            {images && images.current && currentIndex !== null && (
              <img
                id="modalImage"
                src={images.current[currentIndex].src}
                className="img-fluid"
                alt="Modal"
                style={{ display: 'inline-block' }}
              />
            )}
          </div>
          <div className="modal-footer justify-content-between">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={showPrevImage}
              disabled={!images || currentIndex === 0}
            >
              <i className="fas fa-chevron-left"></i>
            </button>
            <span>
              {images && images.current && currentIndex !== null
                ? `Фото ${currentIndex + 1} из ${images.current.length}`
                : ''}
            </span>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={showNextImage}
              disabled={!images || currentIndex === images.current.length - 1}
            >
              <i className="fas fa-chevron-right"></i>
            </button>
            <a
              id="saveImage"
              className="btn btn-primary"
              href={images && images.current && currentIndex !== null ? images.current[currentIndex].src : ''}
              download
            >
              <i className="fas fa-download"></i>
            </a>
            <button type="button" className="btn btn-danger" data-bs-dismiss="modal">
              <i className="fas fa-times"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PhotoModal;

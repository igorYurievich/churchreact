import React, { useState, useCallback } from 'react';
import PhotoModal from './PhotoModal';
import './gallery.css';

const Media = () => {
  // Состояния для модального окна и текущего изображения
  const [modalOpen, setModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Список изображений для модального окна
  const imageUrls = [
    './images/group.png',
    './images/media144.webp',
    '/public/images_baptism/baptism202301.avif',
    '/public/images_baptism/baptism202306.avif',
    './public/images_baptism/baptism1.avif',
    './public/images_baptism/baptism2.avif'
  ];

  // Открыть модальное окно и установить текущее изображение
  const openModal = useCallback((index) => {
    setCurrentImageIndex(index);
    setModalOpen(true);
  }, []);

 
  const closeModal = useCallback(() => {
    setModalOpen(false);
  }, []);

  return (
    <div className="corpo">
      

      {/* Фотографии секция */}
      <h1 id="titull" className="container py-4 text-center">Фотографии</h1>
      <div className="container py-4">
        <div className="accordion" id="mediaAccordion">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingService">
              <button
                className="accordion-button collapsed"
                 id="titull"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseService"
                aria-expanded="false"
                aria-controls="collapseService"
              >
                Служение
              </button>
            </h2>
            <div
              id="collapseService"
              className="accordion-collapse collapse"
              aria-labelledby="headingService"
            >
              <div className="accordion-body">
                <div className="row flex-wrap">
                  <div className="col-md-6 d-flex justify-content-center py-2">
                    <img
                      src={imageUrls[0]}
                      className="img-fluid"
                      alt="Service"
                      onClick={() => openModal(0)}
                    />
                  </div>
                  <div className="col-md-6 d-flex justify-content-center py-2">
                    <img
                      src={imageUrls[1]}
                      className="img-fluid"
                      alt="Service"
                      onClick={() => openModal(1)}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="headingBaptismtwo">
              <button
                className="accordion-button collapsed"
                id="titull"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseBaptismtwo"
                aria-expanded="false"
                aria-controls="collapseBaptismtwo"
              >
                Крещение 15.10.2023
              </button>
            </h2>
            <div
              id="collapseBaptismtwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingBaptismtwo"
            >
              <div className="accordion-body">
                <div className="row flex-wrap">
                  <div className="col-md-6 d-flex justify-content-center py-2">
                    <img
                      src={imageUrls[2]}
                      className="img-fluid"
                      alt="Baptism"
                      onClick={() => openModal(2)}
                    />
                  </div>
                  <div className="col-md-6 d-flex justify-content-center py-2">
                    <img
                      src={imageUrls[3]}
                      className="img-fluid"
                      alt="Baptism"
                      onClick={() => openModal(3)}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="headingBaptism">
              <button
                className="accordion-button collapsed"
                 id="titull"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseBaptism"
                aria-expanded="false"
                aria-controls="collapseBaptism"
              >
                Крещение 24.09.2022
              </button>
            </h2>
            <div
              id="collapseBaptism"
              className="accordion-collapse collapse"
              aria-labelledby="headingBaptism"
            >
              <div className="accordion-body">
                <div className="row flex-wrap">
                  <div className="col-md-6 d-flex justify-content-center py-2">
                    <img
                      src={imageUrls[4]}
                      className="img-fluid"
                      alt="Baptism"
                      onClick={() => openModal(4)}
                    />
                  </div>
                  <div className="col-md-6 d-flex justify-content-center py-2">
                    <img
                      src={imageUrls[5]}
                      className="img-fluid"
                      alt="Baptism"
                      onClick={() => openModal(5)}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Видео секция */}
      <h1 id="titull" className="container py-4 text-center">Видео</h1>
      <div className="container py-4">
        <div className="row">
          <div className="col-md-6 py-2">
            <div className="ratio ratio-16x9">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/7p7PSTqobiQ?si=8ucnmj0OyrC7SeSG"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          <div className="col-md-6 py-2">
            <div className="ratio ratio-16x9">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/giOXGaxqCqo?si=pA0ZUwtHl2zeNK52"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      {/* Модальное окно для просмотра фотографий */}
      <PhotoModal isOpen={modalOpen} currentIndex={currentImageIndex} images={imageUrls} onClose={closeModal} />
    </div>
  );
};

export { Media };

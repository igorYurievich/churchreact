import React, { useState, useRef } from 'react';
import './adition.css';

const Media = () => {
  const [currentIndex, setCurrentIndex] = useState(null);
  const images = useRef([]);

  const openModal = (index) => {
    setCurrentIndex(index);
    const modal = new window.bootstrap.Modal(document.getElementById('photoModal'));
    modal.show();
  };

  const showPrevImage = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const showNextImage = () => {
    if (currentIndex < images.current.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <div className="corpo">
      <div className="container">
        <h1 id="titull" className="container pt-4 text-center">Видео и фотографии</h1>
        <p className="container py-4" style={{ textAlign: 'justify' }} id="intro">
          Приветствуем вас на нашей странице с фотографиями и видео! Здесь вы найдете яркие моменты с наших богослужений, встреч и других мероприятий.
        </p>
      </div>

      <div className="modal fade" id="photoModal" tabIndex="-1" aria-labelledby="photoModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-lg-custom">
          <div className="modal-content">
            <div className="modal-body">
              <img id="modalImage" src={currentIndex !== null ? images.current[currentIndex].src : ''} className="img-fluid" alt="Modal" />
            </div>
            <div className="modal-footer justify-content-between">
              <button type="button" className="btn btn-secondary" onClick={showPrevImage} disabled={currentIndex === 0}>
                <i className="fas fa-chevron-left"></i>
              </button>
              <span>{currentIndex !== null ? `Фото ${currentIndex + 1} из ${images.current.length}` : ''}</span>
              <button type="button" className="btn btn-secondary" onClick={showNextImage} disabled={currentIndex === images.current.length - 1}>
                <i className="fas fa-chevron-right"></i>
              </button>
              <a id="saveImage" className="btn btn-primary" href={currentIndex !== null ? images.current[currentIndex].src : ''} download>
                <i className="fas fa-download"></i>
              </a>
              <button type="button" className="btn btn-danger" data-bs-dismiss="modal">
                <i className="fas fa-times"></i>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-4">
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button className="accordion-button collapsed" id="titul" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                Видео
              </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne">
              <div className="accordion-body">
                <div className="container">
                  <div className="row">
                    <div className="col-md-6 py-2">
                      <div className="ratio ratio-16x9">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/7p7PSTqobiQ?si=8ucnmj0OyrC7SeSG" 
                                title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" 
                                allowFullScreen>
                        </iframe>                            
                      </div>
                    </div>
                    <div className="col-md-6 py-2">
                      <div className="ratio ratio-16x9">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/giOXGaxqCqo?si=pA0ZUwtHl2zeNK52" 
                                title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" 
                                allowFullScreen>
                        </iframe>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="headingService">
              <button className="accordion-button collapsed" id="titul" type="button" data-bs-toggle="collapse" data-bs-target="#collapseService" aria-expanded="false" aria-controls="collapseService">
                Служение
              </button>
            </h2>
            <div id="collapseService" className="accordion-collapse collapse" aria-labelledby="headingService">
              <div className="accordion-body">
                <div className="row flex-wrap">
                  <div className="col-md-6 d-flex justify-content-center py-2">
                    <img
                      src="./images/media1.jpg"
                      className="img-fluid"
                      alt="Service"
                      onClick={() => openModal(0)}
                      ref={(el) => (images.current[0] = el)}
                    />
                  </div>
                  <div className="col-md-6 d-flex justify-content-center py-2">
                    <img
                      src="./images/media2.jpg"
                      className="img-fluid"
                      alt="Service"
                      onClick={() => openModal(1)}
                      ref={(el) => (images.current[1] = el)}
                    />
                  </div>
                  <div className="col-md-6 d-flex justify-content-center py-2">
                    <img
                      src="./images/media3.jpg"
                      className="img-fluid"
                      alt="Service"
                      onClick={() => openModal(2)}
                      ref={(el) => (images.current[2] = el)}
                    />
                  </div>
                  <div className="col-md-6 d-flex justify-content-center py-2">
                    <img
                      src="./images/media4.jpg"
                      className="img-fluid"
                      alt="Service"
                      onClick={() => openModal(3)}
                      ref={(el) => (images.current[3] = el)}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="headingBaptismtwo">
              <button className="accordion-button collapsed" id="titul" type="button" data-bs-toggle="collapse" data-bs-target="#collapseBaptismtwo" aria-expanded="false" aria-controls="collapseBaptismtwo">
                Крещение 15.10.2023
              </button>
            </h2>
            <div id="collapseBaptismtwo" className="accordion-collapse collapse" aria-labelledby="headingBaptismtwo">
              <div className="accordion-body">
                <div className="row flex-wrap">
                  <div className="col-md-6 d-flex justify-content-center py-2">
                    <img
                      src="./images/images_baptism/baptism202301.jpg"
                      className="img-fluid"
                      alt="Baptism"
                      onClick={() => openModal(4)}
                      ref={(el) => (images.current[4] = el)}
                    />
                  </div>
                  <div className="col-md-6 d-flex justify-content-center py-2">
                    <img
                      src="./images/images_baptism/baptism202302.jpg"
                      className="img-fluid"
                      alt="Baptism"
                      onClick={() => openModal(5)}
                      ref={(el) => (images.current[5] = el)}
                    />
                  </div>
                  <div className="col-md-6 d-flex justify-content-center py-2">
                    <img
                      src="./images/images_baptism/baptism202303.jpg"
                      className="img-fluid"
                      alt="Baptism"
                      onClick={() => openModal(6)}
                      ref={(el) => (images.current[6] = el)}
                    />
                  </div>
                  <div className="col-md-6 d-flex justify-content-center py-2">
                    <img
                      src="./images/images_baptism/baptism202304.jpg"
                      className="img-fluid"
                      alt="Baptism"
                      onClick={() => openModal(7)}
                      ref={(el) => (images.current[7] = el)}
                    />
                  </div>
                  <div className="col-md-6 d-flex justify-content-center py-2">
                    <img
                      src="./images/images_baptism/baptism202305.jpg"
                      className="img-fluid"
                      alt="Baptism"
                      onClick={() => openModal(8)}
                      ref={(el) => (images.current[8] = el)}
                    />
                  </div>
                  <div className="col-md-6 d-flex justify-content-center py-2">
                    <img
                      src="./images/images_baptism/baptism202306.jpg"
                      className="img-fluid"
                      alt="Baptism"
                      onClick={() => openModal(9)}
                      ref={(el) => (images.current[9] = el)}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="headingBaptism">
              <button className="accordion-button collapsed" id="titul" type="button" data-bs-toggle="collapse" data-bs-target="#collapseBaptism" aria-expanded="false" aria-controls="collapseBaptism">
                Крещение 24.09.2022
              </button>
            </h2>
            <div id="collapseBaptism" className="accordion-collapse collapse" aria-labelledby="headingBaptism">
              <div className="accordion-body">
                <div className="row flex-wrap">
                  <div className="col-md-6 d-flex justify-content-center py-2">
                    <img
                      src="./images/images_baptism/baptism1.jpg"
                      className="img-fluid"
                      alt="Baptism"
                      onClick={() => openModal(10)}
                      ref={(el) => (images.current[10] = el)}
                    />
                  </div>
                  <div className="col-md-6 d-flex justify-content-center py-2">
                    <img
                      src="./images/images_baptism/baptism2.jpg"
                      className="img-fluid"
                      alt="Baptism"
                      onClick={() => openModal(11)}
                      ref={(el) => (images.current[11] = el)}
                    />
                  </div>
                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Media };

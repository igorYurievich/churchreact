import React from 'react';
import './adition.css';
const Media = () => {
  return (
    <div className="corpo">
      <div className="container">
      <h1 id="titull" className="container pt-4 text-center">Видео и фотографии</h1>
        <p className="container py-4" style={{ textAlign: 'justify' }} id="zagolovok">
          Приветствуем вас на нашей странице с фотографиями и видео! Здесь вы найдете яркие моменты с наших богослужений, встреч и других мероприятий.
        </p>
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
                    <img src="./images/media1.jpg" className="img-fluid" alt="Service" data-bs-image="./images/service1.jpg" />
                  </div>
                  <div className="col-md-6 d-flex justify-content-center py-2">
                    <img src="./images/media2.jpg" className="img-fluid" alt="Service" data-bs-image="./images/service2.jpg" />
                  </div>
                  <div className="col-md-6 d-flex justify-content-center py-2">
                    <img src="./images/media3.jpg" className="img-fluid" alt="Service" data-bs-image="./images/service2.jpg" />
                  </div>
                  <div className="col-md-6 d-flex justify-content-center py-2">
                    <img src="./images/media4.jpg" className="img-fluid" alt="Service" data-bs-image="./images/service2.jpg" />
                  </div>
                  <div className="col-md-6 d-flex justify-content-center py-2">
                    <img src="./images/media109.jpg" className="img-fluid" alt="Service" data-bs-image="./images/service2.jpg" />
                  </div>
                  <div className="col-md-6 d-flex justify-content-center py-2">
                    <img src="./images/media134.jpg" className="img-fluid" alt="Service" data-bs-image="./images/service2.jpg" />
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
                    <img src="./images/images_baptism/baptism202301.jpg" className="img-fluid" alt="Baptism" data-bs-image="./images/baptism1.jpg" />
                  </div>
                  <div className="col-md-6 d-flex justify-content-center py-2">
                    <img src="./images/images_baptism/baptism202302.jpg" className="img-fluid" alt="Baptism" data-bs-image="./images/baptism2.jpg" />
                  </div>
                  <div className="col-md-6 d-flex justify-content-center py-2">
                    <img src="./images/images_baptism/baptism202303.jpg" className="img-fluid" alt="Baptism" data-bs-image="./images/baptism2.jpg" />
                  </div>
                  <div className="col-md-6 d-flex justify-content-center py-2">
                    <img src="./images/images_baptism/baptism202304.jpg" className="img-fluid" alt="Baptism" data-bs-image="./images/baptism2.jpg" />
                  </div>
                  <div className="col-md-6 d-flex justify-content-center py-2">
                    <img src="./images/images_baptism/baptism202305.jpg" className="img-fluid" alt="Baptism" data-bs-image="./images/baptism2.jpg" />
                  </div>
                  <div className="col-md-6 d-flex justify-content-center py-2">
                    <img src="./images/images_baptism/baptism202306.jpg" className="img-fluid" alt="Baptism" data-bs-image="./images/baptism2.jpg" />
                  </div>
                  <div className="col-md-6 d-flex justify-content-center py-2">
                    <img src="./images/images_baptism/baptism202307.jpg" className="img-fluid" alt="Baptism" data-bs-image="./images/baptism2.jpg" />
                  </div>
                  <div className="col-md-6 d-flex justify-content-center py-2">
                    <img src="./images/images_baptism/baptism202308.jpg" className="img-fluid" alt="Baptism" data-bs-image="./images/baptism2.jpg" />
                  </div>
                  <div className="col-md-6 d-flex justify-content-center py-2">
                    <img src="./images/images_baptism/baptism202309.jpg" className="img-fluid" alt="Baptism" data-bs-image="./images/baptism2.jpg" />
                  </div>
                  <div className="col-md-6 d-flex justify-content-center py-2">
                    <img src="./images/images_baptism/baptism202310.jpg" className="img-fluid" alt="Baptism" data-bs-image="./images/baptism2.jpg" />
                  </div>
                  <div className="col-md-6 d-flex justify-content-center py-2">
                    <img src="./images/images_baptism/baptism202311.jpg" className="img-fluid" alt="Baptism" data-bs-image="./images/baptism2.jpg" />
                  </div>
                  <div className="col-md-6 d-flex justify-content-center py-2">
                    <img src="./images/images_baptism/baptism202312.jpg" className="img-fluid" alt="Baptism" data-bs-image="./images/baptism2.jpg" />
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
                    <img src="./images/images_baptism/baptism1.jpg" className="img-fluid" alt="Baptism" data-bs-image="./images/baptism1.jpg" />
                  </div>
                  <div className="col-md-6 d-flex justify-content-center py-2">
                    <img src="./images/images_baptism/baptism2.jpg" className="img-fluid" alt="Baptism" data-bs-image="./images/baptism2.jpg" />
                  </div>
                  <div className="col-md-6 d-flex justify-content-center py-2">
                    <img src="./images/images_baptism/baptism3.jpg" className="img-fluid" alt="Baptism" data-bs-image="./images/baptism2.jpg" />
                  </div>
                  <div className="col-md-6 d-flex justify-content-center py-2">
                    <img src="./images/images_baptism/baptism4.jpg" className="img-fluid" alt="Baptism" data-bs-image="./images/baptism2.jpg" />
                  </div>
                  <div className="col-md-6 d-flex justify-content-center py-2">
                    <img src="./images/images_baptism/baptism5.jpg" className="img-fluid" alt="Baptism" data-bs-image="./images/baptism2.jpg" />
                  </div>
                  <div className="col-md-6 d-flex justify-content-center py-2">
                    <img src="./images/images_baptism/baptism6.jpg" className="img-fluid" alt="Baptism" data-bs-image="./images/baptism2.jpg" />
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

export {Media};

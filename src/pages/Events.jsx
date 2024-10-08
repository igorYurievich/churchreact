import React from 'react';
import './adition.css';
const Events = () => {
  return (
    <div className="corpo">
    <div className="image-container" id="banner">
        <div className="text-overlay">
          <h3 id="titul">20/10/2024 - Праздник Жатвы</h3>
        </div>
        <img src="/images/eventbanner.webp" alt="Event banner" />
      </div>
      <div className="container">
        <h1 id="titull" className="container pt-4 text-center">Наши мероприятия</h1>
        <p className="container py-4" style={{ textAlign: 'justify' }} id="intro">
          Добро пожаловать на страницу мероприятий! Здесь вы найдёте информацию о предстоящих событиях и важных мероприятиях нашей общины. Мы надеемся, что каждый найдёт для себя что-то полезное и духовно обогащающее. Следите за обновлениями и присоединяйтесь к нашей церковной жизни. Да благословит Вас Господь!
        </p>
      </div>

      <div className="container py-4">
        <div className="container d-flex justify-content-center ">
            <div className="table-responsive py-4">
              <table className="schedule-table">
                <thead className="thead-light">
                  <tr>
                    <th>Предстоящие мероприятия</th>
                    <th>Дата</th>
                    <th>Время</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Женский молитвенный завтрак</td>
                    <td>14 сентября</td>
                    <td>10:00</td>
                  </tr>
                  <tr>
                    <td>Мужской молитвенный завтрак</td>
                    <td>21 сентября</td>
                    <td>10:00</td>
                  </tr>
                  <tr>
                    <td>Вечер хвалы и поклонения</td>
                    <td>27 сентября</td>
                    <td>19:00</td>
                  </tr>
                  <tr>
                    <td>Семейный Вечер "Женские вопросы"</td>
                    <td>30 сентября</td>
                    <td>19:00</td>
                  </tr>
                  <tr>
                    <td>Семейный Вечер "Мужские вопросы"</td>
                    <td>2 октября</td>
                    <td>19:00</td>
                  </tr>
                  <tr>
                    <td>Молодежная встреча</td>
                    <td>4 октября</td>
                    <td>19:00</td>
                  </tr>
                  <tr>
                    <td>Праздник жатвы</td>
                    <td>20 октября</td>
                    <td>19:00</td>
                  </tr>
                </tbody>
              </table>
            </div>
         

          {/* <div className="col-md-6">
            <div id="carouselExampleCaptions" className="carousel slide">
              <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src="./images/yl1.webp" className="img-fluid w-100" style={{ objectFit: 'cover', height: '100%' }} alt="younglife" />
                </div>
                <div className="carousel-item">
                  <img src="./images/yl2.webp" className="img-fluid w-100" style={{ objectFit: 'cover', height: '100%' }} alt="younglife" />
                </div>
                <div className="carousel-item">
                  <img src="./images/yl4.webp" className="img-fluid w-100" style={{ objectFit: 'cover', height: '100%' }} alt="younglife" />
                </div>
                <div className="carousel-item">
                  <img src="./images/yl3.webp" className="img-fluid w-100" style={{ objectFit: 'cover', height: '100%' }} alt="younglife" />
                </div>
              </div>

              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Предыдущий</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Следующий</span>
              </button>
            </div>
            <div className="accordion" id="accordionExample">
            <div className="accordion-item">
  <h2 className="accordion-header">
    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne" style={{ backgroundColor: '#fff', color: '#000', borderColor: '#ddd' }}>
      <strong id="titul">О Young Life</strong>
    </button>
  </h2>
  <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
    <div className="accordion-body" style={{ textAlign: 'justify' }}>
      <p>
        <strong>Young Life</strong> — это динамичное движение, посвященное молодежному служению. Наша команда активно работает с подростками и молодежью, создавая увлекательные и полезные рубрики, которые способствуют духовному развитию и укреплению веры. Мы организуем встречи и мероприятия каждую субботу в 16:00 в нашей церкви, где каждый может хорошо провести время и развиваться духовно. Присоединяйтесь к нам и станьте частью нашего локального сообщества в Торревьехе!
      </p>
      <a href="https://www.instagram.com/younglife.torre/" target="_blank" rel="noopener noreferrer" title="Instagram" className="ylinsta">
        <i className="fab fa-instagram"></i>
        <span>Следите за нами в Instagram!</span>
      </a>
    </div>
  </div>
</div>


            </div>
          </div> */}
        </div>
      </div>

      {/* <h3 className="text-center py-4" id="titull">Предыдущие мероприятия:</h3> */}


    </div>
  );
};

export {Events};

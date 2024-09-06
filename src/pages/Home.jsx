import React from 'react';
import LazyLoad from 'react-lazyload';
import './Home.css';
import './adition.css';
const Home = () => {
  return (
    <div className="corpo">

      
      <div className="image-container" id="banner">
        <div className="text-overlay">
          <h1 id="titul">Церковь ЕХБ <br />"Свет Жизни"</h1>
        </div>
        <img src="/images/media134.avif" alt="Описание изображения" />
      </div>
    
      <div className="container-md py-4">
        <div className="row">
          <div className="col-md-6 d-flex align-items-center">
            <div className="bg-white rounded shadow-sm p-4">
              <h2 className="text-center mb-4" id="titull">Кто мы?</h2>
              <p style={{ textAlign: 'justify' }} id="intro">
              Мы — Первая Баптистская Церковь в Торревьехе, и нам уже больше двух лет. Мы — сообщество верующих, стремящихся расти в вере и служении. Наша церковь проводит регулярные богослужения, молитвенные встречи и различные мероприятия, создавая уникальную атмосферу для наших посетителей. Мы рады каждому, кто хочет узнать больше о Боге, поделиться своими переживаниями или найти поддержку в духовном пути. Присоединяйтесь к нам и станьте частью нашей дружной и гостеприимной семьи!
              </p>
            </div>
          </div>
    
          <div className="col-md-6">
          <div className="table-responsive">
            <table className="schedule-table">
              <thead>
                <tr>
                  <th colSpan="2" className="text-center">РАСПИСАНИЕ</th>
                </tr>
              </thead>
              <tbody>
                            <tr>
                                <td>Малая группа</td>
                                <td className="text-left">Вторник 20:00 - 22:00</td>
                            </tr>
                            <tr>
                                <td>Молитвенное служение</td>
                                <td className="text-left">Среда 19:00 - 21:00</td>
                            </tr>
                            <tr>
                                <td>Братское общение</td>
                                <td className="text-left">Четверг 19:30 - 21:30</td>
                            </tr>
                            <tr>
                                <td>Молодежка</td>
                                <td className="text-left">Пятница 19:00 - 21:00</td>
                            </tr>
                            <tr>
                                <td>Клуб Young Life</td>
                                <td className="text-left">Суббота 16:00 - 18:00</td>
                            </tr>
                            <tr>
                                <td>Служение</td>
                                <td className="text-left">Воскресенье 14:00 - 17:00</td>
                            </tr>
                        </tbody>
            </table>
          </div>
          </div>
        </div>
      </div>
    
      <div className="container py-4">
        <h2 className="text-center mb-4 py-4" id="titull">Какие у нас основные активности?</h2>
        
        <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        <strong id="titull">Изучение Библии</strong>
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne">
      <div className="accordion-body" style={{ textAlign: 'justify' }}>
        <div className="row flex-md-nowrap flex-wrap">
          <div className="col-md-6 d-flex">
            <img src="/images/book.webp" alt="Bible Study" className="img-fluid custom-img" style={{ width: '600px', marginBottom: '15px' }} />
          </div>
          <div className="col-md-5 text-justify">
            <strong>Каждую неделю мы собираемся для изучения Библии. </strong>
            Это время, когда мы вместе погружаемся в тексты, обсуждаем важные темы и укрепляем свою веру. Наши встречи проходят в теплой и дружелюбной атмосфере, где каждый может найти поддержку и вдохновение на своем духовном пути.
          </div>
        </div>
      </div>
    </div>
  </div>

  <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        <strong id="titull">Служение</strong>
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo">
      <div className="accordion-body" style={{ textAlign: 'justify' }}>
        <div className="row flex-md-nowrap flex-wrap">
          <div className="col-md-6 d-flex">
            <img src="/images/event3.webp" alt="God bless" className="img-fluid custom-img" style={{ width: '600px', marginBottom: '15px' }} />
          </div>
          <div className="col-md-5 text-justify">
            <strong>Служение — это неотъемлемая часть нашей духовной жизни. </strong>
            Каждое воскресенье мы собираемся вместе, чтобы поклоняться, молиться и возрастать в вере. Это время общения, поддержки и укрепления наших духовных основ. Приглашаем вас присоединиться к нам каждое воскресенье и стать частью нашей общины.
          </div>
        </div>
      </div>
    </div>
  </div>

  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        <strong id="titull">Детские лагеря</strong>
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree">
      <div className="accordion-body" style={{ textAlign: 'justify' }}>
        <div className="row flex-md-nowrap flex-wrap">
          <div className="col-md-6 d-flex justify-content-center">
            <img src="/images/event2.webp" alt="Young Life Camp" className="img-fluid custom-img" style={{ width: '600px', marginBottom: '15px' }} />
          </div>
          <div className="col-md-5 text-justify">
            <strong>Детские лагеря Young Life — это уникальная возможность для роста и приключений. </strong>
            Каждый год мы организуем лагеря, которые предоставляют детям и подросткам шанс развиваться в безопасной и поддерживающей среде. Эти лагеря наполнены активными занятиями, духовными уроками и моментами общения, что помогает каждому участнику найти новых друзей и укрепить свою веру.
          </div>
        </div>
      </div>
    </div>
  </div>

  <div className="accordion-item">
    <h2 className="accordion-header" id="headingFour">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
        <strong id="titull">Молодежные встречи</strong>
      </button>
    </h2>
    <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour">
      <div className="accordion-body" style={{ textAlign: 'justify' }}>
        <div className="row">
          <div className="col-md-5">
            <img src="/images/media056.webp" alt="Youth Meeting" className="img-fluid" style={{ width: '500px', height: 'auto', marginBottom: '15px' }} />
          </div>
          <div className="col-md-7">
            <strong>Наши молодежные встречи проводятся каждую пятницу. </strong>
            Это отличная возможность для общения, духовного роста и веселья. На данный момент встречи приостановлены, но следите за новостями — мы обязательно скоро возобновим их! Оставайтесь на связи, чтобы не пропустить возобновление встреч и новые мероприятия.
          </div>
        </div>
      </div>
    </div>
  </div>

  <div className="accordion-item">
    <h2 className="accordion-header" id="headingFive">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
        <strong id="titull">Братское общение</strong>
      </button>
    </h2>
    <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive">
      <div className="accordion-body" style={{ textAlign: 'justify' }}>
        <strong>Наши братские встречи создают уникальную атмосферу доверия и поддержки среди братьев. </strong>
        Это время для искренних разговоров, взаимного укрепления в вере и совместного отдыха. Следите за обновлениями, чтобы не пропустить новые встречи и мероприятия.
      </div>
    </div>
  </div>

  <div className="accordion-item">
    <h2 className="accordion-header" id="headingSix">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
        <strong id="titull">Сестринская группа</strong>
      </button>
    </h2>
    <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix">
      <div className="accordion-body" style={{ textAlign: 'justify' }}>
        <strong>Сестринские встречи — это место, где каждая сестра может найти поддержку, вдохновение и дружеское общение. </strong>
        Здесь мы делимся своими переживаниями, молимся друг за друга и укрепляемся в вере.
      </div>
    </div>
  </div>
</div>


      <div className="text-center mt-4">
        <a href="/events" className="btn btn-primary" id="knowmore">Узнайте больше о наших мероприятиях</a>
      </div>

      </div>
    
      <hr />
    
      <div className="container py-4" id="forma">
        <h2 className="text-center mb-4 py-4" id="titull">Связаться с нами</h2>
        <form action="send_email.php" method="post">
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Имя/Фамилия</label>
            <input type="text" className="form-control" id="name" name="name" placeholder="Ваше имя" required />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email адрес</label>
            <input type="email" className="form-control" id="email" name="email" placeholder="name@example.com" required />
          </div>
          <div className="mb-3">
            <label htmlFor="subject" className="form-label">Тема</label>
            <input type="text" className="form-control" id="subject" name="subject" placeholder="Тема сообщения" required />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">Ваше сообщение</label>
            <textarea className="form-control" id="message" name="message" rows="4" placeholder="Добрый вечер! Я бы хотел узнать подробнее о вашей церкви" required></textarea>
          </div>
          <button type="submit" className="btn btn-primary" id="knowmore">Отправить</button>
        </form>
      </div>
    
      <div className="info-and-social-container">
        <div className="contact-info-container">
          <h2 className="text-center mb-4">Контактная информация</h2>
          <div className="contact-info">
            <div className="contact-item">
              <i className="fas fa-envelope"></i>
              <p>Почта: <a href="mailto:viktorkovba@gmail.com">viktorkovba@gmail.com</a></p>
            </div>
            <div className="contact-item">
              <i className="fas fa-phone"></i>
              <p>Телефон: <a href="tel:+34611270755">+34 611 270 755</a></p>
            </div>
          </div>
        </div>
        
        <div className="social-media-container">
          <h2 className="text-center mb-4" id="titull">Наши социальные сети</h2>
          <div className="social-media">
            <a href="https://www.facebook.com/BaptistChurchTorrevieja/" target="_blank" rel="noopener noreferrer" title="Facebook" className="social-item facebook">
              <i className="fab fa-facebook-f"></i>
              <span>Facebook</span>
            </a>
            <a href="https://www.youtube.com/channel/UCXmt49rfuWxVzN3Soh15MrA" target="_blank" rel="noopener noreferrer" title="YouTube" className="social-item youtube">
              <i className="fab fa-youtube"></i>
              <span>YouTube</span>
            </a>
            <a href="https://www.instagram.com/luzentorrevieja/" target="_blank" rel="noopener noreferrer" title="Instagram" className="social-item instagram">
              <i className="fab fa-instagram"></i>
              <span>Instagram</span>
            </a>
            <a href="https://wa.me/34611270755" target="_blank" rel="noopener noreferrer" title="WhatsApp" className="social-item whatsapp">
              <i className="fab fa-whatsapp"></i>
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    
      <div className="container py-4">
        <h2 className="text-center mb-4 py-4" id="titull">Местоположение</h2>
        <LazyLoad height={450} offset={100}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3144.7769664328066!2d-0.6687949999999999!3d37.982334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd63abf4635afadf%3A0x8148701558086b2!2z0KbQtdGA0LrQvtCy0Ywg0JXQpdCRICLQodCy0LXRgiDQltC40LfQvdC4Ii8gSWdsZXNpYSAiTHV6IERlIFZpZGEi!5e0!3m2!1ses-419!2ses!4v1724672810118!5m2!1ses-419!2ses"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </LazyLoad>
      </div>
    </div>
  );
};

export {Home};

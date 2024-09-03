import React from 'react';

const Donate = () => {
  return (
    <div className="corpo">
    <div className="container py-4">
      <h1 className="text-center" id="titull">Поддержите нашу Церковь</h1>
      <p className="container py-4" style={{ textAlign: 'justify' }} id="zagolovok">
        Ваша поддержка позволяет нам продолжать нашу миссию, распространять Слово Божие и помогать нуждающимся. 
        Мы искренне благодарны за каждое пожертвование и уверены, что оно принесёт пользу нашему сообществу и 
        каждому, кто нуждается в помощи.
      </p>

      <div className="card-body" id="citata">
        <blockquote className="blockquote mb-0" style={{ fontStyle: 'italic', padding: '1rem' }}>
          <p>“Каждый пусть дает так, как решил в сердце своем, не с сожалением и не с принуждением, ибо доброохотного даятеля любит Бог.”</p>
          <footer className="blockquote-footer">2 Коринфянам 9:7</footer>
        </blockquote>
      </div>

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card mx-auto mt-4">
              <ul className="list-group list-group-flush">
                <li className="list-group-item text-center">
                  <h3 id="titull">Реквизиты</h3>
                </li>
                <li className="list-group-item">
                  <strong>Банк:</strong> Пример Банк
                </li>
                <li className="list-group-item">
                  <strong>Получатель:</strong> Luz De Vida Church
                </li>
                <li className="list-group-item">
                  <strong>IBAN:</strong> ES00 0000 0000 0000 0000 0000
                </li>
                <li className="list-group-item">
                  <strong>SWIFT/BIC:</strong> ABCD1234
                </li>
                <li className="list-group-item">
                  <strong>Назначение платежа:</strong> Пожертвование
                </li>
                <li className="list-group-item text-center my-2">
                  <a href="https://www.donationalerts.com/" className="btn btn-primary btn-lg mt-3 shiny-button" target="_blank" rel="noopener noreferrer">
                    <strong>Сделать Пожертвование</strong>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-6 d-flex justify-content-center align-items-center py-2 mt-3">
            <div className="card" style={{ width: '40rem' }}>
              <img src="./images/jesushand.png" className="card-img-top" alt="Bible Image" />
              <div className="card-body">
                <p className="card-text" style={{ fontStyle: 'italic' }}>
                  "Призови Меня в день скорби; Я избавлю тебя, и ты прославишь Меня." — Псалом 49:15
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Donate;

import React, {useState} from "react";
import './sass files/footer.scss';
import './sass files/logocomponent.scss';
import './sass files/contactcomponent.scss'
import './sass files/authorprivacy.scss'
import './sass files/choosingprofession.scss'
const ContactComponent = () => {
    const contacts = [
        {src: '/images/contacts/phone.png', text: '+7 (495) 371-57-66' },
        {src: '/images/contacts/vkontakte.png', text: 'Мы ВКонтакте' },
        {src: '/images/contacts/telegram.png', text: 'Мы в Телеграм' },
    ]
  return(
      <div className="contact-wrapper">
          {contacts.map(({src, text}, index) => (
              <div key={index} className="contact-block">
                  <img src={src} alt=""/>
                  <div>{text}</div>
              </div>
              )
          )}
      </div>
  )
}
const LogoComponent = () => {
    return(
        <div className="logo-wrapper">
            <div className="logos">
                <img src="/images/listImages/guulogo.png" alt=""/>
                <img src="/images/listImages/imlogo.png" alt=""/>
            </div>
            <div className="university-info">
                <div className={`university-title`}>Государственный университет управления</div>
                <div className={`institute-title`}>Институт Маркетинга</div>
            </div>
        </div>
    )
}
const ChoosingProfession = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [isNavigated, setIsNavigated] = useState(false);
  return(
      <div className="profession-wrapper">
          <div className="profession-question">
              Нужна помощь с выбором профессии?
          </div>
          <div className="profession-information">
              Пройди тестирование и узнай, какая профессия в области маркетинга тебе подходит!
          </div>
          <div className="profession-test">
              <div
                   className={`test-link ${isClicked ? 'clicked' : isNavigated ? 'navigated' : ''}`}
                   onMouseEnter={() => setIsNavigated(true)}
                   onMouseLeave={() => setIsNavigated(false)}
              >
                  <a
                      href="#"
                      target={"_blank"}
                      onClick={() => setIsClicked(true)}>Пройти тест
                  </a>
                  <img src="/images/contacts/arrow.png" alt=""/>
              </div>
          </div>
      </div>
  )
}
const AuthorPrivacyComponent = () => {
  return (
      <div className="author-privacy-wrapper">
          <div className="authors">
              <div className="developers">
                  Разработано: Анастасия Тукмакова, Нурия Ситдикова
              </div>
              <div className="designers">
                  Оформлено: Светлана Кулакова
              </div>
          </div>
          <div className="privacy">
            <div className="year">
                © 2023
            </div>
              <div className="privacy-policy">
                  Политика конфиденциальности
              </div>
          </div>
      </div>
  )
}

const Footer = () => {
    return (
        <div className="footer">
            <LogoComponent/>
            <AuthorPrivacyComponent/>
            <ChoosingProfession/>
            <ContactComponent/>
        </div>
    )
}
export default Footer;
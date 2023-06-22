import React, {useState} from "react";
import './sass files/footer.scss';
import './sass files/logocomponent.scss';
import './sass files/contactcomponent.scss'
import './sass files/authorprivacy.scss'
import './sass files/choosingprofession.scss'
export const ContactComponent = () => {
    const contacts = [
        {src: '/images/contacts/phone.svg', text: '+7 (495) 371-57-66', link: 'https://web.whatsapp.com'},
        {src: '/images/contacts/vkontakte.svg', text: 'Мы ВКонтакте',  link: 'https://vk.com/sum_marketing'},
        {src: '/images/contacts/telegram.svg', text: 'Мы в Телеграм', link: 'https://t.me/tamvim'},
    ]
  return(
      <div className="contact-wrapper">
          {contacts.map(({src, text, link}, index) => (
              <div key={index} className="contact-block">
                  <img src={src} alt=""/>
                  <a target='_blank' href={link}>{text}</a>
              </div>
              )
          )}
      </div>
  )
}
export const ContactComponentMobile = () => {
    const contacts = [
        {src: '/images/contacts/phone.svg', text: '+7 (495) 371-57-66', link: 'https://web.whatsapp.com'},
        {src: '/images/contacts/vkontakte.svg', text: 'Мы ВКонтакте',  link: 'https://vk.com/sum_marketing'},
        {src: '/images/contacts/telegram.svg', text: 'Мы в Телеграм', link: 'https://t.me/tamvim'},
    ]
    return(
        <div className="contact-wrapper-mobile">
            {contacts.map(({src, link}, index) => (
                    <div key={index} className="contact-block-mobile">
                        <a href={link}><img src={src} alt=""/></a>
                    </div>
                )
            )}
        </div>
    )
}
export const LogoComponent = () => {
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
export const ChoosingProfession = () => {
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
export const AuthorPrivacyComponent = () => {
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
            <div className="container-footer-content">
                <LogoComponent/>
                <AuthorPrivacyComponent/>
                <ChoosingProfession/>
                <ContactComponent/>
            </div>
        </div>
    )
}
export const FooterMobile = () => {
    return (
        <div className="footer">
                <div className="container-footer-content-mobile">
                    <div style={{display: 'flex', justifyContent: 'space-between'}}>
                        <div style={{display: 'flex', flexWrap: 'nowrap'}}>
                            <img style={{paddingRight: 3.97}} width={20} height={20} src="/images/listImages/guulogo.png" alt=""/>
                            <img width={20} height={20} src="/images/listImages/imlogo.png" alt=""/>
                        </div>
                        <ContactComponentMobile/>
                    </div>
                    <div className={`choosing-privacy`}>
                        <ChoosingProfession/>
                        <AuthorPrivacyComponent/>
                    </div>
                </div>
        </div>
    )
}
export default Footer;
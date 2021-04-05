const Logo = (props) => (
    <div className={props.className}></div>
);
const PhoneLink = (props) => (
    <div className={props.className}>
        <a href="tel:7(962)556-1234">+7(962)556-1234</a>
    </div>
);
const Header = () => (
    <header>
        <div className="wrapper">
            <div className="header">
                <a href="#">
                    <Logo className='header-logo'/>
                </a>
                <PhoneLink className='header-phone'/>
                <div className="header-phonelink">
                    <a href="tel:7(962)556-1234">+7(962)556-1234</a>
                </div>
            </div>
        </div>
    </header>
);
const Mainaa = () => (
    <main>
        <div className="wrapper">
            <div className="main">
                <h1 className="main-head">Заголовок c уникальным торговым предложение по системе 4U</h1>
                <div className="main-small">Описания предлжения компании. Сайт рыбатекст поможет дизайнеру,
                    верстальщику,
                    вебмастеру сгенерировать несколько абзацев более.
                </div>
                <button className="btn main-btn"><span>Подробнее</span></button>
            </div>
        </div>
    </main>
);
const St1 = {
    backgroundImage: 'url(./images/1.svg)'
};

const FeatureImg = (props) => (
    <div className="features-img" style={St1}></div>
)
const FeaturesSliderItems = (props) => (
    <div className="features-slider_item">
        <FeatureImg />
        <div className="features-feature">{props.textitem}</div>
    </div>
);
const Features = () => (
    <section className="features">
        <div className="wrapper">
            <div className="features-wrapper">
                <h2 className="features-head">Уникальный заголовок для преимущества компании</h2>
                <div className="features-subhead">О нас</div>
                <div className="features-description">Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру
                    сгенерировать несколько абзацев более менее осмысленного текста рыбы на русском языке, а начинающему
                    оратору отточить.
                </div>
                <div className="features-slider">
                    <div className="features-slider_items">
                        <FeaturesSliderItems textitem='Первое целевое приемущество'/>
                        <FeaturesSliderItems textitem='Второе целевое приемущество'/>
                        <FeaturesSliderItems textitem='Третье целевое приемущество'/>
                        <FeaturesSliderItems textitem='Четвертое целевое приемущество'/>
                    </div>
                    <button className="features-slider-arrow features-slider-prev">
                        <svg width="9" height="16"
                             xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M8.707 8.707a1 1 0 0 0 0-1.414L2.343.929A1 1 0 1 0 .93 2.343L6.586 8 .929 13.657a1 1 0 0 0 1.414 1.414l6.364-6.364zM7 9h1V7H7v2z">
                            </path>
                        </svg>
                    </button>
                    <button className="features-slider-arrow features-slider-next">
                        <svg width="9"
                             height="16" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M8.707 8.707a1 1 0 0 0 0-1.414L2.343.929A1 1 0 1 0 .93 2.343L6.586 8 .929 13.657a1 1 0 0 0 1.414 1.414l6.364-6.364zM7 9h1V7H7v2z">
                            </path>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    </section>
);
const Button = () => (
    <button className="btn contact-btn"><span>Позвоните мне</span></button>
);
const InputForm = (props) => (
    <input type={props.type} placeholder={props.placeholder} />
);
const ContactForm = () => (
    <form action="../mailer.smart.php" className="contact-form">
        <InputForm type='text' placeholder="Ваше имя"/>
        <InputForm type='tel' placeholder="Телефон"/>
        <InputForm type='email' placeholder="E-mail"/>
        <Button/>
    </form>
);
const Contacts = () => (
    <section className="contact">
        <div className="wrapper">
            <div className="contact-wrapper">
                <h2 className="contact-title">Остались вопросы?</h2>
                <div className="contact-description">Оставьте номер телефона, и мы перезвоним вам</div>
                <ContactForm/>
                <div className="contact-personal">Я даю своё <a href="#">согласие</a> на обработку моих персональных
                    данных.
                </div>
            </div>
        </div>
    </section>
);
const Footer = () => (
    <footer>
        <div className="footer">
            <Logo className="footer-logo"/>
            <div className="footer-company"><span>© 2020 XXXcompany. Все права защищены.</span></div>
            <a href="tel:888"
               className="footer-phone"></a>
            <div className="footer-websurfer"><span className="footer-websurfer_build">Сделано</span>
                <a href="#">Ваше имя</a>
            </div>
            <PhoneLink className='footer-phonelink'/>
        </div>
    </footer>
);
const MainJSX = () => (
    <>
    <Header/>
    <Mainaa/>
    <Features/>
    <Contacts/>
    <Footer/>
    </>
);

ReactDOM.render(<MainJSX/>, document.getElementById('root'));
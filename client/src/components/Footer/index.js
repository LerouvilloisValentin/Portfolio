import "./footer.css"
// import arrow from "public/img/arrow.png"

function Footer(){
    const upToHome = () => {
        window.scroll({
            top:"400vh",
            behavior:'smooth',
        })
    }
    return(
        <div className="footer">
            <div className="footer-top"onClick={upToHome}>
                <img className="buttoon-up" src="img/arrow.png" alt="arrow"
                ></img>
            </div>
            <div className="footer-bottom">
            <ul className="wrapper">
                <li className="icon youtube">
                    <span className="tooltip">Youtube</span>
                    <span><i className="fab fa-youtube"></i>
                    <a href="https://www.youtube.com/watch?v=ozEwinMqyFY" target="_blank" rel="noreferrer"> <img src="https://zupimages.net/up/22/30/g0eu.png" alt="youtube"/> </a>
                    </span>            
                </li>
                <li className="icon linkendin">
                    <span className="tooltip">Linkendin</span>
                    <span><i className="fab fa-linkendin"></i>
                    <a href="https://www.linkedin.com/in/valentin-lerouvillois-6944b4198/" target="_blank" rel="noreferrer"><img src="https://zupimages.net/up/22/30/dxtz.png" alt="instagram"/> </a>
                    </span>
                </li>
                <li className="icon github">
                    <span className="tooltip" translate="no">Github</span>
                    <span><i className="fab fa-github"></i>
                    <a href="https://github.com/LerouvilloisValentin" target="_blank" rel="noreferrer"><img src="https://zupimages.net/up/23/07/5h8d.png" alt="github" className="github" /> </a>
                    </span>
                </li>
            </ul>
            <div>
            <p className="title-footer">2023 Valentin's Website</p>
            </div>
            </div>
        </div>
    )
}

export default Footer;


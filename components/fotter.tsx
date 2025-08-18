import DownloadCV from "./DownloadCV";

const Footer = () => {
    return(
        <>
            <div className="footer">
                <h5>¡Trabajemos juntos!</h5>
                <div className="contact">
                    <div className="email">
                        <p>Correo electrónico:</p>
                        <p>fatimajimenezleyva@gmail.com</p>
                    </div>
                    <div className="telephone">
                        <p>Teléfono:</p>
                        <p>771 244 8527</p>
                    </div>
                    <DownloadCV/>
                </div>
            </div>
            <style jsx>{`
                .footer{
                    background: #A8BEFD;
                    min-height: 50vh;
                    padding: 2rem;
                }
                .footer h5 {
                    color: #fff;
                    text-shadow: 7px 7px 7px #363333;
                    font-size: 45px;
                    margin: 0;
                }
                .contact {
                    color: #fff;
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: space-between;
                    align-items: center;
                }
                .contact div > p:nth-child(2) {
                    font-size: 20px;
                }
                @media (min-width: 768px) {
                    .footer h5 {
                        font-size: 75px;
                    }
                    .contact div > p:nth-child(2) {
                        font-size: 25px;
                    }
                }
                @media (min-width: 1024px) {
                  
                }
            `}</style>
        </>
    );
}

export default Footer;
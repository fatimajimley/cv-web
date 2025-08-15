import ContainerInfo from "./ContainerInfo";
import Title from "./title";

const About = () => {
    return(
        <>  
            <div className="about">
                <div className="headerTitle">
                    <Title text="ACERCA DE" borderColor="#6474FC" color="#6474FC" level={2} aling="flex-end"/>
                </div>
                <div className="aboutme">
                    <ContainerInfo text={"Desarrolladora web full-stack con enfoque en JavaScript/Node.js, manejo de MongoDB y creación de interfaces. Capacidad para resolver problemas complejos, aprender nuevas tecnologías y optimizar procesos de desarrollo."} colorText={"#fff"} colorBorder={"#6474FC"}/>
                    <ContainerInfo text={"Responsable y apasionada en todo lo que hago aprecio enfrentar nuevos desafíos que me ayudan a seguir creciendo tanto profesional como personalmente, siempre con la disposición de a aprender y adaptarme a nuevas herramientas y desafíos."} colorText={"#fff"} colorBorder={"#6474FC"}/>
                    <ContainerInfo text={"Mi habilidad para trabajar en equipo, intercambiar ideas y aprender de la experiencia de todos es una de mis grandes fortalezas."} colorText={"#fff"} colorBorder={"#6474FC"}/>
                </div>
            </div>
            
            
            <style jsx>{`
                .about{
                    background: #A8BEFD;
                    min-height: 100vh;
                    display: flex;
                    justify-content: center;
                    flex-direction: column;
                    padding: 2rem;
                }
                .headerTitle{
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 5em;
                    margin-bottom: 3rem;
                }
                .aboutme{
                    display: flex;
                    justify-content: space-around;
                    flex-wrap: wrap;
                }
                @media (min-width: 768px) {
                    // .headerTitle{
                    //    position: relative;
                    // }
                }
                @media (min-width: 1024px) {
                    // .headerTitle{
                    //    position: relative;
                    // }
                }
            `}</style>
        </>
    );
};

export default About;

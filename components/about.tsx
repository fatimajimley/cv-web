import Avatar from "./avatar";
import ContainerInfo from "./ContainerInfo";
import Title from "./title";

const About = () => {
    return(
        <>  
            <div className="about" id="about">
                <div className="headerTitle">
                    <Title text="ACERCA DE" borderColor="#6474FC" color="#6474FC" aling="flex-end"/>
                </div>
                <div className="aboutme">
                    <Avatar />
                    <ContainerInfo text={"Desarrolladora web full-stack con enfoque en JavaScript/Node.js, manejo de MongoDB y creación de interfaces. Capacidad para resolver problemas complejos, aprender nuevas tecnologías y optimizar procesos de desarrollo. Responsable y apasionada en todo lo que hago aprecio enfrentar nuevos desafíos que me ayudan a seguir creciendo tanto profesional como personalmente. Mi habilidad para trabajar en equipo, intercambiar ideas y aprender de la experiencia de todos es una de mis grandes fortalezas."} colorText={"#fff"} colorBorder={"transparent"}/>
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
                    align-items: center;
                }
            `}</style>
        </>
    );
};

export default About;

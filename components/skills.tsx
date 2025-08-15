import Title from "./title";
import { skills } from "../data/skills";
import Subtitle from "./subtitle";
import Cards from "./cards";
const Skills = () =>{
    return(
        <>
            <div className="skills">
                <div className="headerTitle">
                    <Title text="SKILLS" borderColor="#6474FC" color="#FFF" aling="flex-end"/>
                </div>
                {skills.map(skillCategory => (
                    <>
                        <Subtitle text={skillCategory.subtitle}/>
                        <div className="infoSkills">
                            {skillCategory.skills.map((skill)=>(
                                <Cards title={skill.skill} icon={skill.icon} point={skill.point}/>
                            ))}
                        </div>
                    </>
                ))}
            </div>
            <style jsx>{`
                .skills{
                    position: relative;
                    min-height: 100vh;
                }
                .skills::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background-image: url("./images/background.png");
                    background-size: auto 100%;
                    background-position: center;
                    background-repeat: no-repeat;
                    transform: scaleX(-1); 
                    z-index: -1; 
                }
                .headerTitle{
                    display: flex;
                    position: relative;
                    align-items: center;
                    margin-bottom: 1rem;
                    padding: 3rem;
                }
                .infoSkills{
                    padding: 1rem;
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: space-around;
                }
                @media (min-width: 768px) {
                    .infoSkills{
                        padding: 3rem;
                    }   
                }
                @media (min-width: 1024px) {
                    // .headerTitle{
                    //    position: relative;
                    // }
                }
            `}</style>
        </>
    );
}

export default Skills;
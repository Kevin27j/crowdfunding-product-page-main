import ProjectComp from "./BodyComponents/ProjectComp";
import StatsComp from "./BodyComponents/StatsComp";
import AboutComp from "./BodyComponents/AboutComp";

function Body() {
    return (
        <div>
            <p>Hello React</p>
            <ProjectComp/>
            <StatsComp/>
            <AboutComp/>
        </div>
    );
}

export default Body
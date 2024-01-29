import Userclass from "./UserClass";
import UserFun from "./UserFun";

const About = () => {
    return (
        <div className="about">
            <h1>This is a about page</h1>
            <Userclass Name={"rajesh"} Location={"ghodegaon"}/>
            <UserFun Name={"shree"} Location={"Mumbai"} />
        </div>
    )
}

export default About;
import Userclass from "./Userclass"


const About = () => {

    return (
        <div className="about">
            <h1>This is About</h1>
            <h2>Welcome to Namaste React series</h2>
            <Userclass name={"Kavya"} location={"Chennai"} email={"kavya123@gmail.com"} />
        </div>
    )
}
export default About;
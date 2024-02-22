import React from "react";
class Userclass extends React.Component {

    constructor(props) {
        super(props);
        console.log(this.props);

        this.state = {
            userInfo: {
                name: "kavya",
                location: "chennai"
            }
        }
    }

    async componentDidMount() {
        const api = await fetch("https://api.github.com/users/Kavya-P158")
        const data = await api.json();
        console.log(data);
        this.setState({
            userInfo: data
        })

    }
    render() {

        const { login } = this.state.userInfo;
        const { count } = this.state;
        return (

            <div className="aboutclass">
                <h2>Count:{count}</h2>
                <button onClick={() => {
                    this.setState({
                        count: this.state.count + 1
                    })
                }}>Increment Count</button>
                <h2>Name:{login}</h2>

            </div>
        )
    }
}

export default Userclass;
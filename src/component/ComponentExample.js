import React from "react";

class ComponentExample extends React.Component {

    state = {
        name: "VVTruong",
        description: ""
    }
    handleOnChangeName = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    handleClickButton = () => {
        alert("Click me succesfull")

    }
    render() {

        return (
            <>
                <div className="first_class">
                    <input value={this.state.name} type="text"
                        onChange={(event) => this.handleOnChangeName(event)}
                    />
                    My Name is {this.state['name']}
                </div>
                <div className="button">
                    <button onClick={() => this.handleClickButton()}>Click me</button>
                </div>

                <div className="test">
                    {/* {console.log("may name is ", this.state.name)} */}
                    Learning Reacjs For Beginer, My name is {this.state.name}
                </div>

            </>

        )

    }
}
export default ComponentExample;
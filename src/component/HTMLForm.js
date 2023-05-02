import React from "react";

class HTMLForm extends React.Component {


    state = {
        first: '',
        last: ''
    }
    handleChangeFirst = (event) => {
        this.setState({
            first: event.target.value
        })
    }
    handleChangeLast = (event) => {
        this.setState({
            last: event.target.value
        })
    }

    handleSubmit = () => {
        alert('Click me')
    }
    render() {
        return (
            <>
                <div>
                    Hello HTML Form By Begginer
                    <form>
                        <label htmlFor="fname">First name:</label><br />
                        <input type="text" value={this.state.first}
                            onChange={(event) => this.handleChangeFirst(event)} />
                        <br />
                        <label htmlFor="lname">Last name:</label><br />
                        <input type="text" value={this.state.last}
                            onChange={(event) => this.handleChangeLast(event)}
                        /><br />
                        <input type="submit" value="Submit"
                            onClick={() => this.handleSubmit()} />
                    </form>
                </div>
            </>
        )
    }
}

export default HTMLForm;
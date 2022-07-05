import React, { Component } from "react";

class InfoCardBuilder extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    renderInputs = () => {
        let tempArray = Array.from(this.props.inputArray);
        // Shift temp array to get rid of title
        return tempArray.map((inputContent) => {
            if (inputContent.type !== "textarea") {
                return (
                    <input
                        type={inputContent.type}
                        placeholder={inputContent.title}
                        id={inputContent.id}
                    ></input>
                );
            } else {
                return (
                    <textarea
                        placeholder={inputContent.title}
                        id={inputContent.id}
                    ></textarea>
                );
            }
        });
    };
    render() {
        const { cardTitle } = this.props;
        return (
            <form className="form column">
                <h2 className="card-title">{cardTitle}</h2>
                {this.renderInputs()}
            </form>
        );
    }
}

export default InfoCardBuilder;

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
    renderButton = () => {
        if (this.props.multiple) {
            return (
                <button
                    type="button"
                    className="action-btn"
                    onClick={() => {
                        this.props.addNewSection();
                    }}
                >
                    Add
                </button>
            );
        }
    };
    render() {
        const { cardTitle } = this.props;
        return (
            <form className="form column">
                <div className="divider row">
                    <h2 className="card-title">{cardTitle}</h2>
                    {this.renderButton()}
                </div>
                {this.renderInputs()}
            </form>
        );
    }
}

export default InfoCardBuilder;

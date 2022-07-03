import React, { Component } from "react";

class InfoCardBuilder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pageTitle: "",
        };
    }
    renderInputs = () => {
        let tempArray = Array.from(this.props.inputArray);
        // Shift temp array to get title
        tempArray.shift();
        // console.log(this.props.inputArray);
        return tempArray.map((inputContent) => {
            return (
                <input
                    type={inputContent.type}
                    placeholder={inputContent.title}
                    id={inputContent.id}
                ></input>
            );
        });
    };
    render() {
        return <form>{this.renderInputs()}</form>;
    }
}

export default InfoCardBuilder;

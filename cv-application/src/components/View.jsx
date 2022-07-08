import avatar from "../img/avatar-icon.svg";
import uniqid from "uniqid";
import { useEffect } from "react";

const View = (props) => {
    useEffect(() => {
        fillValues();
    });
    const fillValues = () => {
        props.inputValues.forEach((input) => {
            if (input.value !== "") {
                document.querySelector(`.${input.id}`).textContent =
                    input.value;
            }
        });
    };
    const displayExpCards = () => {
        const expInfoArray = props.expInfoArray;
        return expInfoArray.map((expArray) => {
            return expArray.map((item) => {
                if (item.value !== "") {
                    return <p key={uniqid()}>{item.value}</p>;
                }
            });
        });
    };
    return (
        <div className="row">
            <section className="left-column divider column">
                <img src={avatar} alt="avatar-icon" />
                <div className="description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Autem quam soluta mollitia recusandae commodi. Deleniti
                    maiores repudiandae, similique reprehenderit repellendus
                    cupiditate vero quas
                </div>
            </section>
            <div className="right-column">
                <div className="personal-information row">
                    <div className="divider row">
                        <h1 className="first-name">John</h1>
                        <h1 className="last-name">Doe</h1>
                    </div>
                    <div className="column">
                        <p className="address">123 Seasme Street</p>
                        <p className="phone-number">1800-21343</p>
                        <p className="email">johndoe@gmail.com</p>
                    </div>
                </div>
                <div className="experience-content-container">
                    <h3>Experience:</h3>
                    {displayExpCards()}
                </div>
                <div className="education-content-container">
                    <h3>Education:</h3>
                    <p className="university-name">
                        California State University, Sacramento
                    </p>
                    <p className="school-city">Sacramento</p>
                    <p className="degree">
                        Bachelor's of Science: Computer Science
                    </p>
                </div>
            </div>
        </div>
    );
};

export default View;

import { useState } from "react";
import Header from "./components/Header";
import InfoCardBuilder from "./components/InfoCardBuilder";
import View from "./components/View";
import uniqid from "uniqid";
import "./styles/style.css";

function App() {
    const [personalInfoArray, setPersonalInfoArray] = useState([
        { title: "First Name", id: "first-name", type: "text", value: "" },
        { title: "Last Name", id: "last-name", type: "text", value: "" },
        { title: "Address", id: "address", type: "text", value: "" },
        { title: "Phone Number", id: "phone-number", type: "tel", value: "" },
        { title: "Email", id: "email", type: "email", value: "" },
        {
            title: "Description",
            id: "description",
            type: "textarea",
            value: "",
        },
    ]);
    const [expInfoArray, setExpInfoArray] = useState([
        [
            {
                title: "Position",
                id: uniqid(),
                type: "text",
                value: "",
            },
            { title: "Company", id: uniqid(), type: "text", value: "" },
            { title: "City", id: uniqid(), type: "text", value: "" },
        ],
    ]);
    const [educationArray, setEducationArray] = useState([
        {
            title: "University Name",
            id: "university-name",
            type: "text",
            value: "",
        },
        { title: "City", id: "school-city", type: "text", value: "" },
        { title: "Degree", id: "degree", type: "text", value: "" },
    ]);
    const [expInfoCards, setExpInfoCards] = useState([
        <InfoCardBuilder
            multiple={true}
            addNewSection={addNewExpSection}
            cardTitle={"Experience"}
            inputArray={expInfoArray[0]}
        />,
    ]);
    const [allInputs, setAllInputs] = useState(
        personalInfoArray.concat(educationArray)
    );

    function getAllInputValues() {
        let tempArray = Array.from(allInputs);
        tempArray.forEach((item) => {
            item.value = document.getElementById(item.id).value;
        });
        let tempArray2 = Array.from(expInfoArray);
        tempArray2.forEach((array) => {
            array.forEach((item) => {
                item.value = document.getElementById(item.id).value;
            });
        });
        setAllInputs(tempArray);
    }
    function addNewExpSection() {
        const tempArray = [
            {
                title: "Position",
                id: uniqid(),
                type: "text",
                value: "",
            },
            { title: "Company", id: uniqid(), type: "text", value: "" },
            { title: "City", id: uniqid(), type: "text", value: "" },
        ];
        // Add new array and component for a new experience section to fill out
        setExpInfoArray((old) => [...old, tempArray]);
        setExpInfoCards((old) => [
            ...old,
            <InfoCardBuilder cardTitle={"Experience"} inputArray={tempArray} />,
        ]);
    }
    return (
        <div className="App">
            <Header getAllInputValues={getAllInputValues} />
            <section className="info-card-container container">
                <div className="info-card-content">
                    <InfoCardBuilder
                        cardTitle={"Personal Information"}
                        inputArray={personalInfoArray}
                    />
                    {expInfoCards}
                    <InfoCardBuilder
                        cardTitle={"Education"}
                        inputArray={educationArray}
                    />
                    <button
                        className="action-btn"
                        onClick={() => {
                            document
                                .querySelector(".info-card-container")
                                .classList.add("hide");
                            document
                                .querySelector(".view-container")
                                .classList.remove("hide");
                            getAllInputValues();
                        }}
                    >
                        Submit
                    </button>
                </div>
            </section>
            <div className="view-container container hide">
                <View inputValues={allInputs} expInfoArray={expInfoArray} />
                <button
                    onClick={() => {
                        document
                            .querySelector(".info-card-container")
                            .classList.remove("hide");
                        document
                            .querySelector(".view-container")
                            .classList.add("hide");
                    }}
                    className="action-btn"
                >
                    Back
                </button>
            </div>
        </div>
    );
}

export default App;

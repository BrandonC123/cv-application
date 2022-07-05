import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import InfoCardBuilder from "./components/InfoCardBuilder";
import View from "./components/View";
import uniqid from "uniqid";

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
            { title: "Position", id: uniqid(), type: "text", value: "" },
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
            { title: "Position", id: uniqid(), type: "text", value: "" },
            { title: "Company", id: uniqid(), type: "text", value: "" },
            { title: "City", id: uniqid(), type: "text", value: "" },
        ];
        setExpInfoArray([...expInfoArray, tempArray]);
        console.log(expInfoArray);
    }
    return (
        <div className="App">
            <Header getAllInputValues={getAllInputValues} />
            <div className="info-card-container container">
                <InfoCardBuilder
                    cardTitle={"Personal Information"}
                    inputArray={personalInfoArray}
                />
                {expInfoCards}
                <InfoCardBuilder
                    cardTitle={"Education"}
                    inputArray={educationArray}
                />
                <button onClick={() => addNewExpSection()}>Submit</button>
            </div>
            <div className="view-container container hide">
                <View inputValues={allInputs} expInfoArray={expInfoArray} />
            </div>
        </div>
    );
}

export default App;

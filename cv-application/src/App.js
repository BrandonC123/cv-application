import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import InfoCardBuilder from "./components/InfoCardBuilder";
import View from "./components/View";

function App() {
    const [personalInfoArray, setPersonalInfoArray] = useState([
        { title: "First Name", id: "first-name", type: "text", value: "" },
        { title: "Last Name", id: "last-name", type: "text", value: "" },
        { title: "Address", id: "address", type: "text", value: "" },
        { title: "Phone Number", id: "phone-number", type: "tel", value: "" },
        { title: "Email", id: "email", type: "email", value: "" },
    ]);
    const [expInfoArray, setExpInfoArray] = useState([
        { title: "Position", id: "position", type: "text", value: "" },
        { title: "Company", id: "company", type: "text", value: "" },
        { title: "City", id: "city", type: "text", value: "" },
    ]);
    const [educationArray, setEducationArray] = useState([
        {
            title: "University Name",
            id: "university-name",
            type: "text",
            value: "",
        },
        { title: "City", id: "city", type: "text", value: "" },
        { title: "Degree", id: "degree", type: "text", value: "" },
    ]);
    const [allInputs, setAllInputs] = useState(
        personalInfoArray.concat(expInfoArray, educationArray)
    );

    function getAllInputValues() {
        let tempArray = Array.from(allInputs);
        tempArray.map((item) => {
            item.value = document.getElementById(item.id).value;
        });
        setAllInputs(tempArray);
        console.log(allInputs);
    }
    return (
        <div className="App">
            <Header />
            <div className="info-card-container">
                <InfoCardBuilder inputArray={personalInfoArray} />
                <InfoCardBuilder inputArray={expInfoArray} />
                <InfoCardBuilder inputArray={educationArray} />
            </div>
            <View inputValues={allInputs} />
            <button onClick={() => getAllInputValues()}>test</button>
        </div>
    );
}

export default App;

import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import InfoCardBuilder from "./components/InfoCardBuilder";
import PersonalInformation from "./components/PersonalInformation";

function App() {
    const [personalInfoArray, setPersonalInfoArray] = useState([
        { cardTitle: "Personal Info" },
        { title: "First Name", id: "first-name", type: "text" },
        { title: "Last Name", id: "last-name", type: "text" },
        { title: "Address", id: "address", type: "text" },
        { title: "Phone Number", id: "phone-number", type: "tel" },
        { title: "Email", id: "email", type: "email" },
    ]);
    const [expInfoArray, setExpInfoArray] = useState([
        { cardTitle: "Experience" },
        { title: "Position", id: "position", type: "text" },
        { title: "Company", id: "company", type: "text" },
    ]);
    return (
        <div className="App">
            <Header />
            <InfoCardBuilder inputArray={personalInfoArray} />
            <InfoCardBuilder inputArray={expInfoArray} />
            {/* <PersonalInformation /> */}
        </div>
    );
}

export default App;

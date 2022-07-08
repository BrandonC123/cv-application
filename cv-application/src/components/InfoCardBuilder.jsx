import uniqid from "uniqid";

const InfoCardBuilder = (props) => {
    const renderInputs = () => {
        let tempArray = Array.from(props.inputArray);
        // Shift temp array to get rid of title
        return tempArray.map((inputContent) => {
            if (inputContent.type !== "textarea") {
                return (
                    <input
                        key={uniqid()}
                        type={inputContent.type}
                        placeholder={inputContent.title}
                        id={inputContent.id}
                    ></input>
                );
            } else {
                return (
                    <textarea
                        key={uniqid()}
                        placeholder={inputContent.title}
                        id={inputContent.id}
                    ></textarea>
                );
            }
        });
    };
    const renderButton = () => {
        if (props.multiple) {
            return (
                <button
                    type="button"
                    className="action-btn"
                    onClick={() => {
                        props.addNewSection();
                    }}
                >
                    Add
                </button>
            );
        }
    };
    return (
        <form className="form column">
            <div className="divider row">
                <h2 className="card-title">{props.cardTitle}</h2>
                {renderButton()}
            </div>
            {renderInputs()}
        </form>
    );
};

export default InfoCardBuilder;

const Header = (props) => {
    return (
        <header className="header row">
            <h1 className="header-title">CV Creator</h1>
            <nav className="row">
                <li>
                    <button
                        onClick={() => {
                            document
                                .querySelector(".info-card-container")
                                .classList.remove("hide");
                            document
                                .querySelector(".view-container")
                                .classList.add("hide");
                        }}
                        type="button"
                        className="build-btn"
                    >
                        Build
                    </button>
                </li>
                <li>
                    <button
                        onClick={() => {
                            document
                                .querySelector(".info-card-container")
                                .classList.add("hide");
                            document
                                .querySelector(".view-container")
                                .classList.remove("hide");
                            props.getAllInputValues();
                        }}
                        type="button"
                        className="link-btn"
                    >
                        View
                    </button>
                </li>
            </nav>
        </header>
    );
};

export default Header;

import '../styles/Header.scss'

function Header(props) {
    return (
        <div className="headers">
            <h1> {props.myHeader} </h1>
        </div>
    );
}

export default Header;
import "../styles/Result.scss"

function Result(props) {
    return (
        <div id="resultDiv">
            
            <p> {props.data} </p>
            

        </div>
    );
}

export default Result;
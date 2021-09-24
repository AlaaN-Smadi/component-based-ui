import "./Result.scss"

// import JSONPretty from 'react-json-pretty';
// import Loading from '../loading/loading';


function Result(props) {

    // let objTest = {
    //     "squadName": "Super hero squad",
    //     "homeTown": "Metro City",
    //     "formed": 2016,
    //     "secretBase": "Super tower",
    //     "active": true,
    //     "members": [
    //       {
    //         "name": "Molecule Man",
    //         "age": 29,
    //         "secretIdentity": "Dan Jukes",
    //         "powers": [
    //           "Radiation resistance",
    //           "Turning tiny",
    //           "Radiation blast"
    //         ]
    //       },
    //       {
    //         "name": "Madame Uppercut",
    //         "age": 39,
    //         "secretIdentity": "Jane Wilson",
    //         "powers": [
    //           "Million tonne punch",
    //           "Damage resistance",
    //           "Superhuman reflexes"
    //         ]
    //       },
    //       {
    //         "name": "Eternal Flame",
    //         "age": 1000000,
    //         "secretIdentity": "Unknown",
    //         "powers": [
    //           "Immortality",
    //           "Heat Immunity",
    //           "Inferno",
    //           "Teleportation",
    //           "Interdimensional travel"
    //         ]
    //       }
    //     ]
    //   }
    return (
        <div id="resultDiv">

           
            <pre>
                {props.method}
                <h3> Headers </h3>
                {JSON.stringify(props.data.headers, null, 2)}
                <h5> Results </h5>
                {JSON.stringify(props.data.data, null, 2)}
                
            </pre>

        </div>
    );
}

export default Result;

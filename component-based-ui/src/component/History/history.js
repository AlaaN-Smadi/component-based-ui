import './history.scss'

function History(props) {
    

    const handleResult = (index) => {
        const result = props.history[index].result
        
        props.getOldResult(result);

        // getOldResult
    }

    return(
        <div className="history">
        <h1>History : </h1>
        <ul>
            {props.history.map((ele,idx)=>{
                return(
                    <span key={idx}>
                        {console.log(ele)}
                        <div>
                            <p>
                                <span>
                                    <b>
                                        Method
                                    </b>
                                    {ele.method}
                                </span>
                                <br/>
                                <span className="myLink">
                                    <b>URL</b>
                                    {ele.url}
                                </span>
                                
                                <button onClick={()=>handleResult(idx)}>Request</button>
                            </p>
                        </div>

                    </span>
                )
            })}
        </ul>
        </div>
    )
}

export default History;
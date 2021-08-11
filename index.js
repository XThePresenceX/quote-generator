const App = () => {

    const [quotes,setQuotes] = React.useState([]); 
    const [randomQuote, setRandomQuote] = React.useState([]);
    const [color, setColor] = React.useState("#27ae60");


    React.useEffect(() => {
        async function fetchData(){
            const response = await fetch('https://type.fit/api/quotes');
            const data = await response.json();

            setQuotes(data);
            let randIndex = Math.floor(Math.random()*data.length);
            setRandomQuote(data[randIndex]);
        }
        fetchData();
    }, [])

    const getNewQuote = () =>{

        const colors = [
            "#16a085",
            "#27ae60",
            "#2c3e50",
            "#f39c12",
            "#e74c3c",
            "#9b59b6",
            "#FB6964",
            "#342224",
            "#472E32",
            "#BDBB99",
            "#77B1A9",
            "#73A857"
        ]

        let randIndex = Math.floor(Math.random()*quotes.length);
        let randColorIndex = Math.floor(Math.random()*colors.length);
        setRandomQuote(quotes[randIndex]);
        setColor(colors[randColorIndex])
    }

    return (
        <div className=" h-100 d-flex justify-content-center align-items-center" style={{backgroundColor: color, minHeight: "100vh"}}>
            <div className="container ">
                <div className="jumbotron " id="quote-box">
                    <div className="container">
                        {randomQuote ? (
                            <>
                            <h6 className="display-4"><i class="fas fa-quote-left" id="text" style={{color: color}}></i>&#8194;{randomQuote.text}</h6>
                            <p className="lead text-center" id="author">-{randomQuote.author || "Unknown"}</p>
                            </>
                        ):(
                            <h2>Loading...</h2>
                        )}
                        <div className="row">
                            <div className="col-6">
                                <a href={"https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text="+encodeURIComponent('"'+randomQuote.text + '" ' + randomQuote.author )} target="_blank" id="tweet-quote"><i class="fab fa-3x fa-twitter-square" style={{color: color}}></i></a>
                                <a href="#"><i class="ml-3 fab fa-3x fa-tumblr-square" style={{color: color}}></i></a>
                            </div>
                            <div className="col-6">
                                <button onClick={getNewQuote} className="float-right btn btn-primary" id="new-quote" style={{backgroundColor: color}}>New Quote</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-center text-white"><small><a href="http://bhindi.myweb.cs.uwindsor.ca/" className="text-center text-white" target="_blank">by Jenil</a></small></div>
            </div>
        </div>
        );
}


ReactDOM.render(<App/>,document.getElementById('app'));
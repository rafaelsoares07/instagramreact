import  ReactDOM from 'react-dom';
import Topo from './Topo';
import Corpo from './Corpo';
import FundoMobile from './FundoMobile';


function App(){
    return(
        <div>
            <Topo />
            <Corpo />
            <FundoMobile />
        </div>
        
       
        
    )
}

ReactDOM.render(<App />, document.querySelector('.root'))
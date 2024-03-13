import Image from './assets/receipe1.jpg';
import './Home.css';
import App from './App';
import { useNavigate } from 'react-router-dom';


function Home() {

  const navigate = useNavigate();
  const trail =() =>{
       navigate('/App')
  }
  
  return (


    <div className='container'>

   <img className="cont-image" src={Image} />
   <div className='form'>

   <b className='text'> Want to Make Food?<br></br>
   You will get all of your favourite food receipe here.</b><br></br>
 <button className="button" onClick={trail}> Start </button>

   </div>
      
    </div>
  )
}

export default Home;
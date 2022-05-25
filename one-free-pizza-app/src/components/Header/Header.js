import './Header.scss';
import { FaFacebook } from 'react-icons/fa';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { FcGoogle, FcStart} from 'react-icons/fc';

function Header() {
    return(
        <header>
          <div className='title'>
          <img className='icon' src="images/icon.png" alt="pizza icon"/>
           One <em className='free'>Free</em> Pizza
          </div>
          <div className="socialIcon">
            <a className='icons' href="https://www.facebook.com/"><FaFacebook /></a>
            <a className= 'icons' href="https://www.youtube.com/"><FcStart /></a>
            <a className= 'icons' href="https://twitter.com/"><AiFillTwitterCircle /></a>
            <a className= 'icons' href="https://www.google.com/gmail/"><FcGoogle /></a>
            
            </div>
         
     </header>
    );
}

export default Header;
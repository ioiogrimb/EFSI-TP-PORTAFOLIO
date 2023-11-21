
import '../style.css'
import Contact from './Contact'
import {Socialicons} from "../components/SocialIcons"

export default function Footer() {
    return (
        <>
            <div className='footer'>
                <Socialicons />
                <Contact />
            </div>            
        </>
    );
}

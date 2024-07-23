import devpic from '../public/devchallenges.png';
import Image from 'next/image';

function Card()  {
    return(
         <div className="card">
            <Image src={devpic} alt="image" />
            <h2>Srinivas</h2>
            <p>I am a Programmer.</p>
         </div>

       
    );
}

export default Card

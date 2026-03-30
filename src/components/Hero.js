import hero from "../assets/hero.png";
import { AiOutlineTwitter, AiOutlineFacebook,AiOutlineLinkedin } from "react-icons/ai";

export default function Hero() {
  const config = {
    subtitle: 'Iam A Full Stack Developer',
    social: {
      twitter: 'https://twitter.com/suresh',
      facebook: 'https://facebook.com/suresh',
      linkedin: 'https://linkedin.com/in/suresh'
    }

  }


    return <section className='flex flex-col md:flex-row px-5 py-32 bg-primary justify-center'>
      <div  className='md:w-1/2 flex flex-col'>
        <h1 className='w-1/2 text-white text-6xl font-hero-font'>Hi, <br/> Im <span className='text-black'>Suresh</span>
        <p className='text-2xl'>{config.subtitle}</p>     
        </h1>
      <div className='flex py-10 '>
        <a href= {config.social.twitter} className='pr-5 hover:text-white'><AiOutlineTwitter size={40} /></a>
        <a href= {config.social.facebook} className='pr-5 hover:text-white'><AiOutlineFacebook size={40} /></a>
        <a href= {config.social.linkedin}  className='hover:text-white'><AiOutlineLinkedin size={40} /></a>
        </div>  
        </div>  
        <img  className='md:w-1/3' src={hero} alt="Hero" />
    </section>
}
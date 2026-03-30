import profile from '../assets/about.png'
export default function About () {
   const confign = {
      line1: 'Hi I am Suresh. I am a Full Stack Wep Developer. I Build Beautiful  WepSites With React.js And TailWind CSS',
      line2: 'I Am Proficient In Forntend Skills Like React.js,Redux,Redux Tool Kit, Axios, TailWind CSS, SaSS, Css3 and Many More',
      line3: 'In backend I Know Node.js,Express.Js,MongoDB and Mongooose'
   }
    return <section className='flex flex-col md:flex-row bg-secondary' id='about'>
        <div className='py-5 md:w-1/2'>
           <img src={profile} alt="" />
        </div>
        <div className='md:w-1/2 flex justify-center'>
           <div className='flex flex-col justify-center text-white'>
                <h1 className='text-4xl border-b-4 border-primary mb-5 w-[170px] font-bold'>About Me</h1>
                <p className='pd-5'>{confign.line1}</p>
                <p className='pd-5'>{confign.line2}</p>
                <p className='pd-5'> {confign.line3}</p>
          </div>
       </div> 
    </section>
}
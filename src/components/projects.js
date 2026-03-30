import wepsiteImg1 from '../assets/ecommerce-wepsites.jpg';
import wepsiteImg2 from '../assets/food-ecommerce.jpg';
import wepsiteImg3 from '../assets/wepsite-blog.jpg';
export default function Projects() {
    const config = {
        projects: [
            {
                image: wepsiteImg1,
                description: 'A Ecommerce Wepsite Build With MERN stack.',
                link: 'https//githup.com'
            },
            {
                image: wepsiteImg2,
                description: 'Food Ecommerce Wepsite Like Swiggy, Build With React.js',
                link: 'https//githup.com'
            },
            {
                image: wepsiteImg3,
                description: 'Basic Wepsite. Build With Next JS and MangoDB',
                link: 'https//githup.com'
            }
        ]
    }
    return <section id='projects' className="flex flex-col py-50 px-5 justify-center bg-primary text-white ">
        <div className="w-full">
            <div className="flex flex-col px-10 py-5">
                <h1 className="text-4xl  border-b-4 border-secondary mb-5 w-[140px] font-bold">Projects</h1>
                <p>These Are Some Of My Best Project.I Have Build these With React,Mern and Venilla CSS.Check Them Out.</p>
            </div>
        </div>
        <div className="w-full">
            <div className='flex  px-40 gap-5'>
                {config.projects.map((project) => (
                    <a href={project.link}>
                        <div className='relative'>
                            <img className='h-[200px] w-[500px]' src={project.image} />
                            <img src="image.png" alt="project image"></img>
                            <div className='project-desc' >
                                <p className='text-center py-5 '>{project.description}</p>
                                <div className='flex justify-center'>
                                    <a className='btn' target='blank' href={project.link}>View Project</a>
                                </div>
                            </div>
                        </div>

                    </a>

                ))}


            </div>
        </div>

    </section>
}
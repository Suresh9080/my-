export default function Contact() {

    const config = {
        email : 'Ssuresh50825@gmail.com',
        Phone: '9080783060'
    }
    return (
        <section id='Contact' className='flex flex-col bg-primary px-5 py-32 text-white'>
        <div className='flex flex-col items-center'>
           
                <h1 className='text-4xl border-b-4  border-secondary mb-5 w-[140px] font-bold'>Contact</h1>
                <p className='pd-5'>If You Want To Discuss More In Details, Please Contact</p>
                <p className='py-2'><span className='font-bold'>Email :</span>{config.email}</p>
                <p className='py-2'><span className='font-bold'>Phone :</span>{config.Phone}</p>
                
       </div> 
    </section>
    )
}
import image from '../assets/me.jpg'

const Home = () => {
  return (
    <div className=" w-auto h-auto">
      <div className="container mx-auto w-auto xl:px-20 px-3 xl:py-72 lg:py-36 py-20">
        <div className="lg:w-[79%] h-auto w-auto  lg:mx-auto xl:w-[78%] xl:mx-auto flex xl:flex-row lg:flex-row flex-col justify-center items-center">
          <div className="w-auto h-96 xl:w-90 xl:h-60 lg:w-72 lg:h-64 object-cover rounded-md">
            <img src={image} className='w-auto h-96 xl:w-90 xl:h-60 lg:w-72 lg:h-64 rounded-md object-cover' alt="" />
          </div>
          <div className="text-white xl:pl-10 lg:pl-10 pl-0 text-center xl:text-start lg:text-start pt-4 xl:pt-0 lg:pt-0">
            <p className=' font-secondary capitalize xl:font-medium xl:text-2xl lg:font-medium lg:text-2xl text-2xl font-bold pt-4 xl:pt-0 lg:pt-0'>Abiodun code 👋</p>
            <p className='text-5xl font-primary xl:text-[70px] lg:text-[60px] tracking-wider font-extrabold capitalize pt-4 xl:pt-3 lg:pt-3'>Olaroungbe jamiu</p>
            <p className='font-semibold text-xl font-secondary capitalize xl:text-xl lg:text-lg pt-4 xl:pt-3 lg:pt-3'>I'm a Software Engineer base somewhere on Earth 🌎.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home

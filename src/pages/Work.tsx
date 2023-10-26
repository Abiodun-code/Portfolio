import { Portfolio } from "../context/WorkData"
import { BsEyeFill } from 'react-icons/bs'

const Work = () => {
  return (
    <div className="w-auto h-auto">
      <div className="container mx-auto xl:max-w-[80%] lg:max-w-[85%] px-3 pt-20">
        <div className="block justify-center items-center py-5 text-white text-center">
          <h1 className='text-5xl font-primary xl:text-[40px] lg:text-[60px] tracking-wider font-extrabold capitalize'>some projects have worked on 💪🏽</h1>
          <div className="flex flex-wrap justify-center items-center gap-8 pt-8">
            {Portfolio.map((item, idx) => (
              <div key={idx} className=" relative items-center flex justify-center bg-glass w-80 h-96 group transition rounded-md">
                <img src={item.image} className="group-hover:scale-90 transition duration-300 text-white object-contain w-9/12 h-full" alt="" />
                <div className="absolute bg-white  w-80 h-96 rounded-md text-center bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300">
                  <a href={item.link} className='w-12 h-12 mx-auto my-36 bg-opacity-80 bg-black group-hover:flex  group-hover:justify-center group-hover:items-center text-lg hidden'><BsEyeFill /></a>
                </div>
              </div>
            ))}
          </div>
          <div className="pt-8">
            <a href="https://github.com/Abiodun-code" className="capitalize font-primary text-xl tracking-wider">View more</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Work

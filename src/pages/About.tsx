import { Code } from "../context/AboutData"

const About = () => {
  return (
    <div className="w-auto h-auto">
      <div className="container mx-auto xl:max-w-[80%] lg:max-w-[85%] w-auto bg-glass rounded-md px-3">
       <div className="py-5 px-3">
          <h1 className="text-green font-bold font-primary text-2xl">About Me ⚡</h1>
          <div className="xl:w-[90%] lg:w-[95%] ml-5 pt-6 xl:pt-12 text-white">
            <p className="xl:text-lg text-lg font-semibold font-secondary">🚀 Results-oriented software engineer with experience in designing and developing scalable applications.</p>
            <p className="xl:text-lg text-lg font-semibold font-secondary pt-6">🚀 Proving ability to design, develop, and test software applications. Committed to delivering high-quality code and innovative solutions.</p>
            <p className="xl:text-lg text-lg font-semibold font-secondary pt-6">📚 When I'm not crafting code, I'm indulging my inner physicist, diving into books and cosmic mysteries.</p>
          </div>
          <div className="gap-y-12 xl:w-[90%] lg:w-[95%] w-auto mx-auto flex justify-between items-center xl:flex-row lg:flex-row flex-col pt-16 xl:pt-20">
            {
              Code.map((item, idx)=>(
                <div key={idx} className="text-center text-white xl:w-[45%] lg:w-[46%] w-auto">
                  <p className="text-5xl  font-semibold font-secondary capitalize">{item.icon}</p>
                  <p className="text-xl font-semibold font-primary pt-6">{item.name}</p>
                  <p className="text-lg font-semibold font-secondary pt-6 text-center">{item.text}</p>
                </div>
              ))
            }
          </div>
          <div className="p-4 text-center mt-12 rounded-md bg-green bg-opacity-60 xl:w-[20%] lg:w-[30%] w-[50%] mx-auto">
            <a href="" className=" xl:text-xl font-semibold text-white font-secondary">View Resume</a>
          </div>
       </div>
      </div>
    </div>
  )
}

export default About

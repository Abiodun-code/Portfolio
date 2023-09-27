import { Social } from "../context/FootData"

const Footer = () => {
  return (
    <div className="w-auto h-auto">
      <div className="container mx-auto xl:max-w-[80%] lg:max-w-[85%] px-3">
        <div className="block justify-between items-center">
          <div className="block">
            <h1 className="text-white font-primary font-medium text-xl tracking-wider">Email</h1>
            <a href="mailto:olaabiodun157@gmail.com" className="text-white font-seconday text-lg tracking-wider">olaabiodun157@gmail.com</a>
          </div>
          <div className="flex items-center gap-x-2 justify-between pt-10">
            <h1 className="text-white font-primary font-medium xl:text-xl lg:text-xl text-lg tracking-wider">@Abiodun Code 🌎</h1>
            <div className="flex items-center gap-x-8">
              {Social.map((item, idx)=>(
                <a href={item.link} key={idx} className="text-white lg:text-2xl text-xl xl:text-2xl">
                  <item.icon/>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer

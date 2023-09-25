import { Framework } from "../context/TechData"

const Technology = () => {
  return (
    <div className="w-auto h-auto">
      <div className="container mx-auto xl:max-w-[80%] lg:max-w-[85%] px-3 pt-20">
        <div className="block justify-center items-center py-5 text-white text-center">
          <h1 className='text-5xl font-primary xl:text-[40px] lg:text-[60px] tracking-wider font-extrabold capitalize'>Technologies i use</h1>
          <div className="flex flex-wrap justify-center items-center gap-8 pt-8">
            {Framework.map((item, idx)=>(
              <div key={idx} className="items-center flex justify-center w-14 h-14 object-contain">
                <img src={item.image} className="w-14 h-14 object-contain" alt="" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Technology

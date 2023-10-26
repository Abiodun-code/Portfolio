
const NavBar = () => {
  return (
    <div className="w-auto h-auto">
      <div className="container mx-auto xl:max-w-[80%] lg:max-w-[85%] px-3">
        <div className="flex justify-between items-center py-5">
          <div className="flex items-center gap-x-2">
            <div className="w-4 h-4 bg-yellow-500 shadow-xl rounded-full"></div>
            <h1 className="text-white font-primary font-medium text-xl tracking-wider">Abiodun code.</h1>
          </div>
          <div className="text-2xl ">👋</div>
        </div>
      </div>
    </div>
  )
}

export default NavBar

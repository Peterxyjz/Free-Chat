import MessageContrainer from "../../components/Message/MessageContrainer"
import Sidebar from "../../components/Sidebar/Sidebar"

const Home = () => {
  return (
    <div className="flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 ">
      <Sidebar />
      <MessageContrainer />
    </div>
  )
}

export default Home
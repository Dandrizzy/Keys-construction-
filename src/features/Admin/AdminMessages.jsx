import H1 from "../../ui/H1";
import Spinner from "../../ui/Spinner";
import { useMsg } from "./useMsg";

const AdminMessages = () => {
 const { data: messages = [], isLoading } = useMsg();
 if (isLoading) return <Spinner />;
 if (messages.length === 0) return <H1>No Messages</H1>;

 return (
  <>

   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4  ">
    {messages.map(msg => {
     return <div className="grid" key={msg.id}>
      <div className=" border-black p-4 border drop-shadow-lg shadow-lg ">
       <div className=" text-lg font-bold">{msg.message}</div>
       <div className="uppercase"> {msg.name}</div>
       <div className="">{msg.phoneNumber}</div>
       <div className="">{msg.email}</div>
      </div>
     </div>;
    })}
   </div>

  </>
 );
};

export default AdminMessages;
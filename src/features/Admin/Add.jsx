import Modal from "../../ui/Modal";

const Add = () => {
 return (
  <ul>
   <li>
    <Modal.Open opens='create-project'>
     Create Project
    </Modal.Open>
   </li>
   <li>Create Service</li>
   <li>Answer Question</li>
  </ul>
 );
};

export default Add;
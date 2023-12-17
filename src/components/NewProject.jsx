import React, { useRef } from "react";
import Input from "./Input";
import Modal from "./Modal";

const NewProject = ({ onAdd, onCancel }) => {

 const modal = useRef();

  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  function handleSave() {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = dueDate.current.value;

    //validate...
    if (
      enteredTitle.trim() === "" ||
      enteredDescription.trim() === "" ||
      enteredDueDate.trim() === ""
    ) {
       // show error
       modal.current.open();
       return
    }

    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    });
  }

  return (
    <>
        <Modal ref={modal} buttonCaptions="Okay">
            <h2 className="text-xl font-bold text-stone-800 my-4">Invalid Input</h2>
            <p className="text-stone-600 mb-4">Oops ... looks like you forgot to enter a value.</p>
            <p className="text-stone-600 mb-4">Please make sure you provide a valid value for every input field.</p>
        </Modal>
        <div className="w-[calc(100%-200px)] md:w-[calc(100%-300px)] mt-5 md:mt-16 pe-3 md:pe-10">
        <menu className="flex items-center justify-start gap-4 my-4">
            <li>
            <button
                className="text-stone-800 hover:text-stone-950"
                onClick={onCancel}
            >
                Cancel
            </button>
            </li>
            <li>
            <button
                className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
                onClick={handleSave}
            >
                Save
            </button>
            </li>
        </menu>
        <div>
            <Input type="text" ref={title} label="Title" />
            <Input ref={description} label="Description" textarea={true} />
            <Input type="date" ref={dueDate} label="Due Date" />
        </div>
        </div>
    </>
  );
};

export default NewProject;

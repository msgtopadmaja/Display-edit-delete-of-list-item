import React, { useContext, useState } from "react";
import ListItem from "./ListItem";
import ToggleStatus from "./ToggleStatus";
import Form from "./Form";
import AddUser from "./AddUser";
import UserContext from "./Store";

const User = () => {
  const [toggleStatus, setToggleStatus] = useState(false);
  const [displayForm, setDisplayForm] = useState(false);
  const [mode, setMode] = useState("create");
  const [currentItem, setCurrentItem] = useState("");

  const [data, setData] = useContext(UserContext);

  const handleToggleChange = (status) => {
    // console.log(status,'current status');
    setToggleStatus(status);
  };
  // console.log(toggleStatus, "togglestatus"); // inital false -> on -> true (togglestatus)

  const handleAddNewUser = () => {
    setDisplayForm(true);
    setMode("create");
  };

  const handleEdit = (id) => {
    const findData = data.filter((item) => {
      console.log(item);
      return item.id === id;
    });

    console.log("finddata", findData);
    setDisplayForm(true);
    setCurrentItem(...findData);
    setMode("edit");
    console.log(id);
  };

  return (
    <>
      {displayForm && (
        <Form
          mode={mode}
          currentItem={currentItem}
          setDisplayForm={setDisplayForm}
        />
      )}
      <div className="user-container">
        <AddUser onClick={handleAddNewUser} />
        <ToggleStatus
          toggleStatus={toggleStatus}
          onChange={handleToggleChange}
        />
      </div>
      <div className="item-list">
        {toggleStatus ? (
          <div>
            <ListItem onEdit={handleEdit} />
          </div>
        ) : (
          <div className="toggle">Toggle is off</div>
        )}
      </div>
    </>
  );
};

export default User;

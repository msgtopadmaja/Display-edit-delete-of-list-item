import React, { useContext } from "react";
import FormButtons from "./FormButtons";
import UserContext from "./Store";

// const handleDelete = (id) => {
//   const deleteItem = data.filter((item) => {
//     return item.id !== id;
//   });
//   setData(deleteItem);
// };

const ListItem = ({ onEdit }) => {
  const [data, setData] = useContext(UserContext);
  console.log(data, "listitem");

  const handleDelete = (id) => {
    if (confirm("Do you want to delete the data")) {
      const deleteItem = data.filter((item) => {
        return item.id !== id;
      });
      console.log(deleteItem, "delete item"); // return the data expect the point to the delete item
      setData(deleteItem);
    }
  };

  return (
    <div>
      {data.map((user) => (
        <div className="list-items" key={user.id}>
          <p>{user.name}</p>
          <p>{user.age}</p>
          <FormButtons
            onEdit={() => onEdit(user.id)}
            onDelete={() => handleDelete(user.id)}
          />
        </div>
      ))}
    </div>
  );
};

export default ListItem;

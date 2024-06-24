const FormButtons = ({onEdit, onDelete}) => {
  return (
    <div className="form-buttons">
      <button onClick={onEdit}>Edit</button>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
};

export default FormButtons;
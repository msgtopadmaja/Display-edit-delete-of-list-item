const ToggleStatus = ({ toggleStatus, onChange }) => {
  const handleToggle = () => {
    // console.log(toggleStatus, 'inital status');
    const newStatus = !toggleStatus;
    onChange(newStatus);
  };

  return (
    <div>
      <button className="toggle-button" onClick={handleToggle}>
        Toggle Status: {toggleStatus ? "ON" : "OFF"}
      </button>
    </div>
  );
};

export default ToggleStatus;

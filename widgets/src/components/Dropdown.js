import React, { useEffect, useRef, useState } from "react";

const Dropdown = ({ label, options, selected, onSelectedChange }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const onBodyClick = (event) => {
      if (ref.current && ref.current.contains(event.target)) {
        return;
      }
      setOpen(false);
    };

    document.body.addEventListener("click", onBodyClick);

    // this is called when the component is removed from the DOM
    // so we will clean up the eventlistener to avoid null exception
    return () => {
      document.body.removeEventListener("click", onBodyClick);
    };
  }, []);

  const renderedOptions = options
    .filter((option) => option.value !== selected.value)
    .map((option) => {
      return (
        <div
          key={option.value}
          className='item'
          onClick={() => onSelectedChange(option)}
        >
          {option.label}
        </div>
      );
    });

  return (
    <React.Fragment>
      <div ref={ref} className='ui form'>
        <div className='field'>
          <label className='label'>{label}</label>
          <div
            onClick={() => setOpen(!open)}
            className={`ui selection dropdown ${open ? "visible active" : ""}`}
          >
            <i className='dropdown icon'></i>
            <div className='text'>{selected.label}</div>
            <div className={`menu ${open ? "visible transition" : ""}`}>
              {renderedOptions}
            </div>
          </div>
        </div>
      </div>
      {/* <div style={{ color: selected.value }}>This text is {selected.value}</div> */}
    </React.Fragment>
  );
};

export default Dropdown;

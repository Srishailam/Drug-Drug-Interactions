import React, { useState } from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import './MultiSelect.css';

const animatedComponents = makeAnimated();

function MultiSelect(props) {

  const { id, options } = props;
  const [selectedOptions, setSelectedOptions] = useState([])

  const handleOptionChange = userValue => {
    if (userValue) {
      setSelectedOptions(prev => [...userValue]);
      props.handleAllOptionsChange(userValue, id);
    } else {
      setSelectedOptions([]);
      props.handleAllOptionsChange([], id);
    }

  };
  const disableDefaultStyle = {
    // control: base => ({
    //   ...base,
    //   border: 0,
    //   boxShadow: 0,
    //   "&:hover": {
    //     border: 0
    //   }
    // })
  };
  return (
    <>
    <Select
      closeMenuOnSelect={false}
      components={animatedComponents}
      isMulti
      options={options}
      className="MultiSelect_DrugNames"
      styles={disableDefaultStyle}
      onChange={handleOptionChange}
      value={selectedOptions}
      placeholder="Select atleast two drugs..."
    />
    </>
  )
}

export default MultiSelect

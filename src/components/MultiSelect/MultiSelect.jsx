import React, { useState } from 'react';
import CreatableSelect from 'react-select/creatable';
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
  return (
    <>
    <CreatableSelect
      closeMenuOnSelect={false}
      components={animatedComponents}
      isMulti
      options={options}
      className="MultiSelect_DrugNames"
      onChange={handleOptionChange}
      value={selectedOptions}
      placeholder="Select atleast two drugs..."
    />
    </>
  )
}

export default MultiSelect

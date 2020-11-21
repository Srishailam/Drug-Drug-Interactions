import React, { useState } from 'react';
import CreatableSelect from 'react-select/creatable';
import makeAnimated from 'react-select/animated';
import './MultiSelect.css';

const animatedComponents = makeAnimated();

function MultiSelect(props) {

  const { id, options } = props;
  const [selectedOptions, setSelectedOptions] = useState([])

  const handleOptionChange = userValue => {
    const maxLimitOptions= 20;
    if (userValue) {
      let maxOptions = userValue.length > 20 ? userValue.slice(0,maxLimitOptions) : userValue;
      setSelectedOptions(prev => [...maxOptions]);
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

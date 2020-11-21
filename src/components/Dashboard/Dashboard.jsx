import React, { useState } from 'react'
import MultiSelect from '../MultiSelect/MultiSelect';
import { PlusIcon, MinusIcon } from '@modulz/radix-icons'
import { v4 as uuidv4 } from 'uuid';
import Button from '../Button/Button';
import DrugInteractionItemList from './../DrugInteractionItemList/DrugInteractionItemList';
import "./Dashboard.css"

import Data from './../../data/interactions.json';

function Dashboard() {

  let default_obj = {
    severity: 'no',
    interaction: 'interaction'
  }
  const [inputFields, setInputFields] = useState([{
    id: uuidv4(), drugNames: [], result: {}
  }]);
  const [isSubmitClicked, setIsSubmitClicked] = useState(false);

  const handleAddFields = () => {
    setInputFields([...inputFields, { id: uuidv4(), drugNames: '' }])
  }

  const handleRemoveFields = (id) => {
    const values = [...inputFields];
    values.splice(id, 1);
    setInputFields(values);
  }

  const handleAllOptionsChange = (selectedOptions, id) => {

    const newValues = inputFields.map(item => {
      if (item.id === id) {
        item.drugNames = selectedOptions.map(option => option.value);
        item.result = {};
      }
      return item;
    });

    setInputFields(newValues);

  }

  const handleSubmit = (e) => {
    e.preventDefault();
    let allCombos = []
    let copyInputFields = [...inputFields];
    copyInputFields.forEach(item => {
      const eachInputFieldSelectedDrugs = item.drugNames;
      const len = eachInputFieldSelectedDrugs.length
      for (let i = 0; i < len; i++) {
        for (let j = i + 1; j < len; j++) {
          allCombos.push([eachInputFieldSelectedDrugs[i], eachInputFieldSelectedDrugs[j]])
        }
      }
      let isDone = false;
      allCombos.some(eachCombo => {
        let drugOne = eachCombo[0];
        let drugTwo = eachCombo[1];
        for (let eachItem of Data) {
          let eachItemDrugs = eachItem.drugs;
          let isExists = eachItemDrugs.includes(drugOne) && eachItemDrugs.includes(drugTwo);
          if (isExists) {
            if (default_obj.severity === "major") {
              default_obj.severity = eachItem.severity;
              default_obj.interaction = eachItem.description;
              isDone = true;
              break;
            } else if (default_obj.severity === "moderate") {
              default_obj.severity = eachItem.severity;
              default_obj.interaction = eachItem.description;
            } else {
              default_obj.severity = eachItem.severity;
              default_obj.interaction = eachItem.description;
            }
            item.result = { ...default_obj };
          } else {
            item.result = { ...default_obj };
          }
        }
        return isDone;
      })
    });
    setInputFields(copyInputFields);
    setIsSubmitClicked(true);
  }

  const getOptions = arr => {
    return arr.map(eachDrugName => ({
      value: eachDrugName,
      label: eachDrugName[0].toUpperCase() + eachDrugName.slice(1)
    }))
  }

  const getDrugNames = () => {
    return Data.reduce((acc, cur) => {
      const drugNames = cur.drugs
      return acc.concat(drugNames);
    }, []);
  };

  const drugNamesOptions = getOptions([...new Set(getDrugNames())]);


  return (
    <div className="Dashboard" >
      <h1>Dashboard</h1>
      <form onSubmit={handleSubmit}>
        {
          inputFields.map((item, idx, self) => (
            <div className="Container_Select_Buttons" key={item.id}>
              <MultiSelect
                handleAllOptionsChange={handleAllOptionsChange}
                id={item.id}
                options={drugNamesOptions}
              />
              { self.length !== 1 && <Button text={<MinusIcon />} handleClick={() => handleRemoveFields(idx)} />}
              {self.length !== 10000 && <Button text={<PlusIcon />} handleClick={handleAddFields} />}
            </div>))
        }
        <Button
          text="Submit"
          handleClick={handleSubmit}
        />
      </form>
      {isSubmitClicked && inputFields.some( item => item.drugNames.length===0) ? 'Please select atleast Two drug names to see drug-drug interactions.' : ''}
      <DrugInteractionItemList data={inputFields} />
    </div>
  )
}

export default Dashboard


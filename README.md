# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

After `npm start`, browser starts the app.

I created few components to divide the funcitonality such as Creatable Multi Select , Button List and Item components.
I kept given json file under data folder.

Kept the Creatable Select separately to handle its input state, so I can get individual dropdown's data.

The Main logic of the app is in Dashboard.jsx file. I am showing MinusIcon if user selects two or more dropdowns, whereas PlusIcon will disappear if use adds 10000 or more dropdowns. This is one of the constraints in the given problem. Also, EachDropdown will accept max 20 options only.

User must select atleast two drugs to see the interactions among them.

Once User selects atleast two drugs in one dropdown, I created all combinations of them like [DrugA, DrugB], with that combo, I searched in interaction.json file. If I found an interaction with Major, I am am stoping the search and return it as a result object for that inputfield.

If I found not major at some point, I am still searching on interaction file entirely. while doing search, I am keeping track of the severity.

Once User clicks Submit, I am showing interactions while looping throw the inputfield's result object.

import React, {useState} from "react";

const DynamicInputs = () => {

    const [inputFields, setInputFields] = useState([{name: '', age: '', city: ''}])
  const handleSubmit = () => {
    alert("clicked");
  };
  const nextRow = () => {
    const obj = {name: '', age: '', city: ''};
    const nextRow = [...inputFields, obj];
    setInputFields(nextRow);

  };
  const deletetRow = (e, index) => {
    console.log(index,'delete---');
    
    const nextRow = [...inputFields];
    console.log(nextRow,'before---');
    nextRow.splice(index, 1);
    console.log(nextRow,'after---');
    setInputFields(nextRow);

  };

  const handleInputChange = (e, index) => {
    console.log(index,'eeeeeeeeeeeeee', e.target);

    const nextRow = [...inputFields];
    nextRow[index][e.target.name] = e.target.value;
    setInputFields(nextRow);
  }
  const editRow = () => {};

  return (
    <>
      <div className="container">
          <div className="container">
            {inputFields.map((input, index)=> {
                return (
                    <div className="row" key={index}>
                    <div className="col col-md-3">
                      <input type="text" placeholder="Name" name="name" value={input.name} onChange={(e)=> handleInputChange(e, index)} />
                    </div>
                    <div className="col col-md-3">
                      <input type="text" placeholder="Age"name="age" value={input.age} onChange={(e)=> handleInputChange(e, index)} />
                    </div>
                    <div className="col col-md-3">
                      <input type="text" placeholder="City" name="city" value={input.city} onChange={(e)=> handleInputChange(e, index)} />
                    </div>
                    <div className="col col-md-3">
                    {index == inputFields.length -1 &&
                      <button onClick={() => nextRow()}>+</button>
                    }
                      {index !== 0 &&
                      <button onClick={(e) => deletetRow(e, index)}>-</button>
            }
                      <button onClick={() => editRow()}>Edit</button>
                    </div>
                  </div>
                )
            })}
            <button type="submit">submit</button>
          </div>
      </div>
    </>
  );
};

export default DynamicInputs;

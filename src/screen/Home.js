import React, { useState, useEffect, useRef } from "react";
import Text from "../components/Text";
import Button from "../components/Button";
import Input from "../components/Input";

const Home = () => {
  const title = "My First Page";
  const cities = [
    { name: "jaipur", code: "jp" },
    { name: "lucknow", code: "lko" },
    { name: "pune", code: "pnq" },
    { name: "kanpur", code: "cnb" },
  ];

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [hideDetails, setHideDetails] = useState(false);
  const [showErrors, setShowErrors] = useState(false);
  const [coffeeData, setCoffeeData] = useState("");
  const [users, setUsers] = useState({
    city: "",
    state: "",
    pin: "",
  });

  const inputRef = useRef(null);

  /**
   * Fetch Data from sample API
   * Using fetch method for API call
   * using async and await for API
   */
  const coffeeAPI = async () => {
    const url = "https://api.sampleapis.com/coffee/hot";
    const results = await fetch(url);
    const parse = await results.json();
    setCoffeeData(parse);
  };

  // Calling API function in use Effect

  useEffect(() => {
    coffeeAPI();
  }, []);

  useEffect(() => {
    console.log("input ref----------", inputRef.current);
    inputRef.current.focus();
  }, []);

  useEffect(() => {
    coffeeAPI();
  }, []);

  const handleClick = () => {
    alert("button clicked");
  };

  const handleInputChange = (event) => {
    setName(event.target.value);
  };
  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handleHideDetails = () => {
    setHideDetails(true);
  };

  const handleuserChange = (event, key) => {
    setUsers((state) => ({
      ...state,
      [key]: event.target.value,
    }));
  };

  const handleSubmit = () => {
    
    if(!name) {
      setShowErrors(true)
    }
    localStorage.setItem("users", JSON.stringify(users));
  };

  const lastButtonClick = () => {
    alert("clicked");
  };

  return (
    <>
      <div className="container">
        <div class="row">
          <div class="col col-md-6">
            <Input
              vlaue={name}
              placeholder={"Enter name"}
              handleInputChange={handleInputChange}
            />
            {showErrors && (
              <p style={{ color: "red", fontSize: "12px" }}> Please enter first name </p>
            )}
            <Input
              vlaue={phone}
              placeholder={"Enter phone"}
              handleInputChange={handlePhoneChange}
            />
            <Input
              vlaue={email}
              placeholder={"Enter email"}
              handleInputChange={handleEmailChange}
            />
            <Input
              vlaue={password}
              placeholder={"Enter password"}
              handleInputChange={handlePasswordChange}
            />
            <Input
              vlaue={users.city}
              placeholder={"Enter city"}
              handleInputChange={(e) => handleuserChange(e, "city")}
            />
            <Input
              vlaue={users.state}
              placeholder={"Enter state"}
              handleInputChange={(e) => handleuserChange(e, "state")}
            />
            <Input
              vlaue={users.pin}
              placeholder={"Enter pin"}
              handleInputChange={(e) => handleuserChange(e, "pin")}
            />
             {/* Check for hide the details with useState boolean (true/false)    */}
             {!hideDetails && (
              <Text
                title={`My Details- Name ${name}, Phone${phone}, email${email}, password${password} , city ${users.city} state ${users.state} pin ${users.pin}`}
                style={{ color: "pink", fontSize: "20px" }}
              />
            )}
          </div>
          <div class="col col-md-6">
            <input
              class="form-control"
              ref={inputRef}
              type="text"
              placeholder="Enter password"
              aria-label="default input example"
            />

           
          </div>
        </div>
      </div>
    <div className="row">
        <div className="col col-md-6">
        <Button
        title={"hide details"}
        className={"btn btn-success"}
        handleButtonClick={handleHideDetails}
      />
      <Button
        title={"submit"}
        className={"btn btn-warning"}
        handleButtonClick={handleSubmit}
      />
      <button type="button" className="btn btn-info" onClick={lastButtonClick}>
        {title}
      </button>
        </div>
    </div>
    
    </>
  );
};

export default Home;

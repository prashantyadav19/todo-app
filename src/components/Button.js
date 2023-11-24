import React from 'react';

const Button = ({title, style, handleButtonClick, className}) => {

return (
    <>
      <button type="button" className={className} style={style} onClick={handleButtonClick} >{title}</button>
    </>

)    

}

export default Button;
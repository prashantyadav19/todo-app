import React from 'react';
import { useNavigate } from "react-router-dom";


const Header = () => {
    const navigate = useNavigate();
    const goToPage = (e, name) => {
        navigate(name);
    }

return (
    <>
     <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" onClick={(e)=> goToPage(e, '/')}>Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" onClick={(e)=> goToPage(e, '/contactUs')}>ContactUs</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" onClick={(e)=> goToPage(e, '/signIn')}>SignIn</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" onClick={(e)=> goToPage(e, '/dynamicInputs')}>Dynamic Inputs</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>

)    

}

export default Header;
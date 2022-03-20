<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.8.0/css/bulma.min.css">


  <nav class="navbar" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="https://bulma.io">
        <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" alt="logo">
      </a>
  
      <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" href="@">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
  
    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-start">
        <a class="navbar-item" href="/">
          Home
        </a>
  
        <a class="navbar-item" href="/about">
            About
        </a>
  
        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link" href="@">
            More
          </a>
  
          <div class="navbar-dropdown">
            <a class="navbar-item" href="/settings">
                Settings
            </a>
           
          </div>
        </div>
      </div>
  
      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <a class="button is-primary" href="/signup">
              <strong>Sign up</strong>
            </a>
            <a class="button is-light" href="/login">
              Log in
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
<div class="container">
  <slot />
</div>
<template>
    <nav class="navbar fixed-bottom shadow bg-white mx-auto">
      <div class="container-fluid">
        <div class="menu d-flex justify-content-evenly">
          <!-- menu -->
          <nuxt-link
            to="/"
            exact
            active-class="linkActive"
            class="text-decoration-none"
          >
            <div class="d-flex flex-column text-center">
              <div
                class="userprofile d-flex align-items-center justify-content-center mx-auto"
              >
                <i class="bi bi-house-door-fill h2 fw-bold text-secondary"></i>
              </div>
              <div>
                <p class="fw-semibold text-secondary karla">Home</p>
              </div>
            </div>
          </nuxt-link>
          <!-- menu -->
          <nuxt-link
            to="/RiwayatAbsensi"
            active-class="linkActive"
            class="text-decoration-none"
          >
            <div class="d-flex flex-column text-center">
              <div
                class="userprofile d-flex align-items-center justify-content-center mx-auto"
              >
                <i class="bi bi-hourglass-split h2 fw-bold text-secondary"></i>
              </div>
              <div>
                <p class="fw-semibold text-secondary karla">History</p>
              </div>
            </div>
          </nuxt-link>
          <!-- menu -->
          <nuxt-link
            to="/Menu"
            active-class="linkActive"
            class="text-decoration-none"
          >
            <div class="d-flex flex-column text-center">
              <div
                class="userprofile d-flex align-items-center justify-content-center mx-auto"
              >
                <i class="bi bi-list h2 fw-bold text-secondary"></i>
              </div>
              <div>
                <p class="fw-semibold text-secondary karla">Menu</p>
              </div>
            </div>
          </nuxt-link>
        </div>
      </div>
    </nav>
  </template>
  
  <script>
  export default {};
  </script>
  
  <style scoped>
  .linkActive i {
    color: #e52d51 !important;
  }
  .linkActive p {
    color: #e52d51 !important;
  }
  .navbar {
    border-radius: 25px;
    bottom: 10px;
    width: 40%;
  }
  .menu {
    width: 100%;
  }
  .userprofile {
    width: 48px;
    height: 48px;
    border-radius: 30px;
    padding-top: 5px;
  }
  p {
    margin-bottom: 0 !important;
    margin-top: -3px;
    font-size: 14px;
  }
  
  @media screen and (max-width: 576px) {
    .navbar {
      bottom: 0 !important;
      width: 100% !important;
      border-bottom-left-radius: 0 !important;
      border-bottom-right-radius: 0 !important;
    }
  }
  @media screen and (max-width: 991px) {
    .navbar {
      width: 70%;
    }
  }
  </style>
<template>
    <section id="menu">
      <div class="media mx-auto">
        <div class="container pb-5">
          <!-- Judul -->
          <div class="d-flex justify-content-between">
            <nuxt-link to="/">
              <i class="bi bi-chevron-left h5 fw-bolder text-secondary"></i>
            </nuxt-link>
            <h4 class="float-end">Menu</h4>
            <img class="fake-image" src="~/assets/img/icon/Left.png" alt="" />
          </div>
  
          <!-- menu -->
          <div class="p-4 rounded-4 shadow my-4 Animation-1-card">
            <!-- list menu -->
            <nuxt-link to="/Profile">

            <div class="d-flex justify-content-between mb-4">
              <div class="d-flex">
                <div
                  class="historylist d-flex align-items-center justify-content-center me-3"
                >
                  <i class="bi bi-person mt-1 text-white h3"></i>
                </div>
                <div class="d-flex flex-column justify-content-center text-black">
                  <h5>Profil</h5>
                </div>
              </div>
              <div class="d-flex align-items-center">
                  <i class="bi bi-chevron-right deva-color h5"></i>
              </div>
            </div>
          </nuxt-link>

            <!-- list menu -->
            <nuxt-link to="/Faq" >

            <div class="d-flex justify-content-between mb-4">
              <div class="d-flex">
                <div
                  class="historylist d-flex align-items-center justify-content-center me-3"
                >
                  <i class="bi bi-question-circle mt-1 text-white h4"></i>
                </div>
                <div class="d-flex flex-column justify-content-center text-black ">
                  <h5>FAQ</h5>
                </div>
              </div>
              <div class="d-flex align-items-center">
                  <i class="bi bi-chevron-right deva-color h5"></i>
              </div>
            </div>
          </nuxt-link>

            <!-- list menu -->
            <a @click="logout">
            <div class="d-flex justify-content-between">
              <div class="d-flex">
                <div
                  class="historylist d-flex align-items-center justify-content-center me-3"
                >
                  <i class="bi bi-box-arrow-left mt-1 text-white h4"></i>
                </div>
                <div class="d-flex flex-column justify-content-center">
                  <h5>Logout</h5>
                </div>
              </div>
              <div class="d-flex align-items-center">
                  <i class="bi bi-chevron-right deva-color h5"></i>
              </div>
            </div>
          </a>
          </div>
          <!-- menu -->
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    layout: "utama",
    methods: {
      logout() {
        localStorage.removeItem("card");
        this.$router.push("/");
      },
    },
  };
  </script>
  
  <style scoped>
  /* all */
  #menu {
    padding-top: 20px;
  }
  .fake-image {
    opacity: 0;
  }
  
  /* menu */
  .historylist {
    width: 40px;
    height: 40px;
    background-color: #e52d52;
    border-radius: 30px;
    padding-top: 5px;
  }
  h5 {
    margin-bottom: 0 !important;
    font-size: 16px;
  }
  
  .Animation-1-card {
    animation: fadeInUp; /* referring directly to the animation's @keyframe declaration */
    animation-duration: 1s; /* don't forget to set a duration! */
  }

  
  .btn-animation {
    transition: 0.3s;
  }
  .btn-animation:hover {
    transform: translate(10px, 0px);
  }
  
  .media {
    width: 40%;
  }
  
  @media screen and (max-width: 576px) {
    .media {
      width: 100% !important;
    }
  }
  /* tablet */
  @media screen and (max-width: 991px) {
    .media {
      width: 70%;
    }
  }
  </style>
  
<template>
    <section id="">
      <div class="loginPage">
        <div class="container d-flex justify-content-center align-items-center py-5" style="height: 100vh;">
          <div class="card border-0 shadow rounded-3 centered animate_animated animate_backInDown">
            <div class="row">
              <div class="col-lg-6 col-md-6 col-12 d-none d-lg-block d-md-block d-lg-block">
                <div class="background-img rounded-3 p-lg-5 p-md-5 text-white d-lg-flex align-items-lg-center d-md-flex align-items-md-center shadow">
                <div class="d-none d-lg-block text-center ">
                    <img src="~/assets/img/Okaasan_notext.png" alt="logo" class="w-25">
                    <h1 class="fs-3 fw-bold py-3 animate_animated animate_fadeInDown">Absensi Okaasan Laundry</h1>
                    <p class="small text-center animate_animated animate_fadeInDown">Portal ini membantu mencatat kehadiran Anda.</p>
                </div>
                </div>
              </div>
              <div class="col-lg-6 col-md-6 col-12">
                <div class="p-5  ">
                  <form >
                    <h1 class="display-6 deva-color fw-bold animate_animated animate_fadeInDown">Login</h1>
                    <p class="small text-secondary animate_animated animate_fadeInDown">Enter your account details</p>
                    <div class="mb-3 py-2">
                      <input
                        type="text"
                        class="form-control icon-text border-0 border-bottom border-danger opacity-50  rounded-0 Poppins"
                        name="username"
                        id="username"
                        aria-describedby="helpId"
                        placeholder="Username"
                      />
  
                    </div>
                    <div class="mb-3 py-2">
                      <input
                        type="password"
                        class="form-control border-0 border-bottom border-danger opacity-50 rounded-0 Poppins"
                        name="password"
                        id="password"
                        placeholder="Password"
                      />
                    </div>
                    <nuxt-link to="/#" class="py-3 Poppins "><span class="deva-color">Forgot Password</span></nuxt-link>
                    <button type="submit" class="btn btn-submit-color w-100 my-3 border-0 shadow text-white Poppins">Login</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  import 'animate.css';
  
  
  export default {
    name: 'IndexPage'
  }
  </script>
  
  <style scoped>
  

  </style>
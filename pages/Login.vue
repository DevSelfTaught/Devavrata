<template>
    <section id="">
      <div class="loginPage">
        <div class="container d-flex justify-content-center align-items-center py-5" style="height: 100vh;">
          <div class="card border-0 shadow rounded-3 centered animate_animated animate_backInDown">
            <div class="row">
              <LoginBanner />
              <LoginForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  import 'animate.css';
  
  
  export default {
    layout: "login",

  }
  </script>
  
  <style scoped>
  

  </style>
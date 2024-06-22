<template>
    <div class="d-flex justify-content-between ">
      <div
        class="userprofile d-flex align-items-center justify-content-center me-3 Animation-1-pf"
      >
      <img src="~/assets/img/Deva_aja.png" width="48px" height="48px">
      <div>
        <h6 class="text-secondary Animation-1-wc montserrat">Devavrata Sinergi Indonesia </h6>
        <h5 class="fw-semibold Animation-1-nm karla">
          Okaasan Laundry
        </h5>
      </div>
    </div>

      <!-- <div class="">
        <Sidebar/>
      </div> -->
    </div>
  </template>

  <script>
  export default {};
  </script>

  <style scoped>
  h6 {
    font-size: 14px;
  }
  h5 {
    font-size: 18px;
  }
  .Animation-1-pf {
    animation: fadeInLeft; /* referring directly to the animation's @keyframe declaration */
    animation-duration: 1.5s; /* don't forget to set a duration! */
  }
  .Animation-1-wc {
    animation: fadeInLeft; /* referring directly to the animation's @keyframe declaration */
    animation-duration: 1.0s; /* don't forget to set a duration! */
  }
  .Animation-1-nm {
    animation: fadeInLeft; /* referring directly to the animation's @keyframe declaration */
    animation-duration: 1.0s; /* don't forget to set a duration! */
  }
  </style>

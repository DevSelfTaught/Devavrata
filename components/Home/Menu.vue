<template>
    <div class="menu d-flex justify-content-evenly mt-4">
      <!-- menu -->
      <a href="#" class="text-decoration-none" data-bs-toggle="modal" data-bs-target="#ModalMasuk">
        <div class="d-flex flex-column text-center bg-primaryr animate__animated Animation-1-icon">
          <div
            class="userprofile d-flex align-items-center justify-content-center mb-2 mx-auto"
          >
            <i class="bi bi-box-arrow-in-right h2 pt-1 text-white fw-bold"></i>
          </div>
          <div>
            <p class="fw-semibold pt-sans">Absen Masuk</p>
          </div>
        </div>
      </a>
      <!-- menu -->
        <a href="#" class="text-decoration-none" data-bs-toggle="modal" data-bs-target="#ModalKeluar">
        <div class="d-flex flex-column text-center bg-primaryr animate__animated Animation-2-icon">
  
          <div
            class="userprofile2 d-flex align-items-center justify-content-center mb-2 mx-auto"
          >
            <i class="bi bi-box-arrow-in-left h2 text-white fw-bold"></i>
          </div>
          <div>
            <p class="fw-semibold pt-sans">Absen Keluar</p>
          </div>
        </div>
      </a>
      <!-- menu -->
      <a href="#" class="text-decoration-none" data-bs-toggle="modal" data-bs-target="#ModalPerizinan">
        <div class="d-flex flex-column text-center bg-primaryr animate__animated Animation-3-icon">
  
          <div
            class="userprofile3 d-flex align-items-center justify-content-center mb-2 mx-auto"
          >
            <i class="bi bi-journal-text 2-front h2 pt-1 text-white fw-bold"></i>
          </div>
          <div>
            <p class="fw-semibold pt-sans">Perizinan</p>
          </div>
        </div>
      </a>
      


    </div>
  </template>
  
  <script>
  export default {};
  </script>
  
  <style scoped>
  .userprofile {
    width: 55px;
    height: 55px;
    background: #50e650;
    border-radius: 30px;
    padding-top: 5px;
  }

  .userprofile2 {
    width: 55px;
    height: 55px;
    background: #E52D51;
    border-radius: 30px;
    padding-top: 5px;
  }

  .userprofile3 {
    width: 55px;
    height: 55px;
    background: #4273fa;
    border-radius: 30px;
    padding-top: 5px;
  }
  
  p {
    margin-bottom: 0 !important;
    font-size: 12px;
    color: black;
  }
  .Animation-1-icon {
    display: inline-block;
    margin: 0 0.5rem;
  
    animation: fadeInUp; /* referring directly to the animation's @keyframe declaration */
    animation-duration: 1s; /* don't forget to set a duration! */
  }
  .Animation-2-icon {
    display: inline-block;
    margin: 0 0.5rem;
  
    animation: fadeInUp; /* referring directly to the animation's @keyframe declaration */
    animation-duration: 1.5s; /* don't forget to set a duration! */
  }
  .Animation-3-icon {
    display: inline-block;
    margin: 0 0.5rem;
  
    animation: fadeInUp; /* referring directly to the animation's @keyframe declaration */
    animation-duration: 2s; /* don't forget to set a duration! */
  }
  .Animation-4-icon {
    display: inline-block;
    margin: 0 0.5rem;
  
    animation: fadeInUp; /* referring directly to the animation's @keyframe declaration */
    animation-duration: 2.5s; /* don't forget to set a duration! */
  }
  </style>
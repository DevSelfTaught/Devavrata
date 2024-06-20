<template>
  <aside
    class="sidenav navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-3"
    id="sidenav-main"
  >
    <div class="sidenav-header">
      <i
        class="fas fa-times p-3 cursor-pointer text-white opacity-5 position-absolute end-0 top-0 d-none d-xl-none"
        aria-hidden="true"
        id="iconSidenav"
      ></i>
      <a class="navbar-brand m-0" href="/">
        <h4 class="ms-1 font-weight-bold text-white">Okaa-san</h4>
      </a>
    </div>
    <hr class="horizontal light mt-0 mb-2" />
    <div class="collapse navbar-collapse w-auto" id="sidenav-collapse-main">
      <ul class="navbar-nav">
        <!-- dashboard -->
        <li class="nav-item">
          <nuxt-link class="nav-link text-white" to="/">
            <div
              class="text-white text-center me-2 d-flex align-items-center justify-content-center"
            >
            <i class="material-icons-round opacity-10">dashboard</i>
            </div>
            <span class="nav-link-text">Dashboard</span>
          </nuxt-link>
        </li>

        <!-- pegawai list -->
        <li class="nav-item">
          <nuxt-link class="nav-link text-white" to="/pegawai">
            <div
              class="text-white text-center me-2 d-flex align-items-center justify-content-center"
            >
              <i class="material-icons opacity-10">face_6</i>
            </div>
            <span class="nav-link-text ms-1">Pegawai</span>
          </nuxt-link>
        </li>

        <!-- pegawai list -->
        <li class="nav-item">
          <nuxt-link class="nav-link text-white" to="/location">
            <div
              class="text-white text-center me-2 d-flex align-items-center justify-content-center"
            >
              <i class="material-icons opacity-10">location_on</i>
            </div>
            <span class="nav-link-text ms-1">Location</span>
          </nuxt-link>
        </li>
        <!-- <li class="nav-item">
          <a
            data-bs-toggle="collapse"
            href="#dashboardsExamples"
            class="nav-link text-white collapsed"
            aria-controls="dashboardsExamples"
            role="button"
            aria-expanded="false"
          >
            <i class="material-icons-round opacity-10">dashboard</i>
            <span class="nav-link-text ms-2 ps-1">Dashboards</span>
          </a>
          <div class="collapse" id="dashboardsExamples" style="">
            <ul class="nav">
              <li class="nav-item">
                <nuxt-link class="nav-link text-white" to="/">
                  <span class="sidenav-mini-icon"> H </span>
                  <span class="sidenav-normal ms-2 ps-1"> Home </span>
                </nuxt-link>
              </li>
              <li class="nav-item">
                <nuxt-link class="nav-link text-white" to="/dashboard/request">
                  <span class="sidenav-mini-icon"> H </span>
                  <span class="sidenav-normal ms-2 ps-1"> Request </span>
                </nuxt-link>
              </li>
              <li class="nav-item">
                <nuxt-link class="nav-link text-white" to="/dashboard/products">
                  <span class="sidenav-mini-icon"> P </span>
                  <span class="sidenav-normal ms-2 ps-1"> Products </span>
                </nuxt-link>
              </li>
              <li class="nav-item">
                <nuxt-link class="nav-link text-white" to="/dashboard/services">
                  <span class="sidenav-mini-icon"> S </span>
                  <span class="sidenav-normal ms-2 ps-1"> Services </span>
                </nuxt-link>
              </li>
              <li class="nav-item">
                <nuxt-link
                  class="nav-link text-white"
                  to="/dashboard/customers"
                >
                  <span class="sidenav-mini-icon"> C </span>
                  <span class="sidenav-normal ms-2 ps-1"> Customers </span>
                </nuxt-link>
              </li>
              <li class="nav-item">
                <nuxt-link
                  class="nav-link text-white"
                  to="/dashboard/distribution"
                >
                  <span class="sidenav-mini-icon"> D </span>
                  <span class="sidenav-normal ms-2 ps-1"> Distribution </span>
                </nuxt-link>
              </li>
              <li class="nav-item">
                <nuxt-link class="nav-link text-white" to="/dashboard/order">
                  <span class="sidenav-mini-icon"> O </span>
                  <span class="sidenav-normal ms-2 ps-1"> Order History </span>
                </nuxt-link>
              </li>
              <li class="nav-item">
                <nuxt-link
                  class="nav-link text-white"
                  to="/dashboard/lastOrder"
                >
                  <span class="sidenav-mini-icon"> L </span>
                  <span class="sidenav-normal ms-2 ps-1">
                    Last Order History
                  </span>
                </nuxt-link>
              </li>
            </ul>
          </div>
        </li> -->
        <!-- <li class="nav-item">
          <a
            data-bs-toggle="collapse"
            href="#report"
            class="nav-link text-white collapsed"
            aria-controls="report"
            role="button"
            aria-expanded="false"
          >
            <i class="material-icons-round opacity-10">summarize</i>
            <span class="nav-link-text ms-2 ps-1">Report</span>
          </a>
          <div class="collapse" id="report" style="">
            <ul class="nav">
              <li class="nav-item">
                <nuxt-link class="nav-link text-white" to="/report/daily">
                  <span class="sidenav-mini-icon"> D </span>
                  <span class="sidenav-normal ms-2 ps-1"> Daily </span>
                </nuxt-link>
              </li>
              <li class="nav-item">
                <nuxt-link class="nav-link text-white" to="/report/monthly">
                  <span class="sidenav-mini-icon"> M </span>
                  <span class="sidenav-normal ms-2 ps-1"> Monthly </span>
                </nuxt-link>
              </li>
              <li class="nav-item">
                <nuxt-link class="nav-link text-white" to="/report/mekanik">
                  <span class="sidenav-mini-icon"> M </span>
                  <span class="sidenav-normal ms-2 ps-1"> Mekanik </span>
                </nuxt-link>
              </li>
              <li class="nav-item">
                <nuxt-link class="nav-link text-white" to="/report/orders">
                  <span class="sidenav-mini-icon"> O </span>
                  <span class="sidenav-normal ms-2 ps-1"> Orders </span>
                </nuxt-link>
              </li>
            </ul>
          </div>
        </li>
        <li class="nav-item">
          <a
            data-bs-toggle="collapse"
            href="#service"
            class="nav-link text-white collapsed"
            aria-controls="service"
            role="button"
            aria-expanded="false"
          >
            <i class="material-icons-round opacity-10">construction</i>
            <span class="nav-link-text ms-2 ps-1">Service</span>
          </a>
          <div class="collapse" id="service" style="">
            <ul class="nav">
              <li class="nav-item">
                <nuxt-link class="nav-link text-white" to="/service/register">
                  <span class="sidenav-mini-icon"> R </span>
                  <span class="sidenav-normal ms-2 ps-1"> Register </span>
                </nuxt-link>
              </li>
              <li class="nav-item">
                <nuxt-link class="nav-link text-white" to="/service/mekanik">
                  <span class="sidenav-mini-icon"> M </span>
                  <span class="sidenav-normal ms-2 ps-1"> Mekanik </span>
                </nuxt-link>
              </li>
              <li class="nav-item">
                <nuxt-link class="nav-link text-white" to="/service/invoice">
                  <span class="sidenav-mini-icon"> I </span>
                  <span class="sidenav-normal ms-2 ps-1"> Invoice </span>
                </nuxt-link>
              </li>
            </ul>
          </div>
        </li>
        <li class="nav-item">
          <nuxt-link class="nav-link text-white" to="/account">
            <div
              class="text-white text-center me-2 d-flex align-items-center justify-content-center"
            >
              <i class="material-icons opacity-10">face_6</i>
            </div>
            <span class="nav-link-text ms-1">Accounts</span>
          </nuxt-link>
        </li> -->
        <!-- <li class="nav-item mt-3">
          <h6
            class="ps-4 ms-2 text-uppercase text-xs text-white font-weight-bolder opacity-8"
          >
            Activity
          </h6>
        </li>
        <li class="nav-item">
          <nuxt-link class="nav-link text-white" to="/sparepart">
            <div
              class="text-white text-center me-2 d-flex align-items-center justify-content-center"
            >
              <i class="material-icons opacity-10">view_in_ar</i>
            </div>
            <span class="nav-link-text ms-1">Sparepart</span>
          </nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link class="nav-link text-white" to="/today">
            <div
              class="text-white text-center me-2 d-flex align-items-center justify-content-center"
            >
              <i class="material-icons opacity-10">note</i>
            </div>
            <span class="nav-link-text ms-1">Report Today</span>
          </nuxt-link>
        </li> -->
      </ul>
    </div>
  </aside>
</template>

<script>
export default {
  methods: {},
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

.nuxt-link-exact-active {
  background-image: linear-gradient(45deg, #03c988, #05a06c);
}
.sidenav {
  background: #00337c;
  font-family: "Poppins", sans-serif;
}
.sidenav img.logo-ipsum {
  height: 40px;
}
/* .sidenav .navbar-brand h4 {

} */
</style>

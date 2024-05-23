<template>
    <div>
        <div class="">
        <a class="btn float-end fs-5 fw-bold " type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><i class="bi bi-sliders"></i></a>
          <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
            <div class="offcanvas-header">
              <h5 class="offcanvas-title" id="offcanvasRightLabel">Menu Admin</h5>
              <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
                <ul class="nav nav-pills flex-column mb-sm-auto mb-0 " id="menu">
                    <li class="nav-item">
                        <nuxt-link to="DataKaryawan" class="nav-link  px-0 deva-color-black">
                            <i class="fs-4 bi bi-person-badge"></i> <span class="ms-1  d-sm-inline">Data Karyawan</span>
                        </nuxt-link>
                    </li>
                    <li class="nav-item">
                        <nuxt-link to="AbsensiKaryawan" class="nav-link  px-0 deva-color-black">
                            <i class="fs-4 bi bi-people-fill"></i> <span class="ms-1  d-sm-inline">Absensi Karyawan</span>
                        </nuxt-link>
                    </li>
                
                </ul>
            </div>
          </div>
      </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    a:hover {
        color: #e52d52;
    }
</style>
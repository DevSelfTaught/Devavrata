<template>
  <div class="all">
    <div class="container">
      <div class="media mx-auto">
        <div class="row">
          <div class="col-12">
            <Header />
          </div>
        </div>
        <div class="d-flex pt-5 justify-content-center">
          <div class="col-xl-6 col-md-12">
            <div class="card user-card-full shadow">
              <div class="row m-l-0 m-r-0">
                <div class="col-sm-4 bg-c-lite-green user-profile">
                  <div class="card-block text-center text-white">
                    <div class="m-b-25">
                      <img
                        src="https://img.icons8.com/bubbles/100/000000/user.png"
                        class="img-radius"
                        alt="User-Profile-Image"
                      />
                    </div>
                    <h6 class="f-w-600">{{ $auth.user.name }}</h6>
                    <p>{{ $auth.user['custom:Jabatan'] }}</p>
                    <i
                      class="mdi mdi-square-edit-outline feather icon-edit m-t-10 f-16"
                    ></i>
                  </div>
                </div>
                <div class="col-sm-8">
                  <div class="card-block">
                    <h6 class="m-b-20 p-b-5 b-b-default f-w-600">
                      Information
                    </h6>
                    <div class="row">
                      <div class="col-sm-6">
                        <p class="m-b-10 f-w-600">Email</p>
                        <h6 class="text-muted f-w-400">{{ $auth.user.email }}</h6>
                      </div>
                      <div class="col-sm-6">
                        <p class="m-b-10 f-w-600">Phone</p>
                        <h6 class="text-muted f-w-400">{{ $auth.user.phone_number }}</h6>
                      </div>
                      <div class="col-sm-6 pt-lg-3">
                        <p class="m-b-10 f-w-600">Jabatan</p>
                        <h6 class="text-muted f-w-400">{{ $auth.user['custom:Jabatan'] }}</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="d-flex pt-5 justify-content-center">
          <div class="col-xl-6 col-md-12">
            <div class="card user-card-full shadow">
              <div class="row m-l-0 m-r-0">
                <div class="col-sm-12">
                  <div class="card-block">
                    <h6 class="m-b-20 p-b-5 b-b-default f-w-600">
                      Ganti Password
                    </h6>
                    <div class="row">
                      <form>
                        <div class="mb-3 py-2">
                          <input
                            type="password"
                            class="form-control border-0 border-bottom border-danger opacity-50 rounded-0 Poppins"
                            name="passwordlama"
                            id="passwordlama"
                            aria-describedby="helpId"
                            placeholder="Password Lama"
                          />
                        </div>
                        <div class="mb-3 py-2">
                          <input
                            type="password"
                            class="form-control border-0 border-bottom border-danger opacity-50 rounded-0 Poppins"
                            name="konfimasipasswordlama"
                            id="konfimasipasswordlama"
                            aria-describedby="helpId"
                            placeholder="Konfirmasi Password Lama"
                          />
                        </div>
                        <div class="mb-3 py-2">
                          <input
                            type="password"
                            class="form-control border-0 border-bottom border-danger opacity-50 rounded-0 Poppins"
                            name="passwordbaru"
                            id="passwordbaru"
                            aria-describedby="helpId"
                            placeholder="Password Baru"
                          />
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.card {
  border-radius: 5px;
  -webkit-box-shadow: 0 1px 20px 0 rgba(69, 90, 100, 0.08);
  box-shadow: 0 1px 20px 0 rgba(69, 90, 100, 0.08);
  border: none;
  margin-bottom: 30px;
}

.m-r-0 {
  margin-right: 0px;
}

.m-l-0 {
  margin-left: 0px;
}

.user-card-full .user-profile {
  border-radius: 5px 0 0 5px;
}

.bg-c-lite-green {
  background: -webkit-gradient(
    linear,
    left top,
    right top,
    from(#8f0c26),
    to(#e52d51)
  );
  background: linear-gradient(to right, #e52d51, #8f0c26);
}

.user-profile {
  padding: 20px 0;
}

.card-block {
  padding: 1.25rem;
}

.m-b-25 {
  margin-bottom: 25px;
}

.img-radius {
  border-radius: 5px;
}

h6 {
  font-size: 14px;
}

.card .card-block p {
  line-height: 25px;
}

@media only screen and (min-width: 1400px) {
  p {
    font-size: 14px;
  }
}

.card-block {
  padding: 1.25rem;
}

.b-b-default {
  border-bottom: 1px solid #e52d51;
}

.m-b-20 {
  margin-bottom: 20px;
}

.p-b-5 {
  padding-bottom: 5px !important;
}

.card .card-block p {
  line-height: 25px;
}

.m-b-10 {
  margin-bottom: 10px;
}

.text-muted {
  color: #919aa3 !important;
}

.b-b-default {
  border-bottom: 1px solid #e52d51;
}

.f-w-600 {
  font-weight: 600;
}

.m-b-20 {
  margin-bottom: 20px;
}

.m-t-40 {
  margin-top: 20px;
}

.p-b-5 {
  padding-bottom: 5px !important;
}

.m-b-10 {
  margin-bottom: 10px;
}

.m-t-40 {
  margin-top: 20px;
}

.user-card-full .social-link li {
  display: inline-block;
}

.user-card-full .social-link li a {
  font-size: 20px;
  margin: 0 10px 0 0;
  -webkit-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
}
</style>

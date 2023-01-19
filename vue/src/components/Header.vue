<template>
  <header>
    <nav class="navbar navbar-light bg-light">
      <div class="container-fluid">
        <router-link class="navbar-brand d-flex" to="/main">
          <div class="brand-box">
            <img style="width: 32px; height: 32px;" src="../assets/logo.png" alt="소소식탁" class="brand-box-img d-inline-block align-text-top">
          </div>
          <p style="margin: auto; padding: 0 0 0 10px;">vue</p>
        </router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link class="nav-link" to="/content/potato">감자</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/content/tofu">두부</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/content/apple">사과</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style scoped>

</style>
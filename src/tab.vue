<template>
  <div class="box">
      <router-view/>
      <div class="tab-box">
          <div class="tab-item">
              <router-link
            to="/home"
            class="navigator"
          >
                <img src="./assets/Vector.png" alt="">
              </router-link>
          </div>
          <div class="tab-item tab-about">
              <router-link
            to="/add"
            class="navigator"
          >
                <img class="about-bj" src="./assets/Ellipse19.png" alt="">
                <img class="about-img" src="./assets/Vector2.png" alt="">
              </router-link>
          </div>
          <div class="tab-item">
              <router-link
            to="/user"
            class="navigator"
          >
                <img src="./assets/Group.png" alt="">
              </router-link>
          </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.box{
    height: 100vh;
  width: 100vw;
    display: flex;
    flex-direction: column;
}
.tab-box{
    display: flex;
    width: 100%;
    height: 80px;
    background: #fff;
    position: fixed;
    left: 0;
    bottom: 0;
}
.box-con{
  flex: 1;
}
.tab-item{
    width: 33.3%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    height: 100%;
}

.tab-item img{
    width: 32px;
    height: 32px;
}
.tab-about .about-bj{
    width: 40px;
    height: 40px;
}
.tab-item .about-img{
    position: absolute;
    left: 50%;
    top: 50%;
    margin-left: -16px;
    margin-top: -16px;
}
</style>
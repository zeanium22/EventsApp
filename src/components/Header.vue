<template>
  <div class="header">
    <!-- 返回箭头 -->
    <div v-if="isBack" class="header_arrow" @click="getBack">
      <slot name="header_arrow">
        <img src="../assets/Vector3.png" alt="" slot="header_arrow" />
      </slot>
    </div>
    <!-- 中间标题问题 -->
    <div class="header_title">
      <slot name="header_title">
        <span>{{ title }}</span>
      </slot>
    </div>
    <!-- 文字与图标 -->
    <!-- <div class="header_icon">
      <slot name="header_icon">
        <span>{{ text }}</span>
      </slot>
    </div> -->
  </div>
</template>
 
<script>
export default {
  name: "Header",
  props: {
    title: {
      type: String,
      default: ''
    },
    isBack: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    // 返回上一页
    getBack() {
        this.$router.go(-1)
    },
  },
};
</script>
<style>

.header .header_title {
  flex: 1;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 36px;
  color: #333;
  font-weight: 700;
}
.header_arrow {
  padding: 0 30px;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.header_arrow img {
  width: 24px;
  height: auto;
  vertical-align: middle;
}
.header_icon {
  width: 20%;
  font-size: 14px;
  color: #115ffb;
}
</style>
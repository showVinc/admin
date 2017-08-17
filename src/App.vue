<template>
  <div id="app" class="wrapper">
    <top></top>  <!-- 导航头部  -->
    <asid></asid>  <!-- 左侧导航  -->
    <router-view></router-view>   <!-- 内容  -->
    <div class="control-sidebar-bg"></div>
    <foo></foo>  <!--  底部  -->
  </div>
</template>

<script>
  import top from '@/components/Header.vue'
  import asid from '@/components/Aside.vue'
  import foo from '@/components/Footer.vue'
  export default {
    name: 'app',
    components: {
      asid,
      top,
      foo
    }
  }
</script>

<template>
  <div class="login-wrapper">
    <login-header />

    <div class="login-container">
      <div class="title-container">
        <h1 class="title margin-no">登录系统</h1>
        <h1 class="title">TDesign Starter</h1>
        <div class="sub-title">
          <p class="tip">{{ type == 'register' ? '已有账号？' : '没有账号？' }}</p>
          <p class="tip" @click="switchType(type == 'register' ? 'login' : 'register')">
            {{ type == 'register' ? '立即登录' : '创建账号' }}
          </p>
        </div>
      </div>

      <login v-if="type === 'login'" />
      <register v-else @register-success="switchType('login')" />
      <tdesign-setting />
    </div>

    <footer class="copyright">Copyright @ 2021-2023 Tencent. All Rights Reserved</footer>
  </div>
</template>
<script lang="ts">
export default {
  name: 'LoginIndex',
};
</script>
<script setup lang="ts">
import { ref } from 'vue';

import TdesignSetting from '@/layouts/setting.vue';

import LoginHeader from './components/Header.vue';
import Login from './components/Login.vue';
import Register from './components/Register.vue';

const type = ref('login');
const switchType = (val: string) => {
  type.value = val;
};
</script>

<style lang="less" scoped>
@import './index.less';
</style>

<template>
  <result title="500 Internal Server Error" type="500" tip="服务器内部错误">
    <t-button @click="() => $router.push('/')">返回首页</t-button>
  </result>
</template>
<script lang="ts">
export default {
  name: 'Result500',
};
</script>
<script setup lang="ts">
import Result from '@/components/result/index.vue';
</script>

<template>
  <div class="result-success-container">
    <result>
      <template #title>
        <div class="result-success-title">操作成功</div>
      </template>
      <template #describe>
        <div class="result-success-describe">您的操作已成功完成</div>
      </template>
      <template #operation>
        <t-button @click="() => $router.push('/dashboard/base')">返回首页</t-button>
      </template>
    </result>
  </div>
</template>
<script lang="ts">
export default {
  name: 'ResultSuccess',
};
</script>

<script setup lang="ts">
</script>

<style lang="less" scoped>
.result-success {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 75vh;

  &-icon {
    font-size: var(--td-comp-size-xxxxl);
    color: var(--td-success-color);
  }

  &-title {
    margin-top: var(--td-comp-margin-xxl);
    font: var(--td-font-title-large);
    color: var(--td-text-color-primary);
    text-align: center;
  }

  &-describe {
    margin: var(--td-comp-margin-s) 0 var(--td-comp-margin-xxxl);
    font: var(--td-font-body-medium);
    color: var(--td-text-color-secondary);
  }
}
</style>

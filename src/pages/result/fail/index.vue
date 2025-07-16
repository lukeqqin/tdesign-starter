<template>
  <div class="result-fail-container">
    <result>
      <template #title>
        <div class="result-fail-title">操作失败</div>
      </template>
      <template #describe>
        <div class="result-fail-describe">您的操作未能成功完成</div>
      </template>
      <template #operation>
        <t-button @click="() => $router.go(-1)">返回修改</t-button>
        <t-button @click="() => $router.push('/form/base')">重新填写</t-button>
      </template>
    </result>
  </div>
</template>
<script lang="ts">
export default {
  name: 'ResultFail',
};
</script>

<script lang="ts" setup>
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
    color: var(--td-text-color-secondary);
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

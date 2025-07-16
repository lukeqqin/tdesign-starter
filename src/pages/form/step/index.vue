<template>
  <div>
    <div class="form-step-container">
      <!-- 简单步骤条 -->
      <t-card :bordered="false">
        <t-steps class="step-container" :current="1" status="process">
          <t-step-item title="合同信息" content="填写合同基本信息" />
          <t-step-item title="发票信息" content="填写发票相关信息" />
          <t-step-item title="邮寄信息" content="填写邮寄地址" />
          <t-step-item title="完成" content="提交成功" />
        </t-steps>
      </t-card>

      <!-- 分步表单1 -->
      <div v-show="activeForm === 0" class="rule-tips">
        <t-alert theme="info" title="填写规则" :close="true">
          <template #message>
            <p>
              1. 合同名称需与公章一致
            </p>
            <p>2. 发票类型需与合同类型匹配</p>
            <p>3. 金额需填写数字</p>
          </template>
        </t-alert>
      </div>
      <t-form
        v-show="activeForm === 0"
        class="step-form"
        :data="formData1"
        :rules="FORM_RULES"
        label-align="right"
        @submit="(result: SubmitContext) => onSubmit(result, 1)"
      >
        <t-form-item label="合同名称" name="name">
          <t-select v-model="formData1.name" :style="{ width: '480px' }" class="demo-select-base" clearable>
            <t-option v-for="(item, index) in NAME_OPTIONS" :key="index" :value="item.value" :label="item.label">
              {{ item.label }}
            </t-option>
          </t-select>
        </t-form-item>
        <t-form-item label="发票类型" name="type">
          <t-select v-model="formData1.type" :style="{ width: '480px' }" class="demo-select-base" clearable>
            <t-option v-for="(item, index) in TYPE_OPTIONS" :key="index" :value="item.value" :label="item.label">
              {{ item.label }}
            </t-option>
          </t-select>
        </t-form-item>
        <t-form-item label="金额"> ¥ {{ amount }} </t-form-item>
        <t-form-item>
          <t-button theme="primary" type="submit">提交</t-button>
        </t-form-item>
      </t-form>

      <!-- 分步表单2 -->
      <t-form
        v-show="activeForm === 1"
        class="step-form"
        :data="formData2"
        :rules="FORM_RULES"
        label-align="left"
        @reset="onReset(0)"
        @submit="(result: SubmitContext) => onSubmit(result, 2)"
      >
        <t-form-item label="发票抬头" name="title">
          <t-input
            v-model="formData2.title"
            :style="{ width: '480px' }"
            placeholder="请输入发票抬头"
          />
        </t-form-item>
        <t-form-item label="税号" name="taxNum">
          <t-input
            v-model="formData2.taxNum"
            :style="{ width: '480px' }"
            placeholder="请输入税号"
          />
        </t-form-item>
        <t-form-item label="地址" name="address">
          <t-input
            v-model="formData2.address"
            :style="{ width: '480px' }"
            placeholder="请输入地址"
          />
        </t-form-item>
        <t-form-item label="开户行" name="bank">
          <t-input
            v-model="formData2.bank"
            :style="{ width: '480px' }"
            placeholder="请输入开户行"
          />
        </t-form-item>
        <t-form-item label="银行账号" name="bankAccount">
          <t-input
            v-model="formData2.bankAccount"
            :style="{ width: '480px' }"
            placeholder="请输入银行账号"
          />
        </t-form-item>
        <t-form-item label="邮箱" name="email">
          <t-input
            v-model="formData2.email"
            :style="{ width: '480px' }"
            placeholder="请输入邮箱"
          />
        </t-form-item>
        <t-form-item label="电话" name="tel">
          <t-input
            v-model="formData2.tel"
            :style="{ width: '480px' }"
            placeholder="请输入电话"
          />
        </t-form-item>
        <t-form-item>
          <t-button type="reset" theme="default" variant="base">上一步</t-button>
          <t-button theme="primary" type="submit">下一步</t-button>
        </t-form-item>
      </t-form>

      <!-- 分步表单3 -->
      <t-form
        v-show="activeForm === 2"
        class="step-form"
        :data="formData3"
        :rules="FORM_RULES"
        label-align="left"
        @reset="onReset(1)"
        @submit="(result: SubmitContext) => onSubmit(result, 6)"
      >
        <t-form-item label="收件人" name="consignee">
          <t-input v-model="formData3.consignee" :style="{ width: '480px' }" />
        </t-form-item>
        <t-form-item label="手机号" name="mobileNum">
          <t-input v-model="formData3.mobileNum" :style="{ width: '480px' }" />
        </t-form-item>
        <t-form-item label="邮寄地址" name="deliveryAddress">
          <t-select v-model="formData3.deliveryAddress" :style="{ width: '480px' }" class="demo-select-base" clearable>
            <t-option v-for="(item, index) in ADDRESS_OPTIONS" :key="index" :value="item.value" :label="item.label">
              {{ item.label }}
            </t-option>
          </t-select>
        </t-form-item>
        <t-form-item label="详细地址" name="fullAddress">
          <t-textarea v-model="formData3.fullAddress" :style="{ width: '480px' }" />
        </t-form-item>
        <t-form-item>
          <t-button type="reset" theme="default" variant="base">上一步</t-button>
          <t-button theme="primary" type="submit">下一步</t-button>
        </t-form-item>
      </t-form>

      <!-- 分步表单4 -->
      <div v-show="activeForm === 6" class="step-form-4">
        <t-space direction="vertical" style="align-items: center">
          <t-icon name="check-circle-filled" style="color: green" size="52px" />
          <p class="text">提交成功</p>
          <p class="tips">合同信息已提交，请等待审核</p>
          <div class="button-group">
            <t-button theme="primary" @click="onReset(0)">重新申请</t-button>
            <t-link theme="primary" href="#">查看进度</t-link>
          </div>
        </t-space>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'FormStep',
};
</script>

<script setup lang="ts">
import { SubmitContext } from 'tdesign-vue-next';
import { computed, ref } from 'vue';
import { useRouter } from 'vue-router';

import {
  ADDRESS_OPTIONS,
  FORM_RULES,
  INITIAL_DATA1,
  INITIAL_DATA2,
  INITIAL_DATA3,
  NAME_OPTIONS,
  TYPE_OPTIONS,
} from './constants';

const formData1 = ref({ ...INITIAL_DATA1 });
const formData2 = ref({ ...INITIAL_DATA2 });
const formData3 = ref({ ...INITIAL_DATA3 });
const activeForm = ref(0);

const amount = computed(() => {
  if (formData1.value.name === '1') {
    return '565421';
  }
  if (formData1.value.name === '2') {
    return '278821';
  }
  if (formData1.value.name === '3') {
    return '109824';
  }
  return '--';
});

const onSubmit = (result: SubmitContext, val: number) => {
  if (result.validateResult === true) {
    activeForm.value = val;
  }
};
const onReset = (val: number) => {
  activeForm.value = val;
};
const complete = () => {
  const router = useRouter();
  router.replace({ path: '/detail/advanced' });
};
</script>

<style lang="less" scoped>
@import './index.less';
</style>

<template>
  <t-form
    ref="form"
    class="base-form"
    :data="formData"
    :rules="FORM_RULES"
    label-align="top"
    :label-width="100"
    @reset="onReset"
    @submit="onSubmit"
  >
    <div class="form-basic-container">
      <div class="form-basic-container-title">基础表单</div>
      <!-- 表单内容 -->

      <!-- 合同名称,合同类型 -->
      <t-row class="row-gap" :gutter="[32, 24]">
        <t-col :span="6">
          <t-form-item label="合同名称" name="name">
            <t-input v-model="formData.name" :style="{ width: '322px' }" placeholder="请输入内容" />
          </t-form-item>
        </t-col>
        <t-col :span="6">
          <t-form-item label="合同类型" name="type">
            <t-select v-model="formData.type" :style="{ width: '322px' }" class="demo-select-base" clearable>
              <t-option v-for="(item, index) in TYPE_OPTIONS" :key="index" :value="item.value" :label="item.label">
                {{ item.label }}
              </t-option>
            </t-select>
          </t-form-item>
        </t-col>

        <!-- 合同收付类型 -->
        <t-col :span="8">
          <t-form-item label="合同收支类型" name="payment">
            <t-radio-group v-model="formData.payment">
              <t-radio value="1"> 收入 </t-radio>
              <t-radio value="2"> 支出 </t-radio>
            </t-radio-group>
            <span class="space-item" />
            <div>
              <t-input placeholder="请输入金额" :style="{ width: '160px' }" />
            </div>
          </t-form-item>
        </t-col>

        <t-col :span="6">
          <t-form-item label="甲方" name="partyA">
            <t-select
              v-model="formData.partyA"
              :style="{ width: '322px' }"
              class="demo-select-base"
              placeholder="请选择合同类型"
              clearable
            >
              <t-option v-for="(item, index) in PARTY_A_OPTIONS" :key="index" :value="item.value" :label="item.label">
                {{ item.label }}
              </t-option>
            </t-select>
          </t-form-item>
        </t-col>
        <t-col :span="6">
          <t-form-item label="乙方" name="partyB">
            <t-select
              v-model="formData.partyB"
              :style="{ width: '322px' }"
              placeholder="请选择合同类型"
              class="demo-select-base"
              clearable
            >
              <t-option v-for="(item, index) in PARTY_B_OPTIONS" :key="index" :value="item.value" :label="item.label">
                {{ item.label }}
              </t-option>
            </t-select>
          </t-form-item>
        </t-col>
        <t-col :span="6">
          <t-form-item label="签订日期" name="signDate">
            <t-date-picker
              v-model="formData.signDate"
              :style="{ width: '322px' }"
              theme="primary"
              mode="date"
              separator="/"
            />
          </t-form-item>
        </t-col>
        <t-col :span="6">
          <t-form-item label="生效日期" name="startDate">
            <t-date-picker
              v-model="formData.startDate"
              :style="{ width: '322px' }"
              theme="primary"
              mode="date"
              separator="/"
            />
          </t-form-item>
        </t-col>
        <t-col :span="6">
          <t-form-item label="结束日期" name="endDate">
            <t-date-picker
              v-model="formData.endDate"
              :style="{ width: '322px' }"
              theme="primary"
              mode="date"
              separator="/"
            />
          </t-form-item>
        </t-col>
        <t-col :span="6">
          <t-form-item label="合同附件" name="files">
            <t-upload
              v-model="formData.files"
              action="https://service-bv448zsw-1257786608.gz.apigw.tencentcs.com/api/upload-demo"
              tips="请上传PDF格式文件"
              :size-limit="{ size: 60, unit: 'MB' }"
              :format-response="formatResponse"
              :before-upload="beforeUpload"
              @fail="handleFail"
            >
              <t-button class="form-submit-upload-btn" variant="outline">
                上传文件
              </t-button>
            </t-upload>
          </t-form-item>
        </t-col>
      </t-row>

      <div class="form-basic-container-title form-title-gap">其他信息</div>

      <t-form-item label="备注" name="comment">
        <t-textarea v-model="formData.comment" :height="124" placeholder="请输入备注信息" />
      </t-form-item>
      <t-form-item label="公证人">
        <t-avatar-group>
          <t-avatar>D</t-avatar>
          <t-avatar>S</t-avatar>
          <t-avatar>+</t-avatar>
        </t-avatar-group>
      </t-form-item>
    </div>
  </t-form>

  <div class="form-submit-container">
    <div class="form-submit-sub">
      <div class="form-submit-left">
        <t-button theme="primary" class="form-submit-confirm" type="submit">
          确认
        </t-button>
        <t-button type="reset" class="form-submit-cancel" theme="default" variant="base">
          取消
        </t-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'FormBase',
};
</script>

<script setup lang="ts">
import type { SubmitContext, UploadFailContext, UploadFile } from 'tdesign-vue-next';
import { MessagePlugin } from 'tdesign-vue-next';
import { ref } from 'vue';

import { FORM_RULES, INITIAL_DATA, PARTY_A_OPTIONS, PARTY_B_OPTIONS, TYPE_OPTIONS } from './constants';

const formData = ref({ ...INITIAL_DATA });

const onReset = () => {
  MessagePlugin.warning('取消新建');
};
const onSubmit = (ctx: SubmitContext) => {
  if (ctx.validateResult === true) {
    MessagePlugin.success('新建成功');
  }
};
const beforeUpload = (file: UploadFile) => {
  if (!/\.(pdf)$/.test(file.name)) {
    MessagePlugin.warning('请上传pdf文件');
    return false;
  }
  if (file.size > 60 * 1024 * 1024) {
    MessagePlugin.warning('上传文件不能大于60M');
    return false;
  }
  return true;
};
const handleFail = (options: UploadFailContext) => {
  MessagePlugin.error(`文件 ${options.file.name} 上传失败`);
};
// 用于格式化接口响应值，error 会被用于上传失败的提示文字；url 表示文件/图片地址
const formatResponse = (res: any) => {
  return { ...res, error: '上传失败，请重试', url: res.url };
};
</script>

<style lang="less" scoped>
@import './index.less';
</style>

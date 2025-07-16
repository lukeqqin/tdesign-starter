<template>
  <div class="detail-base">
    <t-card :bordered="false">
      <t-descriptions title="基本信息">
        <t-descriptions-item v-for="(item, index) in BASE_INFO_DATA" :key="index" :label="item.name">
          <span
            :class="{
              ['inProgress']: item.type && item.type.value === 'inProgress',
              ['pdf']: item.type && item.type.value === 'pdf',
            }"
          >
            <i v-if="item.type && item.type.key === 'contractStatus'" />
            {{ item.value }}
          </span>
        </t-descriptions-item>
      </t-descriptions>
    </t-card>

    <t-card title="变更记录" class="container-base-margin-top" :bordered="false">
      <t-steps class="detail-base-info-steps" layout="vertical" theme="dot" :current="1">
        <t-step-item
          title="申请提交"
          content="2020-12-10 10:30提交"
        />
        <t-step-item
          title="电子发票"
          content="预计1-3个工作日"
        />
        <t-step-item
          title="发票邮寄"
          content="开票后7个工作日内联系"
        />
      </t-steps>
    </t-card>
  </div>
</template>

<script lang="ts">
export default {
  name: 'DetailBase',
};
</script>

<script setup lang="ts">

const BASE_INFO_DATA = [
  {
    name: '合同名称',
    value: '总部办公用品采购项目',
    type: null,
  },
  {
    name: '合同状态',
    value: '履行中',
    type: {
      key: 'contractStatus',
      value: 'inProgress',
    },
  },
  {
    name: '合同编号',
    value: 'BH00010',
    type: null,
  },
  {
    name: '合同类型',
    value: '主合同',
    type: null,
  },
  {
    name: '合同收支类型',
    value: 'c',
    type: null,
  },
  {
    name: '合同金额',
    value: '¥ 5,000,000',
    type: null,
  },
  {
    name: '甲方',
    value: '腾讯科技（深圳）有限公司',
    type: null,
  },
  {
    name: 'Employee',
    value: '欧尚',
    type: null,
  },
  {
    name: '签订日期',
    value: '2020-12-20',
    type: null,
  },
  {
    name: '生效日期',
    value: '2021-01-20',
    type: null,
  },
  {
    name: '结束日期',
    value: '2022-12-20',
    type: null,
  },
  {
    name: '合同附件',
    value: '总部办公用品采购项目合同.pdf',
    type: {
      key: 'contractAnnex',
      value: 'pdf',
    },
  },
  {
    name: '创建日期',
    value: '2020-12-22 10:00:00',
    type: null,
  },
];
</script>

<style lang="less" scoped>
@import './index.less';
</style>

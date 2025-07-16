export interface UserInfoListType {
  title: string;
  content: string;
  span?: number;
}

export const USER_INFO_LIST: Array<UserInfoListType> = [
  {
    title: '手机号码',
    content: '+86 13923734567',
  },
  {
    title: '座机号码',
    content: '734567',
  },
  {
    title: '电子邮箱',
    content: 'Account@qq.com',
  },
  {
    title: '座位号',
    content: 'T32F 012',
  },
  {
    title: '所属实体',
    content: '腾讯集团',
  },
  {
    title: '直属领导',
    content: 'Michael Wang',
  },
  {
    title: '职位',
    content: '高级 UI 设计师',
  },
  {
    title: '入职日期',
    content: '2021-07-01',
  },
  {
    title: '所属团队',
    content: '腾讯/腾讯公司/某事业群/某产品部/某运营中心/商户服务组',
    span: 6,
  },
];

export const TEAM_MEMBERS = [
  {
    avatar: 'https://avatars.githubusercontent.com/Wen1kang',
    title: 'Lovellzhong 钟某某',
    description: '直客销售 港澳拓展组员工',
  },
  {
    avatar: 'https://avatars.githubusercontent.com/pengYYYYY',
    title: 'Jiajingwang 彭某某',
    description: '前端开发 前台研发组员工',
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/24469546?s=96&v=4',
    title: 'cruisezhang 林某某',
    description: '技术产品 产品组员工',
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/88708072?s=96&v=4',
    title: 'Lovellzhang 商某某',
    description: '产品运营 港澳拓展组员工',
  },
];

export const PRODUCT_LIST = ['a', 'b', 'c', 'd'];

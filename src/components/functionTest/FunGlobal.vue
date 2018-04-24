<script>
const testRawFile = {
  name: '',
  progress: '',
  testItems: [
    {
      title: "标识和鉴别",
      index: "1",
      submenu: [
        {
          title: "用户标识",
          index: "1-1",
          submenu: [
            {
              title: "用户管理模块",
              index: "1-1-1",
              testItem: {
                testPoint: '用户管理模块',//检测点
                testDescription: '系统应提供用户管理模块对用户进行管理',//检测点描述
                riskLevel: '高',//风险等级(0-低 1-中 2-高)
                conformLevel: '0',//符合程度(0-符合 1-部分符合 2-不符合 3-不适用)
                record: '',//测试记录
                issue: '',//存在问题
                require: '',//整改要求
                reformResult: '0',//整改结果(1-已整改 2-部分整改 3-未整改)
                done: false//改项检测完毕(0-未完毕 1-完毕)
              }
            },
            {
              title: "用户管理功能",
              index: "1-1-2",
              testItem: {
                testPoint: '用户管理功能',
                testDescription: '系统应提供完善的用户管理功能，包括对用户的增删改查',
                riskLevel: '高',
                conformLevel: '0',
                record: '',
                issue: '',
                require: '',
                reformResult: '0',
                done: false
              }
            }
          ]
        },
        {
          title: "用户账号规范",
          index: "1-2",
          submenu: [
            {
              title: "账号实名制原则",
              index: "1-2-1",
              testItem: {
                testPoint: '账号实名制原则',
                testDescription: '系统在创建用户时应遵循实名制原则，包括用户的身份证号、手机号、邮箱等信息',
                riskLevel: '高',
                conformLevel: '0',
                record: '',
                issue: '',
                require: '',
                reformResult: '0',
                done: false
              }
            },
            {
              title: "账号有效期",
              index: "1-2-2",
              testItem: {
                testPoint: '账号有效期',
                testDescription: '系统应提供永久账号与临时账号。临时账号有效期不得超过三个月，超期自动转为休眠状态',
                riskLevel: '高',
                conformLevel: '0',
                record: '',
                issue: '',
                require: '',
                reformResult: '0',
                done: false
              }
            },
            {
              title: "账号状态",
              index: "1-2-3",
              testItem: {
                testPoint: '账号状态',
                testDescription: '用户账号应存在以下状态：正常、锁定、休眠、注销。锁定、休眠、注销状态的账号不能再登录；锁定状态的账号可以由管理员手动解锁；休眠状态的账号只能由管理员手动激活；休眠状态的账号一年后自动注销；注销状态的账号不能被恢复，但系统应保留原始登录及操作日志',
                riskLevel: '高',
                conformLevel: '0',
                record: '',
                issue: '',
                require: '',
                reformResult: '0',
                done: false
              }
            },
            {
              title: "账号扫描",
              index: "1-2-4",
              testItem: {
                testPoint: '账号扫描',
                testDescription: '系统应提供定期扫描账号的机制，至少一个月检查一次，将符合休眠／注销条件的账号及时休眠／注销',
                riskLevel: '高',
                conformLevel: '0',
                record: '',
                issue: '',
                require: '',
                reformResult: '0',
                done: false
              }
            }
          ]
        }
      ]
    },
    {
      title: "访问控制",
      index: "2",
      submenu: [
        {
          title: "访问控制策略",
          index: "2-1",
          submenu: [
            {
              title: "访问控制全覆盖",
              index: "2-1-1",
              testItem: {
                testPoint: '访问控制全覆盖',
                testDescription: '系统应对所有用户（包括系统管理员）进行访问控制',
                riskLevel: '高',
                conformLevel: '0',
                record: '',
                issue: '',
                require: '',
                reformResult: '0',
                done: false
              }
            }
          ]
        }
      ]
    }
  ]
}

export default {
  testRawFile
}
</script>

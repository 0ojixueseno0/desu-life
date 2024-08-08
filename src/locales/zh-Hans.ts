// 简体中文

export default {
  lang: {
    language: "zh-Hans",
    languageName: "简体中文",
  },
  page: {
    // 首页
    main: {
      menu: {
        options: {
          info: "资讯站",
          mail: "邮箱"
        },
        kanonbot: "Bot",
        device: "猫盘",
        discord: "Discord",
        support: "赞助",
        about: "关于",
      },
    },
    // QQ机器人
    kanonbot: {
      title: "KanonBot",
      subtitle: "支持多平台的 osu! 查分机器人",
      description: [
        "个人资料、游玩成绩、对比 pp+ 数据",
        "查询赛事 cost 值、查询今日新增 bp、推荐铺面（std）",
        "Kanon 勋章系统、自定义 osu! infopanel 图像"
      ],
      linkToDetail: "猫猫还可以做的更多！ >>",
      linkTooltip: "前往资讯站查看 KanonBot2022 使用文档"
    },
    // 猫盘
    device: {
      // Meowpad v2
      defaultModal: [
        ["desu.life device 交流群：722122663 {'|'} 309702152"],
        "Meowpad V2：",
        ["meowpad_v2 配置器(1.0.1)： ", "Windows x64", "Linux x64 (deb)", "Linux x64(appimage)"],
        ["meowpad_v2 standard edition 固件 (1.0.1)： ", "本地下载"],
        "Meowpad V1：",
        ["产品说明及固件升级教程：", "前往资讯站查看"],
        ["meowpad_v1 配置器(0.3.1)： ", "Windows x64", "Linux x64 (deb)", "MacOS x64"],
        ["meowpad_v1.1_hs固件 (Hall Effect release 1.0.0 patch 23090101)： ", "本地下载"],
        ["meowpad_v1.0固件 (Mechanical beta 0.1.6)： ", "本地下载"],
        ["meowpad_v1固件升级套件 (dfu-util)： ", "本地下载"]
      ],
      v2: {
        title: "Meowpad v2",
        subtitle: "高性能磁轴小键盘",
        benefits: [
          "卓越的硬件性能",
          "0.125ms 极速响应",
          "多种灯效模式",
          "自定义触发"
        ],
        linkToMarket: "这么好？给我也整一个！ >>",
        linkToOldMarket: "点这里购买配件 >>",
        linkTooltip: "打开猫盘淘宝店铺页",
        btnOpenDialog: "已经整了？下载驱动！ >>",
        btnTooltip: "下载驱动程序",
        modalTitle: "下载 Meowpad 驱动",
      },
      v2Se: {
        title: "Meowpad SE v2",
        subtitle: "多场景适用的磁轴小键盘",
        benefits: [
          "USB-C 接口",
          "1ms 高速响应",
          "可调背光",
          "自定义触发"
        ],
        linkToMarket: "这么好？给我也整一个！ >>",
        linkToOldMarket: "点这里购买配件 >>",
        linkTooltip: "打开猫盘淘宝店铺页",
        btnOpenDialog: "已经整了？下载驱动！ >>",
        btnTooltip: "下载驱动程序",
        modalTitle: "下载 Meowpad 驱动",
      },
    },
    // Discord
    discord: {
      label: "DESU.Life 邀请您加入",
      name: "Discord 服务器",
      btn: "点击加入"
    },
    // 赞助
    support: {
      title: "支持 DESU.Life",
      content: [
        "DESU.Life 的运营离不开大家的支持",
        "感谢屏幕上飘过的所有小伙伴对 DESU.Life 的支持",
        "此处记录了截止2023年12月之前能记录到的所有赞助。",
        "所有赞助金额将全部用于服务器、域名、各种云服务的费用支出。",
        "但是由于各种原因，我们目前不再接受新的赞助。",
        "虽然如此，DESU.Life还是会和大家一同走向我们所期盼的未来。",
      ]
    },
    footer: {
      topimgCopyRight: "头图来自来自随机图库，作品版权源于各作者"
    }
  },
};

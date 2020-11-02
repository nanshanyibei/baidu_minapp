/**
 * @file index.js
 * @author swan
 */
const app = getApp();
const TOPICS = [
    {
        topicItem: '#如何积极面对职场PUA#',
        persons: 4857
    },
    {
        topicItem: '#职场小技巧#',
        persons: 4857
    }
];
const PERSON_LIST = [
    {
        name: '王语嫣',
        time: '5月14号',
        topicConent: '把赛事赛程的子页面补充上文档里面表明子页面是上海团队负责做的部分客户端不用管',
        comments: [
            {
                name: '周伯通',
                content: '如果是墙外节奏，动态列表里面有翻墙啊技术开发就卡了上飞机萨克雷放假撒'
            }
        ]
    }
]

Page({
    data: {
        isCherp: true,
        topics: TOPICS,
        personList: PERSON_LIST
    },
    onLoad() {
        
    },
    cherpUp() {
        this.setData({
            isCherp: true
        })
    },
    deepWater() {
        this.setData({
            isCherp: false
        })
    },
    toMyPage() {
        swan.navigateTo({
            url: '/pages/myPage/myPage'
        });
    },
    toSubmit() {
        swan.navigateTo({
            url: '/pages/submitArticle/submitArticle'
        })
    },
    toMessage() {
        swan.navigateTo({
            url: '/pages/messagePage/messagePage'
        })
    },
    openShare() {
        swan.openShare({
            title: '智能小程序示例',
            content: '世界很复杂，百度更懂你',
            path: 'swan-api/open-share/open-share?key=value',
            imageUrl: 'https://smartprogram.baidu.com/docs/img/logo_new.png',
            success: res => {
                swan.showToast({
                    title: '分享成功',
                    icon: 'none'
                });
                console.log('openShare success', res);
            },
            fail: err => {
                console.log('openShare fail', err);
            }
        });
    }
})

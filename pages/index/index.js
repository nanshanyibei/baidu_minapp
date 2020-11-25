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

Page({
    data: {
        isCherp: true,
        topics: TOPICS,
        personList: []
    },
    onLoad() {
        
    },
    onReady: function() {
        swan.request({
            url: 'https://tiancong.club/postListByAllUser',
            method: 'GET',
            data: {
                user_id: 1013
            },
            success: res => {
                let articleList = [];
                res.data.map(ele => {
                    const {id, author, content, date} = ele;
                    let articleListElement = {};
                    articleListElement.name = author;
                    articleListElement.time = `${(new Date(date).getMonth() + 1 + '')}-${new Date(date).getDate()}`;
                    articleListElement.topicConent = content;
                    articleListElement.comments = [{
                        name: '122',
                        content: '123123'
                    }];
                    articleList.push(articleListElement);
                });
                this.setData({
                    personList: articleList
                })
            }
        })
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
    addGuanZhu() {
        console.log('---1111');
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

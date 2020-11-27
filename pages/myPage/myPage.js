const app = getApp();
const USER_MESSAGE = {
    username: '用户名',
    guanzhu: 200,
    fans: 100,
    power: 200
};
const telPersons = [18069864670, 18000001111];

Page({
    data: {
        userMessage: USER_MESSAGE,
        username: '用户名',
        hasUserInfo: false,
        canIUse: swan.canIUse('view.open-type.getUserInfo')
    },
    onLoad: function () {
        // 监听页面加载的生命周期函数
    },
    onReady: function() {
        // 监听页面初次渲染完成的生命周期函数
    },
    onShow: function() {
        // 监听页面显示的生命周期函数
    },
    onHide: function() {
        // 监听页面隐藏的生命周期函数
    },
    onUnload: function() {
        // 监听页面卸载的生命周期函数
    },
    onPullDownRefresh: function() {
        // 监听用户下拉动作
    },
    onReachBottom: function() {
        // 页面上拉触底事件的处理函数
    },
    onShareAppMessage: function () {
        // 用户点击右上角转发
    },
    toSubmit() {
        swan.navigateTo({
            url: '/pages/submitArticle/submitArticle'
        })
    },
    toIndex() {
        swan.navigateTo({
            url: '/pages/index/index'
        });
    },
    toMessage() {
        swan.navigateTo({
            url: '/pages/messagePage/messagePage'
        })
    },
    getUserInfo(e) {
        this.setData({
            username: e.detail.userInfo,
            hasUserInfo: true
        });
    },
    toLogin() {
        swan.request({
            url: 'https://tiancong.club/login',
            method: 'GET',
            data: {
                tel: telPersons[Math.random > 0.5 ? 0: 1],
                password: '123456'
            },
            success: res => {
                swan.setStorageSync('cookie', res.header['Set-Cookie']);
            }
        })
    }
});
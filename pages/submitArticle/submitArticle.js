const app = getApp();
const USER_MESSAGE = {
    username: '用户名',
    guanzhu: 200,
    fans: 100,
    power: 200
}

Page({
    data: {
        userMessage: USER_MESSAGE,
        moodValue: 0.0,
        inputValue: '',
        clickValue: 0
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
    bindInput(e) {
        this.setData({
            inputValue: e.detail.value
        })
        swan.request({
            url: 'https://tiancong.club/getEnergy',
            method: 'GET',
            header: {
                'content-type': 'application/x-www-form-urlencoded',
                'cookie': swan.getStorageSync("cookie")
            },
            data: {
                words: e.detail.value
            },
            success: res => {
                this.setData({
                    moodValue: res.data
                })
            }
        })
    },
    bindClickType(e) {
        this.setData({
            clickValue: e.currentTarget.dataset.idx
        })
    },
    toIndex() {
        swan.navigateTo({
            url: '/pages/index/index'
        });
    },
    toMyPage() {
        swan.navigateTo({
            url: '/pages/myPage/myPage'
        })
    },
    chooseImage() {
        swan.chooseImage({
            count: 1,
            sizeType: ['compressed'],
            sourceType: ['album'],
            success: res => {
                this.setData('filePath', res.tempFilePaths[0]);
            }
        });
    },
    uploadFile() {
        swan.request({
            url: 'https://tiancong.club/addPost',
            method: 'GET',
            header: {
                'content-type': 'application/x-www-form-urlencoded',
                'cookie': swan.getStorageSync("cookie")
            },
            data: {
                addPostContent: this.data.inputValue,
                addImgUrl: 'test.cn',
                energy: this.data.moodValue
            },
            success: res => {
                if (res.data.errorCode === '0') {
                    swan.showToast({
                        title: '恭喜你发布成功',
                        mask: false,
                        success: res => {
                            setTimeout(() => {
                                this.toIndex();
                            }, 2000);
                        },
                        fail: err => {
                            console.log('showToast fail', err);
                        }
                    });
                }
            }
        })
    },
    toMessage() {
        swan.navigateTo({
            url: '/pages/messagePage/messagePage'
        })
    }
});
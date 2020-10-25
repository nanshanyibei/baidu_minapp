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
        moodValue: 0.6,
        inputValue: ''
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
        const filePath = this.getData('filePath');
        if (!filePath) {
            swan.showToast({
                title: '请先上传图片',
                icon: 'none'
            });
        }
        console.log('----发布信息')
        swan.uploadFile({
            url: 'https://xxxx', // 仅为示例，并非真实的接口地址
            filePath,
            name: 'myfile',
            header: {
                'content-type': 'multipart/form-data'
            },
            formData: {
                'user': 'test'
            },
            success: res => {
                swan.showToast({
                    title: '上传成功',
                    icon: 'none'
                });
                console.log('uploadFile success', res);
                this.setData({filePath});
            },
            fail: err => {
                console.log('uploadFile fail', err);
                swan.showToast({
                    title: '上传失败',
                    icon: 'none'
                });
                this.toIndex();
            }
        }); 
    },
    toMessage() {
        swan.navigateTo({
            url: '/pages/messagePage/messagePage'
        })
    }
});
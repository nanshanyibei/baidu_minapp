const app = getApp();
const MESSAGE_LIST = [
    {
        image: 'https://b.bdstatic.com/searchbox/icms/searchbox/img/plus.png',
        name: '贴吧本地通',
        value: '当前城市竞争力报告！',
        date: '10-23'
    },
    {
        image: 'https://b.bdstatic.com/searchbox/icms/searchbox/img/plus.png',
        name: '贴吧本地通',
        value: '当前城市竞争力报告！',
        date: '10-12'
    }
]

Page({
    data: {
        messageList: MESSAGE_LIST
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
    }
});
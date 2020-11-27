const app = getApp();

Page({
    data: {
        commentPageValue: '',
        post_id: ''
    },
    onLoad: function (options) { 
        console.log('----option', options);
        this.setData({
            post_id: options.id,
        }) 
    },
    toIndex() {
        swan.navigateTo({
            url: '/pages/index/index'
        });
    },
    toSubmit() {
        swan.navigateTo({
            url: '/pages/submitArticle/submitArticle'
        })
    },
    toMyPage() {
        swan.navigateTo({
            url: '/pages/myPage/myPage'
        })
    },
    inputChange(e) {
        this.setData({
            commentPageValue: e.detail.value
        })
    },
    toSubmitComment() {
        swan.request({
            url: 'https://tiancong.club/addPostComment',
            method: 'GET',
            header: {
                'content-type': 'application/x-www-form-urlencoded',
                'cookie': swan.getStorageSync("cookie")
            },
            data: {
                post_id: this.data.post_id,
                comment_content: this.data.commentPageValue
            },
            success: res => {
                if (res.data.errorCode === '0') {
                    swan.showToast({
                        title: res.data.errorMessage,
                        mask: false,
                        success: res => {
                            this.toIndex();
                        },
                        fail: err => {
                            console.log('showToast fail', err);
                        }
                    });
                }
            }
        })
    }
});
// pages/calc2/calc2.js
Page({

  /**
   * Page initial data
   */
  data: {
    result: "",
    gender_list: [
      {name: "male", value: "male", display: "男"},
      {name: "female", value: "female", display: "女", checked: "true"}
    ]
  },
  calc2(e) {
    // 卡波剂量 = 5 * (1.03 * 体重 * (140-年龄) / sCr + 25)
    let gender = e.detail.value.gender,
      weight = e.detail.value.weight,
      age = e.detail.value.age,
      scr = e.detail.value.scr,
      auc = e.detail.value.auc;
    // 检查输入不为空 or 其他逻辑
    if (weight == "") {
      wx.showToast({ 
        title: '体重不能为空', 
        icon: 'error', 
        duration: 2000 
      })
    }
    else if (age == "") {
      wx.showToast({ 
        title: '年龄不能为空',
        icon: 'error', 
        duration: 2000 
      })
    }
    else if (scr == "") {
      wx.showToast({ 
        title: 'sCr不能为空',
        icon: 'error', 
        duration: 2000 
      })
    }
    else {
      let result = 5 * (1.03 * weight * (140-age) / scr + 25);
      this.setData({
        result: result.toFixed(3)
      })
    }
  },
  calc2Reset(e) {
    this.setData({
      result: "",
      gender_list: [
        {name: "male", value: "male", display: "男"},
        {name: "female", value: "female", display: "女", checked: "true"}
      ]
    })
  },
  /**
   * Lifecycle function--Called when page load
   */
  onLoad(options) {

  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady() {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow() {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide() {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload() {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh() {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom() {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage() {

  }
})
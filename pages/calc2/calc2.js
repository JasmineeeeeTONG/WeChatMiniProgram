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
    let gender = e.detail.value.gender,
      weight = e.detail.value.weight,
      age = e.detail.value.age,
      scr = e.detail.value.scr,
      auc = e.detail.value.auc;
    // 修改计算逻辑
      let result = "gender: " + gender + "weight: " + weight
        + "age: " + age + "sCr:" + scr + "AUC: " + auc;
    this.setData({
      result: result
    })
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
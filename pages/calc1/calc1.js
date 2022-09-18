// calc1.js
//const util = require('../../utils/util.js')

Page({
  data: {
    calcArea: "",
    gender_list: [
      {name: "male", value: "male", display: "男"},
      {name: "female", value: "female", display: "女", checked: "true"}
    ]
  },
  calc1(e) {
    // 体表面积=0.00586*身高+0.0126*体重-0.0461
    let gender = e.detail.value.gender,
      weight = e.detail.value.weight,
      height = e.detail.value.height;
    // 检查输入不为空 or 其他逻辑
    if (weight == "") {
      wx.showToast({ 
        title: '体重不能为空', 
        icon: 'error', 
        duration: 2000 
      })
    }
    else if (height == "") {
      wx.showToast({ 
        title: '身高不能为空',
        icon: 'error', 
        duration: 2000 
      })
    }
    else {
      let area = 0.00586 * height + 0.0126 * weight - 0.0461;
      this.setData({
        calcArea: area.toFixed(4)
      })
    }
  },
  calc1Reset(e) {
    this.setData({
      calcArea: "",
      gender_list: [
        {name: "male", value: "male", display: "男"},
        {name: "female", value: "female", display: "女", checked: "true"}
      ]
    })
  }
})

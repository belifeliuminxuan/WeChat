Page({
  data:{
    currentTab:0,
    flag:0,
  },
  switchNav:function (e) {
    console.log(e);
    var page = this;
    var id = e.target.id;
    if (this.data.currentTab == id) {
      return false;
    } else {
      page.setData({ currentTab: id });
    }
    page.setData({ flag: id });
  },
  data: {
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    imgUrls: [
      "image/1.jpg",
      "image/2.jpg",
      "image/3.jpg",
      "image/4.jpg",
      "image/5.jpg"
    ]
  },
  jumpDetai:function(){
    wx.navigateTo({
      url: '/pages/jingtai/jingtai'
    })
  },
  jumpDetai1: function () {
    wx.navigateTo({
      url: '/pages/jingtai1/jingtai1'
    })
  },
  jumpDetai2: function () {
    wx.navigateTo({
      url: '/pages/jingtai2/jingtai2'
    })
  },
  jumpDetai3: function () {
    wx.navigateTo({
      url: '/pages/zhengbing/zhengbing'
    })
  },
  jumpDetai4: function () {
    wx.navigateTo({
      url: '/pages/zhengbing1/zhengbing1'
    })
  },
  jumpDetai5: function () {
    wx.navigateTo({
      url: '/pages/zhengbing2/zhengbing2'
    })
  },
  jumpDetai6: function () {
    wx.navigateTo({
      url: '/pages/junshi/junshi'
    })
  },
  jumpDetai7: function () {
    wx.navigateTo({
      url: '/pages/junshi1/junshi1'
    })
  },
  jumpDetai8: function () {
    wx.navigateTo({
      url: '/pages/junshi2/junshi2'
    })
  },
  jumpDetai9: function () {
    wx.navigateTo({
      url: '/pages/zhuangbei/zhuangbei'
    })
  },
  jumpDetai10: function () {
    wx.navigateTo({
      url: '/pages/zhuangbei1/zhuangbei1'
    })
  },
  jumpDetai11: function () {
    wx.navigateTo({
      url: '/pages/zhuangbei2/zhuangbei2'
    })
  },
  jumpDetai12: function () {
    wx.navigateTo({
      url: '/pages/junxiao/junxiao'
    })
  },
  jumpDetai13: function () {
    wx.navigateTo({
      url: '/pages/junxiao1/junxiao1'
    })
  },
  jumpDetai14: function () {
    wx.navigateTo({
      url: '/pages/junxiao2/junxiao2'
    })
  }

})
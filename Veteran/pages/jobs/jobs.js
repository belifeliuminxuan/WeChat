Page({
  data: {
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    imgUrls: [
      "image/1.jpg",
      "image/2.jpg",
      "image/3.jpg"
    ]
  },
  jumpDetai: function () {
    wx.navigateTo({
      url: '/pages/jobs1/jobs1',
    })
  },
  jumpDetai1: function () {
    wx.navigateTo({
      url: '/pages/jobs2/jobs2',
    })
  },
  onShareAppMessage: function () {

  }
})
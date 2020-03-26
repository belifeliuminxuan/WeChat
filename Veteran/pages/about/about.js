var app = getApp()

Page({
  data: {
    currentTab: 0,
    flag: 0
  },
  switchNav: function (e) {
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
    trimg: 'image/touxiang.jpg'
  },
  onShareAppMessage: function () {

  }
})
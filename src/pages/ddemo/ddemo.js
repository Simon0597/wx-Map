// 获取全局应用程序实例对象
// const app = getApp()

// 创建页面实例对象
Page({
  /**
   * 页面的初始数据
   */
  data: {
    title: 'ddemo',
    src: 'http://card.mugeda.com/campaigns/55b9e370a3664e7315000124/20161229062354/58648ba592b5793474145000/5864dddf92b57934d85e60fc.mp3',
    controls: false,
    audioIco: 'iconfont icon-yinlebofang',
    audioAnimation: 'audioAnimation',
    status: false,
    loop: true,
    currentIndex: 0,
    oldIndex: 0,
    view: [
      {
        in: '',
        out: ''
      },
      {
        in: '',
        out: ''
      }
    ]
  },
  /**
   * 触摸开始
   * @param e
   */
  touchStart (e) {
    this.setData({
      startX: e.changedTouches[0].clientX
    })
  },
  /**
   * 触摸结束
   * @param e
   */
  touchEnd (e) {
    let that = this
    let view = this.data.view
    this.setData({
      endX: e.changedTouches[0].clientX
    })
    let distance = e.changedTouches[0].clientX - this.data.startX
    if (distance < -100) {
      // left
      if (this.data.currentIndex >= 1) return
      this.setData({
        oldIndex: that.data.currentIndex,
        currentIndex: ++that.data.currentIndex
      })
      view[this.data.oldIndex].out = 'animated fadeOutLeft'
      view[this.data.oldIndex].in = ''
      view[this.data.currentIndex].in = 'animated fadeInRight'
      view[this.data.currentIndex].out = ''
      this.setData({
        view: view
      })
      this.cleanAnimated()
      this.showAnimated()
    } else if (distance > 100) {
      // right
      if (this.data.currentIndex <= 0) return
      this.setData({
        oldIndex: that.data.currentIndex,
        currentIndex: --that.data.currentIndex
      })
      view[this.data.oldIndex].out = 'animated fadeOutRight'
      view[this.data.oldIndex].in = ''
      view[this.data.currentIndex].in = 'animated fadeInLeft'
      view[this.data.currentIndex].out = ''
      this.setData({
        view: view
      })
      this.cleanAnimated()
      this.showAnimated()
    }
  },
  /**
   * 播放控制
   */
  audioControl () {
    if (this.data.status) {
      this.audioPlay()
      this.setData({
        audioIco: 'iconfont icon-yinlebofang',
        status: !this.data.status,
        audioAnimation: 'audioAnimation'
      })
    } else {
      this.aduioPause()
      this.setData({
        audioIco: 'iconfont icon-yinlezanting',
        status: !this.data.status,
        audioAnimation: ''
      })
    }
  },
  /**
   * 播放暂停音乐
   */
  audioPlay () {
    this.audioCtx.play()
  },
  aduioPause () {
    this.audioCtx.pause()
  },
  /**
   * 展示动画
   */
  showAnimated () {
    let that = this
    // one
    if (this.data.currentIndex === 0) {
      setTimeout(function () {
        that.setData({
          one_one: 'animated fadeIn',
          one_two: 'animated bounceIn'
        })
      }, 1000)
      setTimeout(function () {
        that.setData({
          one_three: 'animated bounceIn'
        })
      }, 1500)
      setTimeout(function () {
        that.setData({
          one_four: 'animated bounceIn'
        })
      }, 1800)
      setTimeout(function () {
        that.setData({
          one_five: 'animated lightSpeedIn'
        })
      }, 1900)
      setTimeout(function () {
        that.setData({
          one_six: 'animated fadeIn'
        })
      }, 2200)
      setTimeout(function () {
        that.setData({
          one_six: 'indexMove'
        })
      }, 3200)
    } else if (this.data.currentIndex === 1) {
      setTimeout(function () {
        that.setData({
          two_one: 'animated fadeInDown',
          two_two: 'animated fadeInUp'
        })
      }, 1000)
      setTimeout(function () {
        that.setData({
          two_three: 'animated zoomIn',
          two_four: 'animated zoomIn'
        })
      }, 1200)
      setTimeout(function () {
        that.setData({
          two_six: 'animated fadeIn',
          two_sev: 'animated fadeIn'
        })
      }, 1300)
      setTimeout(function () {
        that.setData({
          two_six: 'two-sev-scale'
        })
      }, 2300)
      setTimeout(function () {
        that.setData({
          two_three: 'two-music-one',
          two_four: 'two-music-two'
        })
      }, 2200)
      setTimeout(function () {
        that.setData({
          two_five: 'animated flipInY'
        })
      },1000)
    }
  },
  /**
   * 清除动画
   */
  cleanAnimated () {
    // one
    if (this.data.oldIndex === 0) {
      this.setData({
        one_one: 'animated fadeOut',
        one_two: 'animated fadeOut',
        one_three: 'animated fadeOut',
        one_four: 'animated fadeOut',
        one_five: 'animated fadeOut',
        one_six: 'animated fadeOut'
      })
    } else if (this.data.oldIndex === 1) {
      this.setData({
        two_one: 'animated fadeOut',
        two_two: 'animated fadeOut',
        two_three: 'animated fadeOut',
        two_four: 'animated fadeOut',
        two_five: 'animated fadeOut',
        two_six: 'animated fadeOut',
        two_sev: 'animated fadeOut'
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad () {
    // TODO: onLoad

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady () {
    // TODO: onReady
    this.audioCtx = wx.createAudioContext('myAudio')
    this.audioPlay()
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow () {
    // TODO: onShow
    let that = this
    this.showAnimated()
    // bottom
    setTimeout(function () {
      that.setData({
        bottom: 'animated slideInUp'
      })
    }, 2000)
    setTimeout(function () {
      that.setData({
        bottom_one: 'animated slideInUp'
      })
    }, 2100)
    setTimeout(function () {
      that.setData({
        bottom_two: 'animated slideInUp'
      })
    }, 2200)
    setTimeout(function () {
      that.setData({
        bottom_three: 'animated slideInUp'
      })
    }, 2300)
    setTimeout(function () {
      that.setData({
        bottom_four: 'animated slideInUp'
      })
    }, 2400)
    setTimeout(function () {
      that.setData({
        bottom_one: 'bottom-4s-move'
      })
    }, 3100)
    setTimeout(function () {
      that.setData({
        bottom_two: 'bottom-3s-move'
      })
    }, 3200)
    setTimeout(function () {
      that.setData({
        bottom_three: 'bottom-2s-move'
      })
    }, 3300)
    setTimeout(function () {
      that.setData({
        bottom_four: 'bottom-1s-move'
      })
    }, 3400)
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide () {
    // TODO: onHide
    this.cleanAnimated()
    this.setData({
      bottom: '',
      bottom_one: '',
      bottom_two: '',
      bottom_three: '',
      bottom_four: ''
    })
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload () {
    // TODO: onUnload
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh () {
    // TODO: onPullDownRefresh
  }
})

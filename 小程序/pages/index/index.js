var util = require('../../utils/util.js');

Page({

  clickMe: function() {
    var time = util.formatTime(new Date());
    var times = time.split("/");
    var year = times[0];
    var mouth = times[1];
    var day = times[2].substring(0, 2);
    var time2 = times[2].substring(3, 11);
    var time3 = time2.split(":")
    var hour = time3[0]
    var min = time3[1];
    var nianganzhi = this.tg((year))
    var niandizhi = this.dz((Number(year) - 3) % 12)
    //console.log(typeof (Number(hour)))
    var shidizhi = this.sdz(Number(hour))
    //console.log(niandizhi)

    //mouth=times[1];
    var shanggua = (this.add(Number(niandizhi), Number(mouth), Number(day))) % 8
    console.log(shanggua)
    var xiagua = (this.add(Number(niandizhi), Number(mouth), Number(day), Number(shidizhi))) % 8
    console.log(xiagua)
    var guashu = this.suangua(shanggua, xiagua)
    //console.log(guashu)

    this.setData({
      year: year
    })
    this.setData({
      mouth: mouth
    })
    this.setData({
      day: day
    })
    this.setData({
      hour: hour
    })
    this.setData({
      min: min
    })
    this.setData({
      time: time2
    })
    this.setData({
      niandizhi: niandizhi
    })
    this.setData({
      shidizhi: shidizhi
    })
    this.setData({
      guashu: guashu
    })
    this.setData({
      guaxiang: 'http://img.fututa.com/bk/gua/g2.png'
    })
    this.setData({
      imageSrc: 'http://img.fututa.com/bk/gua/g'+guashu+'.png'
    })
  },


  tg: function(n) {
    var a = n - 2010
    switch (a) {
      case 1:
        return "辛"
      case 2:
        return "壬"
      case 3:
        return "癸"
      case 4:
        return "甲"
      case 5:
        return "乙"
      case 6:
        return "丙"
      case 7:
        return "丁"
      case 8:
        return "戊"
      case 9:
        return "己"
      case 0:
        return "庚"

    }
  },

  dz: function(n) {
    return n
    //return (n+9)%12
    //var a=n%12
    //console.log(a)
    // switch (n) {
    //   case 0: return "申"
    //   case 1: return "酉"
    //   case 2: return "戌"
    //   case 3: return "亥"
    //   case 4: return "子"
    //   case 5: return "丑"
    //   case 6: return "寅"
    //   case 7: return "卯"
    //   case 8: return "辰"
    //   case 9: return "巳"
    //   case 10: return "戊"
    //   case 11: return "未"

    // }
  },
  sdz: function(n) {
    //var a=n%12
    //console.log(a)
    switch (n) {
      case 15:
        return 9
      case 16:
        return 9
      case 17:
        return 10
      case 18:
        return 10
      case 19:
        return 11
      case 20:
        return 11
      case 21:
        return 12
      case 22:
        return 12
      case 0:
        return 1
      case 23:
        return 1
      case 1:
        return 2
      case 2:
        return 2
      case 3:
        return 3
      case 4:
        return 3
      case 5:
        return 4
      case 6:
        return 4
      case 7:
        return 5
      case 8:
        return 5
      case 9:
        return 6
      case 10:
        return 6
      case 11:
        return 7
      case 12:
        return 7
      case 13:
        return 8
      case 14:
        return 8

    }
  },
  add: function() {
    var sum = 0;
    for (var i = 0; i < arguments.length; i++) {
      sum += arguments[i];
    }
    return (sum);
  },
  suangua: function(a, b) {
    switch (a) {
      case 0:
        switch (b) {
          case 0:
            return 2
          case 1:
            return 11
          case 2:
            return 19
          case 3:
            return 36
          case 4:
            return 24
          case 5:
            return 46
          case 6:
            return 7
          case 7:
            return 15

        }
      case 1:
        switch (b) {
          case 0:
            return 12
          case 1:
            return 1
          case 2:
            return 10
          case 3:
            return 13
          case 4:
            return 25
          case 5:
            return 44
          case 6:
            return 6
          case 7:
            return 33

        }
      case 2:
        switch (b) {
          case 0:
            return 45
          case 1:
            return 43
          case 2:
            return 58
          case 3:
            return 49
          case 4:
            return 17
          case 5:
            return 28
          case 6:
            return 47
          case 7:
            return 31

        }
      case 3:
        switch (b) {
          case 0:
            return 35
          case 1:
            return 14
          case 2:
            return 38
          case 3:
            return 30
          case 4:
            return 21
          case 5:
            return 50
          case 6:
            return 64
          case 7:
            return 56
         
        }
      case 4:
        switch (b) {
          case 0:
            return 16
          case 1:
            return 34
          case 2:
            return 54
          case 3:
            return 55
          case 4:
            return 51
          case 5:
            return 32
          case 6:
            return 40
          case 7:
            return 62
        
        }
      case 5:
        switch (b) {
          case 0:
            return 20
          case 1:
            return 9
          case 2:
            return 61
          case 3:
            return 37
          case 4:
            return 42
          case 5:
            return 57
          case 6:
            return 59
          case 7:
            return 53
          
        }
      case 6:
        switch (b) {
          case 0:
            return 8
          case 1:
            return 5
          case 2:
            return 60
          case 3:
            return 63
          case 4:
            return 3
          case 5:
            return 48
          case 6:
            return 29
          case 7:
            return 39
          
        }
      case 7:
        switch (b) {
          case 0:
            return 23
          case 1:
            return 26
          case 2:
            return 41
          case 3:
            return 22
          case 4:
            return 27
          case 5:
            return 18
          case 6:
            return 4
          case 7:
            return 52
         
        }
      case 8:
        switch (b) {
          case 0:
            return 2
          case 1:
            return 11
          case 2:
            return 19
          case 3:
            return 36
          case 4:
            return 24
          case 5:
            return 46
          case 6:
            return 7
          case 7:
            return 15
         
        }
    
    }
  }
})
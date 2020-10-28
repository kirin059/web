/*
function handler(self){
    var target=document.querySelector('body')
    if(self.value==='night') {
      target.style.backgroundColor='black';
      target.style.color='white';
      document.querySelector('#click').value='day';

          var alist=document.querySelectorAll('a');
          var i=0;
          while(i < alist.length){
            alist[i].style.color='powderblue';
            i=i+1;
          }

    } else {
      target.style.backgroundColor='white';
      target.style.color='black';
      this.value='night';

          var alist=document.querySelectorAll('a');
          var i=0;
          while(i < alist.length){
            alist[i].style.color='blue';
            i=i+1;
          }
      }
  }
  */


  var Body = {
    setBackColor : function(color) {
    document.querySelector('body').style.backgroundColor=color;
    },
    setColor : function(color) {
      document.querySelector('body').style.color=color;
    }
  }

  var Link = {
    setColor : function (color){
      var alist=document.querySelectorAll('a');
      var i = 0;
      while(i < alist.length){
        alist[i].style.color=color;
        i=i+1;
      }
    }
  }

  function handler(self){
      var target=document.querySelector('body')
      if(self.value==='night') {
        Body.setBackColor('black');
        Body.setColor('white');
        self.value='day';

          Link.setColor('powderblue');

      } else {
        Body.setBackColor('white');
        Body.setColor('black');
        self.value='night';

          Link.setColor('blue');
        }
    }

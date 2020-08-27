$(document).ready(function(){
    let arrowWhite = true;
    setInterval(function(){
        if (arrowWhite == true)
        {
            $('#arrow-down').addClass('arrow-effect-on');
            arrowWhite = false;
        } else {
            $('#arrow-down').removeClass('arrow-effect-on');
            arrowWhite = true;
        }
    }, 1700);
    $('#home').click(function(e) {
      e.preventDefault();
      $('html,body').animate({ scrollTop: 0 },1000);
    });

    $('.scrollTop').click(function(e) {
      e.preventDefault();
      let target = $(this).attr('href');
      let targetPos = $(target).offset().top;
      $('html,body').animate({
        scrollTop: targetPos - 74 },1000);
  });
  
  $(window).scroll(function() { // 當卷軸移動時觸發
      let scrollPos = $(window).scrollTop(); // 取得目前卷軸高度，卷軸越往下滑，值越高
      let windowHeight = $(window).height(); // 取得視窗高度
      let isAbout = false; // 判斷是否已觸發關於我的顯示動畫
      let isSkill = false;
      let isResume = false;
      // let isLevel = false;
      // let isContact = false;
      $('.scrollTop').each(function(){ // 選取所有 錨點選項
        let target = $(this).attr('href');
        let targetPos = $(target).offset().top;
        let targetHeight = $(target).outerHeight(); // 取得 目標錨點 的區塊內容高度 outer代表(含padding)
        if (targetPos -74 <= scrollPos && (targetPos + targetHeight) > scrollPos + 56) {
          // 設置 卷軸移到某錨點區塊範圍內的條件
          // 條件一: 錨點卷軸高度扣除navbar高後 不能比 當前視窗捲軸高度 還高 ，如果 錨點卷軸高度值更多 表示 卷軸還沒到錨點位置(超出的部分為navbar高度)
          // 條件二: 錨點卷軸高度 +  錨點區塊內容高度 需大於 當前視窗捲軸高度+navbar高度 ，如果相反 表示 卷軸已經超過此區塊(扣除navbar高度)了
          $(this).removeClass('active'); // 先解除所有選單效果
          $(this).addClass('active'); // 再把符合條件的選單套入效果
        } else {
          $(this).removeClass('active'); // 當卷軸不在任何區塊範圍內，先將所有選項的效果移除
        }
      })
  })
  // skills mouse one effect
  $('.skill-icon-container').mouseout(function(){
    $(this).addClass('skill-icon-mouseout');
  });
  $('#html-area .skill-icon-container').hover(() => {
    $('#html-area .skillName').addClass('text-html');
  }, () => {
    $('#html-area .skillName').removeClass('text-html');
  });
  $('#js-area .skill-icon-container').hover(() => {
    $('#js-area .skillName').addClass('text-js');
  }, () => {
    $('#js-area .skillName').removeClass('text-js');
  });
  $('#bst-area .skill-icon-container').hover(() => {
    $('#bst-area .skillName').addClass('text-bst');
  }, () => {
    $('#bst-area .skillName').removeClass('text-bst');
  });
  $('#nodejs-area .skill-icon-container').hover(() => {
    $('#nodejs-area .skillName').addClass('text-nodejs');
  }, () => {
    $('#nodejs-area .skillName').removeClass('text-nodejs');
  });
  $('#git-area .skill-icon-container').hover(() => {
    $('#git-area .skillName').addClass('text-git');
  }, () => {
    $('#git-area .skillName').removeClass('text-git');
  });
  $('#vuejs-area .skill-icon-container').hover(() => {
    $('#vuejs-area .skillName').addClass('text-vuejs');
  }, () => {
    $('#vuejs-area .skillName').removeClass('text-vuejs');
  });

   $('.workbutton-list').hover(() => {
     $( '.workbutton-list').removeClass('.df-none');
   }), () => {
   };
});


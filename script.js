$(document).ready(function() {
  checkSupportedBorwser();

  $("#chk_all").prop("checked",false);
  setTerms();

  $(".lang .sel").click(function() {
      $(this).attr("aria-expanded", "true");
      $(".lang .lang_select_wrap").show();
  });
  $(".lang .lang_select").click(function() {
      $(".lang .lang_select_wrap").hide();
  });

  $("#btnLangKoKr").click(function() {
      changeLang("ko_KR");
  })

  $("#btnLangEnUs").click(function() {
      changeLang("en_US");
  })

  $("#btnLangHansCn").click(function() {
      changeLang("zh-Hans_CN");
  })

  $("#btnLangHansTw").click(function() {
      changeLang("zh-Hant_TW");
  })


  $("#chk_all").click(function() {
      location.hash = 'agreeBottom';
      setTerms();
  })

  $("#termsService").click(function() {
      viewTerms();
  })

  $("#termsPrivacy").click(function() {
      viewTerms();
  })

  $("#termsLocation").click(function() {
      viewTerms();
  })

  $("#termsEmail").click(function() {
      viewTerms();
  })

  $("#btnCancel").click(function(event) {
      clickcr(this, 'tos.disagree', '', '', event);
      submitDisagree();
      return false;
  })

  $("#btnAgree").click(function(event) {
      clickcr(this, 'tos.agree', '', '', event);
      submitAgree();
      return false;
  })

  $("#termForChild").click(function() {
      var agent = "PC";
      var url = "/user2/V2Join?m=kidGuide";

      if(agent == "M") {
          location.href = url;
      } else {
          window.open(url, "_blank");
      }
      return false;
  })

});

function changeLang(lang) {
  location.replace("/user2/V2Join?m=agree&lang=" + lang + "&agentType=");
}

function setTerms() {
  if ($("#chk_all").is(":checked")) {
      $("#termsService").prop("checked",true);
      $("#termsPrivacy").prop("checked",true);
      $("#termsLocation").prop("checked",true);
      $("#termsEmail").prop("checked",true);
  } else {
      $("#termsService").prop("checked",false);
      $("#termsPrivacy").prop("checked",false);
      $("#termsLocation").prop("checked",false);
      $("#termsEmail").prop("checked",false);
  }

  return true;
}

function checkSupportedBorwser() {
  var ua = navigator.userAgent;
  var msg = "인터넷 익스플로러 8.0 이하 버전은 지원하지 않습니다.";

  if(ua.indexOf("MSIE 6") > 0 || ua.indexOf("MSIE 7") > 0 || ua.indexOf("MSIE 8") > 0)  {
      alert(msg);
      location.replace("https://campaign.naver.com/goodbye_ie10/");
  }
}

function viewTerms() {

  if( !$("#termsService").is(":checked") || !$("#termsPrivacy").is(":checked") || !$("#termsLocation").is(":checked") || !$("#termsEmail").is(":checked")) {
      $("#chk_all").prop("checked",false);
  }

  if( $("#termsService").is(":checked") && $("#termsPrivacy").is(":checked") && $("#termsLocation").is(":checked") && $("#termsEmail").is(":checked")) {
      $("#chk_all").prop("checked",true);
  }

  return true;
}

function checkTerms() {
  var res = true;

  if ($("#termsService").is(":checked") == false || $("#termsPrivacy").is(":checked") == false) {
      $("#agreeMsg").show();
      res = false;
  } else {
      $("#agreeMsg").hide();
  }

  return res;
}

function submitAgree() {
  if (checkTerms() != true) {
      return false;
  }

  $("#join_form").submit();
  return true;
}

function submitDisagree() {
  location.href = "http://www.naver.com";
  return true;
}
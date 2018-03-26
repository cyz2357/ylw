//function setCookie(key, value, t) {
//            if (t > 0) {
//                var oDate = new Date();
//                oDate.setDate(oDate.getDate() + t);
//                document.cookie = key + "=" + value + "; expires=" + oDate.toDateString();
//            }
//}
function setCookie(name, value) {
    var Days = 30;
    var exp = new Date();
    exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
    document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString();
}

function resettime() {
    var nowdate = new Date();
    var researchBeginTime = getCookie("researchBeginTime");
    if (researchBeginTime != null && researchBeginTime != "undefined") $("#dStart").val(researchBeginTime);
    else
    {
        nowdate.setMonth(nowdate.getMonth() -1);
        var dateString = nowdate.toLocaleDateString().replace(/\//g, "-");
        //console.log(dateString.replace(/\//g, "-"));

        console.log(dateString);
        dateString = dateString.replace(/年/g, "-");
        dateString = dateString.replace(/月/g, "-");
        dateString = dateString.replace(/日/g, "");
        $("#dStart").val(dateString);
        //$("#dStart").off().on("focus", function () {
        //    var startDate = dateString;
        //    WdatePicker({ dStart: startDate });
        //});  
    }
    var researchEndTime = getCookie("researchEndTime");
    if (researchEndTime != null && researchBeginTime != "undefined") $("#dEnd").val(researchEndTime);
    else {
        var aaaa = new Date().toLocaleDateString().replace(/\//g, "-");

        aaaa = aaaa.replace(/年/g, "-");
        aaaa = aaaa.replace(/月/g, "-");
        aaaa = aaaa.replace(/日/g, "");
        $("#dEnd").val(aaaa);
        //$("#dEnd").off().on("focus", function () {
        //    var startDate = aaaa;
        //    WdatePicker({ dEnd: startDate });
        //});  
        //console.log(new Date().toLocaleDateString().replace(/\//g, "-"));
        //console.log(new Date().toLocaleDateString());
    }

    $('#btn_add').on('click', function () {
        $('#modal_add').modal('show');
    });
    $('#btn_Search').click(function () {
        setCookie("researchBeginTime", "");
        setCookie("researchBeginTime", $("#dStart").val());
        setCookie("researchEndTime", "");
        setCookie("researchEndTime", $("#dEnd").val());
    });
};

function resettime_1() {
    var nowdate = new Date();
    var researchBeginTime = getCookie("researchBeginTime");
    if (researchBeginTime != null && researchBeginTime != "undefined") $("#dStart").val(researchBeginTime);
    else {
        nowdate.setMonth(nowdate.getMonth() - 1);
        var dateString = nowdate.toLocaleDateString().replace(/\//g, "-");
        //console.log(dateString.replace(/\//g, "-"));
        console.log(dateString);
        dateString = dateString.replace(/年/g, "-");
        dateString = dateString.replace(/月/g, "-");
        dateString = dateString.replace(/日/g, "");
        $("#dStart").val(dateString);
        $("#dStart").val("2017-01-01");
    }
    var researchEndTime = getCookie("researchEndTime");
    if (researchEndTime != null && researchBeginTime != "undefined") $("#dEnd").val(researchEndTime);
    else {
        var aaaa = new Date().toLocaleDateString().replace(/\//g, "-");
        aaaa = aaaa.replace(/年/g, "-");
        aaaa = aaaa.replace(/月/g, "-");
        aaaa = aaaa.replace(/日/g, "");
        $("#dEnd").val(aaaa);
        //console.log(new Date().toLocaleDateString().replace(/\//g, "-"));
        //console.log(new Date().toLocaleDateString());
    }

    $('#btn_add').on('click', function () {
        $('#modal_add').modal('show');
    });
    $('#btn_Search').click(function () {

        setCookie("researchBeginTime", "");
        setCookie("researchBeginTime", $("#dStart").val());
        setCookie("researchEndTime", "");
        setCookie("researchEndTime", $("#dEnd").val());
    });
};

function resettime_2() {
    var nowdate = new Date();
    var researchBeginTime = getCookie("researchBeginTime");
    if (researchBeginTime != null && researchBeginTime != "undefined") {
        $("#dStart").val(researchBeginTime);
    }
    else {

    }
    var researchEndTime = getCookie("researchEndTime");
    if (researchEndTime != null && researchBeginTime != "undefined") {
        $("#dEnd").val(researchEndTime);
    }
    else {

    }

    $('#btn_Search').click(function () {

        setCookie("researchBeginTime", "");
        setCookie("researchBeginTime", $("#dStart").val());
        setCookie("researchEndTime", "");
        setCookie("researchEndTime", $("#dEnd").val());
    });
};

function resettime_3() {
    var nowdate = new Date();
    var researchBeginTime = getCookie("researchBeginTime");
    if (researchBeginTime != null && researchBeginTime != "undefined") {
        $("#dStart").val(researchBeginTime);
    }
    else {
        var as = new Date();
        $("#dStart").val(as.getFullYear());
    }
    var researchEndTime = getCookie("researchEndTime");
    if (researchEndTime != null && researchBeginTime != "undefined") {
        $("#dEnd").val(researchEndTime);
    }
    else {

    }

    $('#btn_Search').click(function () {

        setCookie("researchBeginTime", "");
        setCookie("researchBeginTime", $("#dStart").val());
        setCookie("researchEndTime", "");
        setCookie("researchEndTime", $("#dEnd").val());
    });
};




function getArea(pid, id) {
    $.getJSON("/BSManager/BSArea/GetBSArea", { PID: pid }, function (data) {
        $("#" + id + " option").remove();
        if (data && data.length > 0) {
            var htmlstr = ""
            for (var i = 0; i < data.length; i++) {
                htmlstr += "<option value='" + data[i].AreaID + "'>" + data[i].cAreaName + "</option>";
            }
            $("#" + id + "").append(htmlstr);
        }
        if (id == "sheng") {
            $("#sheng").val('@ViewBag.cAxises[1]');
            gradeChange();
        }
        if (id == "shi") {
            $("#shi").val('@ViewBag.cAxises[2]');
            gradeChange2();
        }
        $("#xian").val('@ViewBag.cAxises[3]');
    })
}
function gradeChange() {
    getArea($("#sheng").val(), "shi")
}
function gradeChange2() {
    getArea($("#shi").val(), "xian")
}
$('.inner').focus(function () {
    $('.outer').addClass('border-blue');
})
$('.inner1').focus(function () {
    $('.outer1').addClass('border-blue');
})
$('.inner2').focus(function () {
    $('.outer2').addClass('border-blue');
})
$('.inner3').focus(function () {
    $('.outer3').addClass('border-blue');
})
$('.inner4').focus(function () {
    $('.outer4').addClass('border-blue');
})

$('.inner').blur(function () {
    $('.outer').removeClass('border-blue');
})
$('.inner1').blur(function () {
    $('.outer1').removeClass('border-blue');
})
$('.inner2').blur(function () {
    $('.outer2').removeClass('border-blue');
})
$('.inner3').blur(function () {
    $('.outer3').removeClass('border-blue');
})
$('.inner4').blur(function () {
    $('.outer4').removeClass('border-blue');
})

function unique(arr) {
    var result = [], hash = {};
    for (var i = 0, elem; (elem = arr[i]) != null; i++) {
        if (!hash[elem]) {
            result.push(elem);
            hash[elem] = true;
        }
    }
    return result;
}
function Tooltips(id, content) {
    var MyTool = new Object;
    MyTool.show = function () {
        if ($('#' + id + '_zxm').length == 0) {
            var vcurrent = document.getElementById(id);
            var newNodeBottom = document.createElement("span");
            newNodeBottom.title = "sign";
            newNodeBottom.id = id + '_zxm';
            newNodeBottom.className = 'wrongSpan';
            newNodeBottom.innerHTML = content;
            vcurrent.parentNode.insertBefore(newNodeBottom, vcurrent.nextSibling);
            $('#' + id).addClass('wrongborder');
        }

    };
    MyTool.close = function () {
        $('#' + id + '_zxm').remove();
        $('#' + id).removeClass('wrongborder');
    }
    return MyTool;
}
function cleartooltips() {
    var inputs = document.getElementsByTagName("input");
    for (var i = 0; i < inputs.length; i++) {
        var empty = Tooltips(inputs[i].id, 'clear');
        empty.close();
    }
}

function FormSubmit() {
    var inputs = document.getElementsByTagName("input");
    var boo = new Boolean;
    for (var i = 0; i < inputs.length; i++) {
        var sign = inputs[i].dataset.sign;
        if (sign == 'empty') {
            if (inputs[i].value == "" || inputs[i].value == null) {
                inputs[i].focus();
                var empty = Tooltips(inputs[i].id, inputs[i].title + '不能为空');
                empty.show();
                $('#save').get(0).disabled = false;
                if ($('#ContinueBtn').length > 0) {
                    $('#ContinueBtn').get(0).disabled = false;
                }
                
                boo = false;
                //return false;
            }
        } else if (sign == 'phone') {
            var empty = Tooltips(inputs[i].id, '联系方式不能为空');
            var format = Tooltips(inputs[i].id, '联系方式格式不正确');
            var mobile = /^1[3|5|8]\d{9}$/;
            if (!inputs[i].value) {
                empty.show();
                $('#save').get(0).disabled = false;
                if ($('#ContinueBtn').length > 0) {
                    $('#ContinueBtn').get(0).disabled = false;
                }
                boo = false;
            } else {
                empty.close();
                if (!mobile.test(inputs[i].value)) {
                    format.show();
                    $('#save').get(0).disabled = false;
                    if ($('#ContinueBtn').length > 0) {
                        $('#ContinueBtn').get(0).disabled = false;
                    }
                    boo = false;
                } else {
                    format.close();
                }
            }
        } else if (sign == 'mail'){
            var empty = Tooltips(inputs[i].id, '邮箱不能为空');
            var format = Tooltips(inputs[i].id, '邮箱格式不正确');
            var mail = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
            if (!inputs[i].value) {
                empty.show();
                $('#save').get(0).disabled = false;
                if ($('#ContinueBtn').length > 0) {
                    $('#ContinueBtn').get(0).disabled = false;
                }
                boo = false;
            } else {
                empty.close();
                if (!mail.test(inputs[i].value)) {
                    format.show();
                    $('#save').get(0).disabled = false;
                    if ($('#ContinueBtn').length > 0) {
                        $('#ContinueBtn').get(0).disabled = false;
                    }
                    boo = false;
                } else {
                    format.close();
                }
            }
        } else if (sign == 'IDcard') {
            var empty = Tooltips(inputs[i].id, '身份证不能为空');
            var format = Tooltips(inputs[i].id, '身份证格式不正确');
            var regIdNo = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;  
            if (!inputs[i].value) {
                empty.show();
                $('#save').get(0).disabled = false;
                if ($('#ContinueBtn').length > 0) {
                    $('#ContinueBtn').get(0).disabled = false;
                }
                boo = false;
            } else {
                empty.close();
                if (!regIdNo.test(inputs[i].value)) {
                    format.show();
                    $('#save').get(0).disabled = false;
                    if ($('#ContinueBtn').length > 0) {
                        $('#ContinueBtn').get(0).disabled = false;
                    }
                    boo = false;
                } else {
                    format.close();
                }
            }
        }


    }
    return boo;
}


function InputEmpty(id, content) {
    $('#' + id).blur(function (e) {
        //console.log(this.value);
        var val = this.value;
        var empty = Tooltips(id, content);
        if (!val) {
            empty.show();
        } else {
            empty.close();
        }
    });
}

function InputPhone(id) {
    $('#' + id).blur(function (e) {
        //console.log(this.value);
        var val = this.value;
        var empty = Tooltips(id, '联系方式不能为空');
        var format = Tooltips(id, '联系方式格式不正确');
        var mobile = /^1[3|5|8]\d{9}$/;
        if (!val) {
            empty.show();
        } else {
            empty.close();
            if (!mobile.test(val)) {
                format.show();
            } else {
                format.close();
            }
        }

    });
}

function InputID(id) {
    $('#' + id).blur(function (e) {
        //console.log(this.value);
        var val = this.value;
        var empty = Tooltips(id, '身份证不能为空');
        var format = Tooltips(id, '身份证格式不正确');
        var regIdNo = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;  
        if (!val) {
            empty.show();
        } else {
            empty.close();
            if (!regIdNo.test(val)) {
                format.show();
            } else {
                format.close();
            }
        }

    });
}

function InputMail(id) {
    $('#' + id).blur(function (e) {
        //console.log(this.value);
        var val = this.value;
        var empty = Tooltips(id, '邮箱不能为空');
        var format = Tooltips(id, '邮箱不正确');
        var mail = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
        if (!val) {
            empty.show();
        } else {
            empty.close();
            if (!mail.test(val)) {
                format.show();
            } else {
                format.close();
            }
        }

    });
}
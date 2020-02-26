// var player_1_name = ""
// var player_2_name = ""
function subPlay1() {
    var player_1_name = document.getElementById("player_1").value;
    // alert(player_1_name)
}
function subPlay2() {
    var player_2_name = document.getElementById("player_2").value;
    // alert(player_2_name)
}
var count = 1;
function start() {
    change(count)
    // var player_1_name = document.getElementById("player_1").value;
    // alert(player_1_name + "'s Turn")
}
// var count = 1;

var row_1 = []
var row_2 = []
var row_3 = []
var col_1 = []
var col_2 = []
var col_3 = []
var dia_1 = []
var dia_2 = []
function fill11() {
    var r1c1 = document.getElementById("col_11")
    var value = document.getElementById("btn_11").innerHTML
    r1c1.innerHTML = value;
    count++;
    // decideWinner(count)
    // decideWinner(count)
    row_1.push(r1c1.innerHTML)
    col_1.push(r1c1.innerHTML)
    dia_1.push(r1c1.innerHTML)
    change(count)
}
function fill12() {
    var r1c2 = document.getElementById("col_12")
    var value = document.getElementById("btn_12").innerHTML
    r1c2.innerHTML = value;
    count++;
    // decideWinner(count)
    // change(count)
    // decideWinner(count)
    row_1.push(r1c2.innerHTML)
    col_2.push(r1c2.innerHTML)
    change(count)
}
function fill13() {
    var r1c3 = document.getElementById("col_13")
    var value = document.getElementById("btn_13").innerHTML
    r1c3.innerHTML = value;
    count++;
    // decideWinner(count)
    // change(count)
    // decideWinner(count)
    row_1.push(r1c3.innerHTML)
    col_3.push(r1c3.innerHTML)
    dia_2.push(r1c3.innerHTML)
    change(count)
}
function fill21() {
    var r2c1 = document.getElementById("col_21")
    var value = document.getElementById("btn_21").innerHTML
    r2c1.innerHTML = value;
    count++;
    // decideWinner(count)
    // change(count)
    // decideWinner(count)
    row_2.push(r2c1.innerHTML)
    col_1.push(r2c1.innerHTML)
    change(count)
}
function fill22() {
    var r2c2 = document.getElementById("col_22")
    var value = document.getElementById("btn_22").innerHTML
    r2c2.innerHTML = value;
    count++;
    // decideWinner(count)
    // change(count)
    // decideWinner(count)
    row_2.push(r2c2.innerHTML)
    col_2.push(r2c2.innerHTML)
    dia_1.push(r2c2.innerHTML)
    dia_2.push(r2c2.innerHTML)
    change(count)
}
function fill23() {
    var r2c3 = document.getElementById("col_23")
    var value = document.getElementById("btn_23").innerHTML
    r2c3.innerHTML = value;
    count++;
    // decideWinner(count)
    // change(count)
    // decideWinner(count)
    row_2.push(r2c3.innerHTML)
    col_3.push(r2c3.innerHTML)
    change(count)
}
function fill31() {
    var r3c1 = document.getElementById("col_31")
    var value = document.getElementById("btn_31").innerHTML
    r3c1.innerHTML = value;
    count++;
    // decideWinner(count)
    // change(count)
    // decideWinner(count)
    row_3.push(r3c1.innerHTML)
    col_1.push(r3c1.innerHTML)
    dia_2.push(r3c1.innerHTML)
    change(count)
}
function fill32() {
    var r3c2 = document.getElementById("col_32")
    var value = document.getElementById("btn_32").innerHTML
    r3c2.innerHTML = value;
    count++;
    row_3.push(r3c2.innerHTML)
    col_2.push(r3c2.innerHTML)
    change(count)
}
function fill33() {
    var r3c3 = document.getElementById("col_33")
    var value = document.getElementById("btn_33").innerHTML
    r3c3.innerHTML = value;
    count++;
    // decideWinner(count)
    // change(count)
    row_3.push(r3c3.innerHTML)
    col_3.push(r3c3.innerHTML)
    dia_1.push(r3c3.innerHTML)
    change(count)
}
var n = 0;
function change(num) {
    while(n == 0){
        if(num > 5) {
            if (row_1[0] == 'O' && row_1[1] == 'O' && row_1[2] == 'O' || row_2[0] == 'O' && row_2[1] == 'O' && row_2[2] == 'O' || row_3[0] == 'O' && row_3[1] == 'O' && row_3[2] == 'O' || col_1[0] == 'O' && col_1[1] == 'O' && col_1[2] == 'O' || col_2[0] == 'O' && col_2[1] == 'O' && col_2[2] == 'O' || col_3[0] == 'O' && col_3[1] == 'O' && col_3[2] == 'O' || dia_1[0] == 'O' && dia_1[1] == 'O' && dia_1[2] == 'O' || dia_2[0] == 'O' && dia_2[1] == 'O' && dia_2[2] == 'O') {
                var player_2_name = document.getElementById("player_2").value;
                alert(player_2_name + " Wins!")
                n = 1;
                break;
            }
            else if (row_1[0] == 'X' && row_1[1] == 'X' && row_1[2] == 'X' || row_2[0] == 'X' && row_2[1] == 'X' && row_2[2] == 'X' || row_3[0] == 'X' && row_3[1] == 'X' && row_3[2] == 'X' || col_1[0] == 'X' && col_1[1] == 'X' && col_1[2] == 'X' || col_2[0] == 'X' && col_2[1] == 'X' && col_2[2] == 'X' || col_3[0] == 'X' && col_3[1] == 'X' && col_3[2] == 'X' || dia_1[0] == 'X' && dia_1[1] == 'X' && dia_1[2] == 'X' || dia_2[0] == 'X' && dia_2[1] == 'X' && dia_2[2] == 'X') {
                var player_1_name = document.getElementById("player_1").value;
                alert(player_1_name + " Wins!")
                n = 1;
                break;
            }

        }
        if (count > 9) {
            alert("Tie!")
            n = 1;
            break;
        }
        if (count % 2 == 0) {
            var player_2_name = document.getElementById("player_2").value;
            alert(player_2_name + "'s Turn")
            while (true) {
                each = document.getElementsByClassName("inner_btn")
                for (var i = 0; i < each.length; i++) {
                    each_elem = each[i]
                    each_elem.innerHTML = "O"
                }
                break;
            }
            break;
        }
        else {
            var player_1_name = document.getElementById("player_1").value;
            alert(player_1_name + "'s Turn")
            while (true) {
                each = document.getElementsByClassName("inner_btn")
                for (var i = 0; i < each.length; i++) {
                    each_elem = each[i]
                    each_elem.innerHTML = "X"
                }
                break;
            }
            break;
        }
    }
}





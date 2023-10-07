function gen() {
    document.getElementById("pn").style.display = "none";
    var sav = document.getElementById("sav");
    sav.style.display = "block";
    var t = document.getElementById("b");
    // console.log(t.value);
    if (t.value == "") {
        console.log("empty");
        sav.innerHTML = "Please enter your pin....";
        document.getElementById("pn").style.display = "block";
    }
    else {
        sav.innerHTML = "PIN Generation...sucss";
        document.location.href = "bank.html";
    }

}
function no() {
    document.getElementById("ba").style.display = "none";
    document.getElementById("wid").style.display = "none";
    document.getElementById("chng").style.display = "none";
    document.getElementById("mini").style.display = "none";
    document.getElementById("savcur").style.display = "none";
    document.getElementById("prec").style.display = "none";
    document.getElementById("ent").style.display = "none";
}
function bal() {
    no();
    bal = document.getElementById("ba");
    bal.style.display = "block";
    bal.style.textAlign = "center";
    // bal.style.padding = "1% 0% 0px 0px";
    dis = document.getElementById("display");
    dis.style.display = "block";
    dis.innerHTML = "Your acc receipt.";

}
function show() {
    document.location.href = "bank.html";

}

function widr() {
    no();
    dis = document.getElementById("display");
    window.location.href = "withdraw.html";

}
function chnpin() {
    no();
    dis = document.getElementById("chnpn");
    dis.style.display = "block";

}
function re() {
    dis = document.getElementById("pnnew");
    con = document.getElementById("pnnewc");
    if (dis.value == "" || con.value == "") {
        console.log("empty");
        document.getElementById("inf").innerHTML = "Please Enter PIN";
    }
    else {
        old = dis.value;
        newp = con.value;
        console.log(newp);
        console.log(old);
        if (old == newp) {
            console.log("pin matched");
            document.getElementById("inf").innerHTML = "PIN Changd ";
        }
        else {
            console.log("val unmatche");
            document.getElementById("inf").innerHTML = "PIN not Changd ..old and new pin didnt match..click try again";
            agn = document.getElementById("try");
            agn.style.display="block";
            agn.innerHTML= "TRY AGAIN";
        
        }
    }
    
}
function empt(){
    dis = document.getElementById("pnnew");
    con = document.getElementById("pnnewc");
    dis.value="";
    con.value="";
    
}
function rec() {
    // document.location.href = "bankTrans.html";
    var bnk = document.getElementById("bnk");
    var y = document.getElementById("num");
    w = document.getElementById("not");
    if (y.value == "") {
        w.innerHTML = "Please Enter the Amount..";
        w.style.display = "block";
        console.log("empy");
    }
    else {
        console.log("empy no");
        document.getElementById("em").innerHTML = "your Transcation is being Processed.<br>Please Wait..";
        bnk.style.display = "none";
        w.style.display = "none";
        setTimeout(col, 2000);
    }
}

function col() {
    document.getElementById("em").innerHTML = "Please Collect cash.";
    setTimeout(thank, 1000);
}

function thank() {
    document.getElementById("em").innerHTML = "Thank you!.";
    document.location.href = "welcome.html";
}

function stat(){
    no();
    document.getElementById("mini").style.display = "block";
    document.getElementById("st").innerHTML = "your mini sattement";
        }

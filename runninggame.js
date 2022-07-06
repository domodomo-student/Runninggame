console.log("難易度　色順　水色(Lv1)→緑(Lv2)→青(Lv3)→紫(Lv4)→赤(Lv5)")//Lv別背景色
let canvas = document.getElementById("canvas");//キャンバス描画ができるようにする
let box = canvas.getContext("2d");
let id = setInterval(draw, 10);//drawのインターバル設定
let id1 = setInterval(c, 1);
setInterval(scores,  1000);
let playerX = 200;//プレイヤーの初期X座標
let playerY = 250;//プレイヤーの初期Y座標
let objX = 800;//オブジェクトの初期X座標
let objY = 250;//オブジェクトの初期Y座標
let count = Math.random();//初期スピード
count = count + 5;
let score = 0;
let hard = 1;//ハードモードの初期値
function c() {
        if (objX <= playerX + 80 && objX >= playerX -20 && playerY == 250){//Game Over判定
            setTimeout(() => {//遅延させる
                clearInterval(id);
                clearInterval(id1);
                box.font = "50px 'ＭＳ ゴシック'";
                box.fillStyle = "#000000";
                box.fillText("GAME OVER...", 250, 150, );
              }, 10);
        }
}
function draw() {
    if(hard == 1) {
        box.fillStyle = "#b8e2fc";//Lv1の背景色
        box.fillRect(0,0,800,300);//Lv1の背景座標
    }else if(hard == 1.5){
        box.fillStyle = "#008000";//Lv2の背景色
        box.fillRect(0,0,800,300);//Lv2の背景座標
    }else if(hard == 2) {
        box.fillStyle = "#1e90ff";//Lv3の背景色
        box.fillRect(0,0,800,300);//Lv3の背景座標
    }else if(hard == 2.5){
        box.fillStyle = "#800080";//Lv4の背景色
        box.fillRect(0,0,800,300);//Lv4の背景座標
    }else if(hard == 3) {
        box.fillStyle = "#ff0000";//Lv5の背景色
        box.fillRect(0,0,800,300);//Lv5の背景座標
    }
    box.fillStyle = "#cc7b18";//地面の色
    box.fillRect(0,300,800,100)//背景の座標

    box.fillStyle = "#000000";//スコア文字色
    box.font = "30px 'MS ゴシック'";//スコア文字種
    box.fillText("SCORE : " + score, 10, 40,);//スコアの座標

    let player = new Image();//プレイヤー(猫)
    player.src = "https://3.bp.blogspot.com/-_t105PDFMl4/WR_LHiyapRI/AAAAAAABEds/xAtc3dg1NvkwtXv92BL475SJwkf9-35tQCLcB/s400/run_cat_smile.png";
    box.drawImage(player, playerX, playerY - 30, 100, 100);

    let obj = new Image();//オブジェクト(サッカーボール)
    obj.src = "https://3.bp.blogspot.com/-qTxWBfvC9jE/UkJLE3HddxI/AAAAAAAAYNg/xrpj44TzxLo/s800/sport_soccerball.png";
    box.drawImage(obj, objX, objY, 50, 50);

    if(score >= 10 && score < 20) {//ハードモード転換値
        hard = 1.5;//ハードモード倍速値
    }else if(score >= 20 && score < 30) {
        hard = 2;
    }else if(score >= 30 && score < 40){
        hard = 2.5;
    }else if(score >= 40) {
        hard = 3;
    }

    objX = objX - count;//オブジェクトを移動させる

    if(objX < -100) {
        objX = 800;
        count = Math.random() * 9 * hard;
        if (count <= 5){
            count = count + 5;//countを5以下にさせない
        }
    }

    document.onkeydown = keydown;
    function keydown(e) {
       if(playerY == 250 && e.which == 38) {//上矢印でのジャンプ
          playerY -= 100;
          setTimeout(() => {//ジャンプ後の着地までのクールタイム
            playerY += 100;
          }, 460);
       }
       if (e.which == 40) {
        alert("一時停止");//下矢印の一時停止
       }
    } 
}
function reset(){
    location.reload();//リプレイボタン
}
function scores() {
    score++;//1秒1SCORE
}

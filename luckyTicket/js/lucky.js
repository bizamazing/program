///////////////////////////////////////
// 数字部分を作成する
///////////////////////////////////////
function viewnumberarea(m){
    // 要素追加するための変数
    let view = '';
    // m回分を回すfor文
    for(let i=1;i<=m;i++){
        view += '<div class="line column'+i+'">';
        // 0~9の数値を作成
        for(let k=0;k<10;k++){
            view += '<p class="number">'+k+'</p>';
        }
        view += '</div>';
    }
    $('.numberarea').html(view);
}

///////////////////////////////////////
// セレクト部分をトリガーとする
///////////////////////////////////////
$(document).on('change', '.selectkind', function(){
    let selected = $(this).val();
    // 数字部分を記載する
    viewnumberarea(selected);
    // 予想数字の表示部分を空にする
    $('.forecastarea').empty();
    // ロゴマークも合わせて変更する
    let view = '<img src="img/'+selected+'.png" class="imglogo" />';
    $('.logoarea').html(view);
    // 予想ボタンにidを付与する
    $('.btn').attr('id', selected);
})

///////////////////////////////////////
// ランダム数値を作成する
///////////////////////////////////////
function createrandom(count){
    let randomnumber = Math.floor(Math.random()*10);
    let view = '<p class="forecastnumber">'+randomnumber+'</p>';
    // htmlへ追記
    $('.forecastarea').append(view);
    //  数値エリアにある数字で予想した数字にcss
    $('.column'+count).children('p').eq(randomnumber).addClass('randomselect');
}

///////////////////////////////////////
// 演出（1秒ずつ予想数字を表示）
///////////////////////////////////////
function timePerformance(m){
    let count = 1;
    let set = setInterval(function(){
        // ランダム数値を作成
        createrandom(count);
        // カウント
        count = count + 1;
        if(count > m){
            // 1秒ごとの繰り返し処理を終了
            clearInterval(set);
        }}, 1000);
}

///////////////////////////////////////
// ボタンを押したらランダム数値が反映
///////////////////////////////////////
$(document).on('click', '.btn', function(){
    // 前回実行分をリセットする
    $('.forecastarea').empty();
    $('p').removeClass('randomselect');

    // キーとなるidを取得する
    let key = $(this).attr('id');
    timePerformance(key);
});

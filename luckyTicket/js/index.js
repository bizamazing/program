// console.log('test');
///////////////////////////////////////////
// 変数一覧
///////////////////////////////////////////
let numbers = [];

let bingo = [];
let bingomini = [];

let loto = [];
let lotoSelect = [];




///////////////////////////////////////////
// VIEW
///////////////////////////////////////////
// ミニロト3
function viewNumbers3(){
    let view = `
        <div class="numbers3">
            <div class="logo">
                <img src="img/numbers3.png" class="numbersImg">
            </div>
        </div>
        <div class="main">
        </div>
    `;
    return view;
}

// ミニロト用
function viewColumn(m){
    let view = '';
    for(let i=1;i<=m;i++){
        view += `
            <div class="column">
                <div class="column`+i+` numbers" id="selected`+i+`"></div>
                <div class="column`+i+`" id=0>0</div>
                <div class="column`+i+`" id=1>1</div>
                <div class="column`+i+`" id=2>2</div>
                <div class="column`+i+`" id=3>3</div>
                <div class="column`+i+`" id=4>4</div>
                <div class="column`+i+`" id=5>5</div>
                <div class="column`+i+`" id=6>6</div>
                <div class="column`+i+`" id=7>7</div>
                <div class="column`+i+`" id=8>8</div>
                <div class="column`+i+`" id=9>9</div>
            </div>
        `;
    }
    return view;
}

// ミニロト4
function viewNumbers4(){
    let view = `
        <div class="numbers4">
            <div class="logo">
                <img src="img/numbers4.png" class="numbersImg">
            </div>
        </div>
        <div class="main">
        </div>
    `;
    return view;
}

// Bingo5
function viewBingo5(){
    let view = `
        <div class="bingo5">
            <div class="logo">
                <img src="img/bingo5.png" class="numbersImg">
            </div>
        </div>
        <div class="mainarea">
        </div>
    `;
    return view;
}

// Bingo5用Column
function viewBingoBox(array){
    let view = '';
    for(let m=0;m<array.length;m++){
        if(m ==0 || m == 3 || m ==6){
            view += `
            <div class="line">
                <div class="box`+m+` oneblock">
                    <div class="row two">
                        <div id="`+array[m][0]+`"><span>`+array[m][0]+`</span></div>
                        <div id="`+array[m][1]+`"><span>`+array[m][1]+`</span></div>
                    </div>
                    <div class="row">
                        <div id="`+array[m][2]+`"><span>`+array[m][2]+`</span></div>
                    </div>
                    <div class="row two">
                        <div id="`+array[m][3]+`"><span>`+array[m][3]+`</span></div>
                        <div id="`+array[m][4]+`"><span>`+array[m][4]+`</span></div>
                    </div>
                </div>
            `;
        }else if(m==2 || m == 5 || m == 8){
            view += `
                <div class="box`+m+` oneblock">
                    <div class="row two">
                        <div id="`+array[m][0]+`"><span>`+array[m][0]+`</span></div>
                        <div id="`+array[m][1]+`"><span>`+array[m][1]+`</span></div>
                    </div>
                    <div class="row">
                        <div id="`+array[m][2]+`"><span>`+array[m][2]+`</span></div>
                    </div>
                    <div class="row two">
                        <div id="`+array[m][3]+`"><span>`+array[m][3]+`</span></div>
                        <div id="`+array[m][4]+`"><span>`+array[m][4]+`</span></div>
                    </div>
                </div>
            </div>
            `;
        }else if(m == 4){
            view += `
                <div class="box`+m+` oneblock">
                    <div class="freearea"><span>`+array[m][0]+`</span></div>
                </div>
            `;
        }else{
            view += `
            <div class="box`+m+` oneblock">
                <div class="row two">
                    <div id="`+array[m][0]+`"><span>`+array[m][0]+`</span></div>
                    <div id="`+array[m][1]+`"><span>`+array[m][1]+`</span></div>
                </div>
                <div class="row">
                    <div id="`+array[m][2]+`"><span>`+array[m][2]+`</span></div>
                </div>
                <div class="row two">
                    <div id="`+array[m][3]+`"><span>`+array[m][3]+`</span></div>
                    <div id="`+array[m][4]+`"><span>`+array[m][4]+`</span></div>
                </div>
            </div>
            `;
        }
    }
    $('.mainarea').append(view);
}

// miniLOTO用
function viewMiniloto(){
    let view = `
        <div class="loto">
            <div class="logo">
                <img src="img/miniloto.png" class="numbersImg">
            </div>
        </div>
        <div class="answerarea">
        </div>
        <div class="numberarea">
        </div>
    `;
    return view;
}

// miniLotoNumber用
function viewMinilotoNumber(array){
    let view = '';
    for(let i=1;i<=array.length;i++){
        if(i==1 || i == 11|| i == 21){
            view += `
                <div class="line">
                    <div class="block" id="`+i+`">`+i+`</div>
            `;
        }else if(i==10 || i ==20|| i==30){
            view += `
                <div class="block" id="`+i+`">`+i+`</div>
            </div>
            `;
        }else{
            view += '<div class="block" id="'+i+'">'+i+'</div>';
        }
    }
    $('.numberarea').append(view);
}

// loto6用
function viewloto6(){
    let view = `
        <div class="loto">
            <div class="logo">
                <img src="img/loto6.png" class="numbersImg">
            </div>
        </div>
        <div class="answerarea">
        </div>
        <div class="numberarea">
        </div>
    `;
    return view;
}

// loto6用
function viewloto6Number(array){
    let view = '';
    for(let i=1;i<=array.length;i++){
        if(i==1 || i == 11|| i == 21 || i == 31 || i == 41){
            view += `
                <div class="line">
                    <div class="block" id="`+i+`">`+i+`</div>
            `;
        }else if(i==10 || i ==20|| i==30 || i == 40 || i == 43){
            view += `
                <div class="block" id="`+i+`">`+i+`</div>
            </div>
            `;
        }else{
            view += '<div class="block" id="'+i+'">'+i+'</div>';
        }
    }
    $('.numberarea').append(view);
}

// loto7用
function viewloto7(){
    let view = `
        <div class="loto">
            <div class="logo">
                <img src="img/loto7.png" class="numbersImg">
            </div>
        </div>
        <div class="answerarea">
        </div>
        <div class="numberarea">
        </div>
    `;
    return view;
}

// loto6用
function viewloto7Number(array){
    let view = '';
    for(let i=1;i<=array.length;i++){
        if(i==1 || i == 11|| i == 21 || i == 31){
            view += `
                <div class="line">
                    <div class="block" id="`+i+`">`+i+`</div>
            `;
        }else if(i==10 || i ==20|| i==30 || i == 37){
            view += `
                <div class="block" id="`+i+`">`+i+`</div>
            </div>
            `;
        }else{
            view += '<div class="block" id="'+i+'">'+i+'</div>';
        }
    }
    $('.numberarea').append(view);
}

///////////////////////////////////////////
// 関数一覧
///////////////////////////////////////////

///////////////////////////////
// 数字作成
///////////////////////////////
// Numbers
function createNumber(m){
    for(let i=0;i<m;i++){
        numbers.push(i);
    }
    // console.log(numbers);
    return numbers;
}

// Bingo5用の数字作成
function createNumber5(m){
    let count = 0;
    for(let i= 1;i<=m;i++){
        bingomini.push(i);
        if(i%5==0 && i==20){
            bingo[count] = bingomini;
            bingomini = [];
            count++;
            bingo[count] = ['FREE'];
            count++;
        }else if(i%5==0){
            bingo[count] = bingomini;
            bingomini = [];
            count++;
        }
    }
}

// lotoの数字作成
function createloto(m){
    for(let i=1;i<=m;i++){
        loto.push(i);
    }
    return loto;
}



///////////////////////////////
// 分岐処理
///////////////////////////////
// 予想数字
function separate(m, count){
    if(m == 3 || m == 4){
        let set = setInterval(function(){
            count = setNumber(count);
            // console.log(count);
            if(count > m){
                clearInterval(set);
            }}, 800);
    }else if(m == 5){
        // Bingo5
        count = 0;
        let set = setInterval(function(){
            count = setBingo(count);
            if(count > 8){
                clearInterval(set);
            }}, 800);
    }else if(m == 'miniloto'){
        // miniloto
        let set = setInterval(function(){
            count = setloto(count);
            if(count > 5){
                clearInterval(set);
                for(let i=0;i<lotoSelect.length;i++){
                    $('.answerarea').append('<div class="selectblock">'+lotoSelect[i]+`</div`);
                }
            }},800);   
    }else if(m == 'loto6'){
        // loto6
        let set = setInterval(function(){
            count = setloto(count);
            if(count > 6){
                clearInterval(set);
                for(let i=0;i<lotoSelect.length;i++){
                    $('.answerarea').append('<div class="selectblock">'+lotoSelect[i]+`</div`);
                }
            }},800);   
    }else {
        // loto7
        let set = setInterval(function(){
            count = setloto(count);
            if(count > 7){
                clearInterval(set);
                for(let i=0;i<lotoSelect.length;i++){
                    $('.answerarea').append('<div class="selectblock">'+lotoSelect[i]+`</div`);
                }
            }},800);   
    }
}

// css解除
function cleanCss(m){
    if(m == 3 || m == 4){
        $('.column').children('div').css('border', 'none');
        $('.numbers').empty();
    }else if(m == 5){
        $('span').css({'background-color': 'white', 'padding': '0'});
    }else if(m == 'miniloto'){
        $('.answerarea').empty();
        $('.block').css('border', 'none');

        // 配列を元どおりに
        lotoSelect = [];
        loto = [];
        createloto(31);
    }else if(m == 'loto6'){
        $('.answerarea').empty();
        $('.block').css('border', 'none');

        // 配列を元どおりに
        lotoSelect = [];
        loto = [];
        createloto(43);
    }else {
        $('.answerarea').empty();
        $('.block').css('border', 'none');

        // 配列を元どおりに
        lotoSelect = [];
        loto = [];
        createloto(37);
    }
}

///////////////////////////////
// ボタンクリック処理
///////////////////////////////
$(document).on('click', '.btn', function(e){
    e.preventDefault();
    let select = $(this).attr('data-id');
    $(this).text('再予想');
    $(this).removeClass('btn');
    $(this).addClass('rebtn')
    let count = 1;
    // 多少の演出を実装
    separate(select, count);
})

// 再予想
$(document).on('click', '.rebtn', function(e){
    e.preventDefault();
    let select = $(this).attr('data-id');
    cleanCss(select);
    let count = 1;
    // 多少の演出を実装
    separate(select, count)
})

///////////////////////////////
// 予想作成
///////////////////////////////
// 予想作成(Numbers3,4)
function setNumber(count){
    let random = Math.floor(Math.random()*10);
    // ランダム値を設定
    $('#selected'+count).append('<span>'+numbers[random]+'</span>');
    // 枠線で囲む
    $('#selected'+count).css('border','solid 1vw #eca200');
    $('#selected'+count).nextAll('#'+numbers[random]).css('border','solid 1vw #e7c16e');
    
    count = count+1;
    return count;
}

// 予想作成（Bingo5）
function setBingo(count){
    let random = Math.floor(Math.random()*5);
    if(count == 4){
        $('.freearea').find('span').css({'background-color':'#eca200', 'padding': '0.5vw'});
    }else{
        // ランダム値を設定
        let selectNumber = bingo[count][random];
        $('#'+selectNumber).find('span').css({'background-color':'#eca200', 'padding': '0.5vw'});
    }
    count = count+1;
    return count;
}

// 予想作成（loto）
function setloto(count){
    let random = Math.floor(Math.random()*(loto.length));
    let setNumber = loto[random];
    lotoSelect.push(setNumber);
    // CSS追記
    $('#'+setNumber).css('border','solid 1vw #e7c16e');
    // 配列から選択した数字を削除
    loto.splice(random, 1);
    // 選択した数字の配列を並び替え
    lotoSelect.sort(function(a,b){
        return (a >b ? 1:-1);
    })
    count = count+1;
    return count;
}








///////////////////////////////////////////
// 動的処理
///////////////////////////////////////////
$(document).on('change', 'select', function(){
    // 選択肢取得
    let selected = $(this).val();
    // viewエリアを空っぽにする
    $('.viewarea').empty();
    // 配列を綺麗にする
    numbers = [];

    bingo = [];
    bingomini = [];

    loto = [];
    lotoSelect = [];
    // 描画開始
    if(selected == 'numbers3'){
        // 描画する
        $('.viewarea').append(viewNumbers3());
        $('.main').append(viewColumn(3));
        // 数字作成
        createNumber(10);
        // 予想作成ボタンを表示
        $('.createNumber').css('display', 'block');
        // 予想する対象を設定
        $('.btn').attr('data-id', 3);
        $('.rebtn').attr('data-id', 3);
    }else if(selected == 'numbers4'){
        // 描画する
        $('.viewarea').append(viewNumbers4());
        $('.main').append(viewColumn(4));
        // 数字作成
        createNumber(10);
        // 予想作成ボタンを表示
        $('.createNumber').css('display', 'block');
        // 予想する対象を設定
        $('.btn').attr('data-id', 4);
        $('.rebtn').attr('data-id', 4);
    }else if(selected == 'bingo5'){
        // 描画する
        $('.viewarea').append(viewBingo5());
        // 数字作成
        createNumber5(40);
        // 詳細を描画
        viewBingoBox(bingo);        
        // 予想作成ボタンを表示
        $('.createNumber').css('display', 'block');
        // 予想する対象を設定
        $('.btn').attr('data-id', 5);
        $('.rebtn').attr('data-id', 5);
    }else if(selected == 'miniloto'){
        // 描画する
        $('.viewarea').append(viewMiniloto());
        // 数字作成
        createloto(31);
        // 詳細描画
        viewMinilotoNumber(loto);
        // 予想作成ボタンを表示
        $('.createNumber').css('display', 'block');
        // 予想する対象を設定
        $('.btn').attr('data-id', 'miniloto');
        $('.rebtn').attr('data-id', 'miniloto');
    }else if(selected == 'loto6'){
        // 描画する
        $('.viewarea').append(viewloto6());
        // 数字作成
        createloto(43);
        // 詳細描画
        viewloto6Number(loto);
        // 予想作成ボタンを表示
        $('.createNumber').css('display', 'block');
        // 予想する対象を設定
        $('.btn').attr('data-id', 'loto6');
        $('.rebtn').attr('data-id', 'loto6');
    }else {
        // 描画する
        $('.viewarea').append(viewloto7());
        // 数字作成
        createloto(37);
        // 詳細描画
        viewloto7Number(loto);
        // 予想作成ボタンを表示
        $('.createNumber').css('display', 'block');
        // 予想する対象を設定
        $('.btn').attr('data-id', 'loto7');
        $('.rebtn').attr('data-id', 'loto7');
    }
})






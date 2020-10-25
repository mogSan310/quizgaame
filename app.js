const quiz = [
  {
    question:"ゲーム市場、最も売れたゲーム機はどれ？",
    answers:[
     'スーパーファミコン',
     'プレイステーション2',
     'ニンテンドースイッチ',
     'ニンテンドーDS'
      ],
     correct:'ニンテンドーDS'
  },{
    question:"漫画家　尾田栄一郎の代表作といえば？",
    answers:[
      'ナルト',
      'ハンターハンター',
      'ワンピース',
      'ドラゴンボール'
    ],
    correct:'ワンピース'
  },{
    question:"ハンターハンター最終連載から現在の休載期間は？",
    answers:[
      '1年',
      '2年',
      '3年',
      '4年'
    ],
    correct:'2年'
  }, {
     question:"ルフィーの祖父ガープ中将はなんの実の能力者？",
     answers:[
      'サビサビの実',
      'ブキブキの実',
      'トントンの実',
      '無能力者'
    ],

    correct:'無能力者'

  },　{
    question:"幻影旅団団長クロロ=ルシルフルの能力名は？",
    answers:[
     'スキルゲッター',
     'スキルシーフ',
     'スキルハンター',
     'スキルブック'
   ],

   correct:'スキルハンター'

   
  }, {

    question:"ワンピース最新刊のサンジの懸賞金は何ベリー？",
    answers:[
     '2億9000万',
     '3億2000万',
     '3億3000万',
     '3億5000万'
   ],

   correct:'3億3000万'


  },　{
    question:"ハンターハンターの主人公ゴンの初登場時の年齢は？",
    answers:[
     '10歳',
     '11歳',
     '12歳',
     '13歳'
   ],

   correct:'11歳'



  },


];





const quizLength = quiz.length;
let quizIndex = 0;
let score = 0; 

correct = function() {
  let audio= new Audio("img/correct1.mp3");
  audio.play();
};

incorrect = function() {
  let audio= new Audio("img/incorrect1.mp3");
  audio.play();
};

quizBGM =function() {
  let audio= new Audio("img/VSQ_MUSIC_001.mp3");
  audio.play();
}



const $button =document.getElementsByTagName('button');

//クイズの問題文,選択肢を定義
const setupQuiz= ()=> {
    document.getElementById('js-question').textContent =quiz[quizIndex].question;
    let = buttonIndex =0;
    let = buttonLength = $button.length;
    
    while(buttonIndex < buttonLength) {
        $button[buttonIndex].textContent =quiz[quizIndex].answers[buttonIndex];
        buttonIndex++;
    }
}

setupQuiz(); 

const clickHandler= (e)=> {
    if(quiz[quizIndex].correct === e.target.textContent) {
        window.alert('正解')
        score++;
        correct();
       } else {
        window.alert('不正解') 
        incorrect();
       }
    quizIndex++;
    if(quizIndex <quizLength) {
       setupQuiz();
    }else {
        window.alert(`終了！あなたの正解数は` + score + "/" + quizLength + "です")
        
    }
}
  
for(let y=0; y<$button.length; y++) {
    $button[y].addEventListener('click',(e)=> {
     clickHandler(e);
    });

}




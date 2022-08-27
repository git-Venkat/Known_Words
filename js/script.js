//Random background color
let randNumCol = Math.floor(Math.random()*5)
if (randNumCol === 0) {
    document.querySelector('body').style.backgroundColor = '#1b1b1b';
} else if (randNumCol === 1) {
    document.querySelector('body').style.backgroundColor = '#292d34';
} else if (randNumCol === 2) {
    document.querySelector('body').style.backgroundColor = '#0f100f';
} else if (randNumCol === 3) {
    document.querySelector('body').style.backgroundColor = '#1a0f0d';
} else if (randNumCol === 4) {
    document.querySelector('body').style.backgroundColor = '#1a1b30';
} else {
    document.querySelector('body').style.backgroundColor = '#05131';
};

// Cursor Moves 1 ==>
let fixTextCursor = ()=>{
    document.querySelector('.textCursor').style.left = document.querySelector('.currentLetter').getBoundingClientRect().left + 'px';
    document.querySelector('.textCursor').style.top = document.querySelector('.currentLetter').getBoundingClientRect().top + 'px';
};

window.addEventListener('resize',(event)=>{
    fixTextCursor();
});

window.addEventListener('keydown',(e)=>{
    if(e.keyCode === 32 ){
        document.body.style.overflow = 'hidden';
    };
});

function startTyping() {
    var letter = document.querySelector('.currentLetter');
    var correctTF = letter.classList.contains('correct');
    var wrongTF = letter.classList.contains('wrong');
    if (letter.innerHTML === event.key && event.code !=='Space' && event.charCode > 96 && event.charCode<123 && ((correctTF !== true) && (wrongTF !== true))) {
        document.querySelector('.currentLetter').classList.add('correct')
        document.querySelector('.currentLetter').classList.remove('wrong')
    } else if (letter.innerHTML !== event.key && event.code !=='Space' && event.charCode > 96 && event.charCode<123 && ((correctTF !== true) && (wrongTF !== true))){
        document.querySelector('.currentLetter').classList.add('wrong')
        document.querySelector('.currentLetter').classList.remove('correct')
    };
};


//Random Sentence GEN ==>
var finalSentence = ''
var wordsCount = 400;
const wordList = 
["the","of","to","and","a","in","is","it","you","that","he","was","for","on","are","with","as","I","his","they","be","at","one","have","this","from","or","had","by","not","word","but","what","some","we","can","out","other","were","all","there","when","up","use","your","how","said","an","each","she","which","do","their","time","if","will","way","about","many","then","them","write","would","like","so","these","her","long","make","thing","see","him","two","has","look","more","day","could","go","come","did","number","sound","no","most","people","my","over","know","water","than","call","first","who","may","down","side","been","now","find","any","new","work","part","take","get","place","made","live","where","after","back","little","only","round","man","year","came","show","every","good","me","give","our","under","name","very","through","just","form","sentence","great","think","say","help","low","line","differ","turn","cause","much","mean","before","move","right","boy","old","too","same","tell","does","set","three","want","air","well","also","play","small","end","put","home","read","hand","port","large","spell","add","even","land","here","must","big","high","such","follow","act","why","ask","men","change","went","light","kind","off","need","house","picture","try","us","again","animal","point","mother","world","near","build","self","earth","father","head","stand","own","page","should","country","found","answer","school","grow","study","still","learn","plant","cover","food","sun","four","between","state","keep","eye","never","last","let","thought","city","tree","cross","farm","hard","start","might","story","saw","far","sea","draw","left","late","run","while","press","close","night","real","life","few","north","open","seem","together","next","white","children","begin","got","walk","example","ease","paper","group","always","music","those","both","mark","often","letter","until","mile","river","car","feet","care","second","book","carry","took","science","eat","room","friend","began","idea","fish","mountain","stop","once","base","hear","horse","cut","sure","watch","color","face","wood","main","enough","plain","girl","usual","young","ready","above","ever","red","list","though","feel","talk","bird","soon","body","dog","family","direct","pose","leave","song","measure","door","product","black","short","numeral","class","wind","question","happen","complete","ship","area","half","rock","order","fire","south","problem","piece","told","knew","pass","since","top","whole","king","space","heard","best","hour","better","true","during","hundred","five","remember","step","early","hold","west","ground","interest","reach","fast","verb","sing","listen","six","table","travel","less","morning","ten","simple","several","vowel","toward","war","lay","against","pattern","slow","center","love","person","money","serve","appear","road","map","rain","rule","govern","pull","cold","notice","voice","unit","power","town","fine","certain","fly","fall","lead","cry","dark","machine","note","wait","plan","figure","star","box","noun","field","rest","correct","able","pound","done","beauty","drive","stood","contain","front","teach","week","final","gave","green","oh","quick","develop","ocean","warm","free","minute","strong","special","mind","behind","clear","tail","produce","fact","street","inch","multiply","nothing","course","stay","wheel","full","force","blue","object","decide","surface","deep","moon","island","foot","system","busy","test","record","boat","common","gold","possible","plane","stead","dry","wonder","laugh","thousand","ago","ran","check","game","shape","equate","hot","miss","brought","heat","snow","tire","bring","yes","distant","fill","east","paint","language","among","grand","ball","yet","wave","drop","heart","am","present","heavy","dance","engine","position","arm","wide","sail","material","size","vary","settle","speak","weight","general","ice","matter","circle","pair","include","divide","syllable","felt","perhaps","pick","sudden","count","square","reason","length","represent","art","subject","region","energy","hunt","probable","bed","brother","egg","ride","cell","believe","fraction","forest","sit","race","window","store","summer","train","sleep","prove","lone","leg","exercise","wall","catch","mount","wish","sky","board","joy","winter","sat","written","wild","instrument","kept","glass","grass","cow","job","edge","sign","visit","past","soft","fun","bright","gas","weather","month","million","bear","finish","happy","hope","flower","clothes","strange","gone","jump","baby","eight","village","meet","root","buy","raise","solve","metal","whether","push","seven","paragraph","third","shall","held","hair","describe","cook","floor","either","result","burn","hill","safe","cat","century","consider","type","law","bit","coast","copy","phrase","silent","tall","sand","soil","roll","temperature","finger","industry","value","fight","lie","beat","excite","natural","view","sense","ear","else","quite","broke","case","middle","kill","son","lake","moment","scale","loud","spring","observe","child","straight","consonant","nation","dictionary","milk","speed","method","organ","pay","age","section","dress","cloud","surprise","quiet","stone","tiny","climb","cool","design","poor","lot","experiment","bottom","key","iron","single","stick","flat","twenty","skin","smile","crease","hole","trade","melody","trip","office","receive","row","mouth","exact","symbol","die","least","trouble","shout","except","wrote","seed","tone","join","suggest","clean","break","lady","yard","rise","bad","blow","oil","blood","touch","grew","cent","mix","team","wire","cost","lost","brown","wear","garden","equal","sent","choose","fell","fit","flow","fair","bank","collect","save","control","decimal","gentle","woman","captain","practice","separate","difficult","doctor","please","protect","noon","whose","locate","ring","character","insect","caught","period","indicate","radio","spoke","atom","human","history","effect","electric","expect","crop","modern","element","hit","student","corner","party","supply","bone","rail","imagine","provide","agree","thus","capital","chair","danger","fruit","rich","thick","soldier","process","operate","guess","necessary","sharp","wing","create","neighbor","wash","bat","rather","crowd","corn","compare","poem","string","bell","depend","meat","rub","tube","famous","dollar","stream","fear","sight","thin","triangle","planet","hurry","chief","colony","clock","mine","tie","enter","major","fresh","search","send","yellow","gun","allow","print","dead","spot","desert","suit","current","lift","rose","continue","block","chart","hat","sell","success","company","subtract","event","particular","deal","swim","term","opposite","wife","shoe","shoulder","spread","arrange","camp","invent","cotton","born","determine","quart","nine","truck","noise","level","chance","gather","shop","stretch","throw","shine","property","column","molecule","select","wrong","gray","repeat","require","broad","prepare","salt","nose","plural","anger","claim","continent","oxygen","sugar","death","pretty","skill","women","season","solution","magnet","silver","thank","branch","match","suffix","especially","fig","afraid","huge","sister","steel","discuss","forward","similar","guide","experience","score","apple","bought","led","pitch","coat","mass","card","band","rope","slip","win","dream","evening","condition","feed","tool","total","basic","smell","valley","nor","double","seat","arrive","master","track","parent","shore","division","sheet","substance","favor","connect","post","spend","chord","fat","glad","original","share","station","dad","bread","charge","proper","bar","offer","segment","duck","instant","market","degree","populate","chick","dear","enemy","reply","drink","occur","support","speech","nature","range","steam","motion","path","liquid","log","meant","quotient","teeth","shell","neck"];

function randNumber(){
    var randNum = Math.floor(Math.random() * 997)
    return randNum
}

for (i = 0; i<wordsCount; i++){
    var tempString = '' + wordList[randNumber()] + ' ' + wordList[randNumber()] +
    ' ' + wordList[randNumber()] + ' ';
    finalSentence += tempString;
};

var breakSentences = finalSentence.split(' ');

breakSentences.forEach( singleWord => {
    var word = document.createElement('div');
    word.classList.add('word');
    document.querySelector('.typingArea').appendChild(word);
    singleWord.split('').forEach( singleLetter =>{
        var eachLetter = document.createElement('span')
        eachLetter.classList.add('typingLetters')
        eachLetter.innerText = singleLetter
        word.appendChild(eachLetter)
    })

    document.querySelector('.typingArea').children[1].classList.add('currentWord');
});

// Keyboard Clicking Style

document.addEventListener("keypress", (event) =>{
    startTyping();
    // if (event.code === 'Space' ){
    //     document.querySelector('.addHide').classList.add('hide');
    //     document.querySelector('.lowerRow').classList.add('space');
    //     setTimeout(() =>{
    //         document.querySelector('.addHide').classList.remove('hide');
    //         document.querySelector('.lowerRow').classList.remove('space');
    //     },150);
    // }
    // else 
    if (event.charCode > 96 && event.charCode<123) {
        let listeningWord = document.querySelector('.'+event.key);
        listeningWord.classList.add("keyClicked");
        listeningWord.children[0].classList.add('hide');
        setTimeout (() =>{
            listeningWord.classList.remove("keyClicked");
            listeningWord.children[0].classList.remove('hide');
        },180);
    };
});

                        // Typing Validation ==>                                         

document.querySelector('.currentWord').children[0].classList.add('currentLetter')

// Space Key

document.addEventListener('keypress',(event) =>{
    var wordChild = document.querySelector('.currentWord');
    var presentIndex = Array.from(wordChild.parentNode.children).indexOf(wordChild);
    const lengthOfWords = document.querySelector('.typingArea').children.length;
    const joinClass = () =>{
        var nextIndex = presentIndex+1
        if (event.code === 'Space' && nextIndex != lengthOfWords) {
            document.querySelector('.typingArea').children[presentIndex].classList.remove('currentWord');
            document.querySelector('.typingArea').children[presentIndex].classList.add('dead');
            document.querySelector('.typingArea').children[nextIndex].classList.add('currentWord');
            document.querySelector('.currentLetter').classList.remove('currentLetter');
            document.querySelector('.currentWord').children[0].classList.add('currentLetter');
        };

    };
    joinClass();

    const temp4 = ()=>{
        var temp3 = document.querySelector('.typingArea').children[presentIndex];
    
        if (event.code === 'Space') {
            for(let i = 0; i < temp3.children.length; i++){
                if (temp3.children[i].classList.contains('correct') === false || temp3.children[i].classList.contains('wrong') === false)  {
                    if (temp3.children[i].classList.contains('correct') === false) {
                        temp3.children[i].classList.add('wrong')
                    }
                };
            };  
        }
    };

    temp4();
});

var finalTime = 0;

document.addEventListener('keypress',(event)=>{
    var letterChild = document.querySelector('.currentLetter');
    var presentLetter = Array.from(letterChild.parentNode.children).indexOf(letterChild);
    var lengthOfLetters = document.querySelector('.currentWord').children.length;
    
    if (document.querySelector('.textCursor').classList.contains('running') === false) {
        document.addEventListener('keydown',(e)=>{
            if (e.key === 'Escape') {
                location.reload();
            };
        });
        timer();
        finalTime += Number(document.querySelector('.seconds').innerText) / 60;
    };
    document.querySelector('.textCursor').classList.remove('flashAnimation');
    document.querySelector('.textCursor').classList.add('running')

    if (event = true && event.code !== 'Space' && lengthOfLetters !== presentLetter + 1 && event.charCode > 96 && event.charCode<123 ) {
        var nextLetter = presentLetter + 1;
        document.querySelector('.currentWord').children[presentLetter].classList.remove('currentLetter');
        document.querySelector('.currentWord').children[nextLetter].classList.add('currentLetter');
     } else if (lengthOfLetters === presentLetter + 1 && event.charCode > 96 && event.charCode<123 ) {
        document.querySelector('.currentWord').children[lengthOfLetters-1].classList.add('currentLetter');
    };

 });
 

// BACKSPACE

document.addEventListener('keydown', (event) =>{
    var child = document.querySelector('.currentLetter');
    var parent = document.querySelector('.currentWord');
    var positionParent = Array.from(parent.parentNode.children).indexOf(parent);
    var position = Array.from(child.parentNode.children).indexOf(child);
    var _length = document.querySelector('.currentWord').children.length - 1;
    var correctTF = document.querySelector('.currentWord').children[_length].classList.contains('correct');
    var wrongTF = document.querySelector('.currentWord').children[_length].classList.contains('wrong');

    if (event.key === 'Backspace' && position !== _length && position !== 0 && _length+1 !== 1) {
        document.querySelector('.currentWord').children[position-1].classList.remove('wrong');
        document.querySelector('.currentWord').children[position-1].classList.remove('correct');
        document.querySelector('.currentWord').children[position-1].classList.add('currentLetter');
        document.querySelector('.currentWord').children[position].classList.remove('currentLetter');  
    } else if (event.key === 'Backspace' && position === _length && ((correctTF === true) || (wrongTF === true)) && _length+1 !== 1) {
        document.querySelector('.currentWord').children[position].classList.remove('wrong');
        document.querySelector('.currentWord').children[position].classList.remove('correct');
    } else if (event.key === 'Backspace' && position === _length && ((correctTF !== true) && (wrongTF !== true)) && _length+1 !== 1) {
        document.querySelector('.currentWord').children[position].classList.remove('currentLetter');
        document.querySelector('.currentWord').children[position-1].classList.add('currentLetter');
        document.querySelector('.currentWord').children[position-1].classList.remove('wrong');
        document.querySelector('.currentWord').children[position-1].classList.remove('correct');
    } else if (event.key === 'Backspace' && _length+1 === 1 && ((correctTF === false) && (wrongTF === false))) {
        parent.children[position].classList.remove('currentLetter');
        document.querySelector('.typingArea').children[positionParent].classList.remove('currentWord');
        document.querySelector('.typingArea').children[positionParent-1].classList.add('currentWord');
        var length_ = document.querySelector('.currentWord').children.length;
        document.querySelector('.currentWord').children[length_-1].classList.add('currentLetter');
    } else if (event.key === 'Backspace' && _length+1 === 1 ) {
        document.querySelector('.currentWord').children[position].classList.remove('wrong');
        document.querySelector('.currentWord').children[position].classList.remove('correct');
    } else if (event.key ==='Backspace' && position === 0 && positionParent !== 1) {
        parent.children[position].classList.remove('currentLetter');
        document.querySelector('.typingArea').children[positionParent].classList.remove('currentWord');
        document.querySelector('.typingArea').children[positionParent-1].classList.add('currentWord');
        var length_ = document.querySelector('.currentWord').children.length;
        document.querySelector('.currentWord').children[length_-1].classList.add('currentLetter');
    };


    // For Cursor:
    if (event.key === 'Backspace' && ((correctTF === false) || (wrongTF === false))) {
        document.querySelector('.textCursor').style.left = document.querySelector('.currentLetter').getBoundingClientRect().left + 'px';
        document.querySelector('.textCursor').style.top = document.querySelector('.currentLetter').getBoundingClientRect().top + 'px';
    };
    
});

//Cursor Moves 2 ==>

var wrongLetters = 0;
var correctLetters = 0;

let dead = ()=>{
    var cursorTop = document.querySelector('.currentWord').getBoundingClientRect().top;
    var dead = document.querySelectorAll('.dead');
    if (cursorTop > 216) {
        wrongLetters += Number(document.querySelectorAll('.wrong').length);
        correctLetters += Number(document.querySelectorAll('.correct').length);
        dead.forEach(dead =>{
            dead.remove();
        });
        
    };

    document.querySelector('.textCursor').style.left = document.querySelector('.currentLetter').getBoundingClientRect().left + 'px';
    document.querySelector('.textCursor').style.top = document.querySelector('.currentLetter').getBoundingClientRect().top + 'px';
}

document.querySelector('.textCursor').style.left = document.querySelector('.currentLetter').getBoundingClientRect().left + 'px';
document.querySelector('.textCursor').style.top = document.querySelector('.currentLetter').getBoundingClientRect().top + 'px';


document.addEventListener('keypress',(event)=>{
    const cursor = document.querySelector('.textCursor');
    const coordinates = document.querySelector('.currentLetter').getBoundingClientRect(); 
    const currentLetter = document.querySelector('.currentLetter').classList; 

    if ((currentLetter.contains('correct') || currentLetter.contains('wrong')) && event.code !== 'Space') {
        cursor.style.left = coordinates.right + 'px';
        cursor.style.top = coordinates.top + 'px'
    } else if (event.code === 'Space') {
        cursor.style.left = document.querySelector('.currentWord').getBoundingClientRect().left + 'px';
        cursor.style.top = document.querySelector('.currentWord').getBoundingClientRect().top + 'px';
        dead();
    } else {
        cursor.style.left = coordinates.left + 'px';
        cursor.style.top = coordinates.top + 'px';
    }
});
    
document.addEventListener('keydown', (e)=>{
    var lastWord = document.querySelector('.currentWord');
    var lastLetter = document.querySelector('.currentLetter');
    var indexLetter = Array.from(lastLetter.parentNode.children).indexOf(lastLetter);
    var indexWord = Array.from(lastWord.parentNode.children).indexOf(lastWord);
    var correctTF = lastLetter.classList.contains('correct');
    var wrongTF = lastLetter.classList.contains('wrong');

    if (indexLetter === lastWord.children.length - 1 && indexWord !== 1 && e.key === 'Backspace' && ((correctTF === true) || (wrongTF === true))) {
        document.querySelector('.textCursor').style.left = document.querySelector('.currentLetter').getBoundingClientRect().right + 'px';
    } else if (e.key === 'Backspace' && ((correctTF === true) || (wrongTF === true))) {
        document.querySelector('.textCursor').style.left = document.querySelector('.currentLetter').getBoundingClientRect().right + 'px';
    }
});

// Changing Timer==>

var seconds = 30;

document.querySelector('.leftBtn').addEventListener('click',(e)=>{
    var secondsLeft = Number (document.querySelector('.seconds').innerText);
    var insertNum1 = secondsLeft/2;
    if (insertNum1 > 14) {
        document.querySelector('.seconds').innerText = secondsLeft - Math.floor(insertNum1);
        seconds = Math.floor(insertNum1);
        if (seconds < 100) {
            document.querySelector('.rightBtn').style.right = '45px';
            document.querySelector('.leftBtn').style.left = '45px';
        };
    }
});
document.querySelector('.rightBtn').addEventListener('click',(e)=>{
    var secondsRight = Number (document.querySelector('.seconds').innerText);
    var insertNum = secondsRight*2;  
    seconds = insertNum;
    if (insertNum < 1000) {
        if (insertNum < 100) {
            document.querySelector('.seconds').innerText = insertNum;
        }  else{
            document.querySelector('.seconds').innerText = insertNum;
            document.querySelector('.seconds').style.fontSize = "60px";
            document.querySelector('.rightBtn').style.right = '25px';
            document.querySelector('.leftBtn').style.left = '25px';
        };
    };
});

document.querySelector('.timeReset').addEventListener('click',(e)=>{
    document.querySelector('.seconds').innerText = 30;
    seconds = 30;
    document.querySelector('.rightBtn').style.right = '45px';
    document.querySelector('.leftBtn').style.left = '45px';
});

//Timer==>

document.querySelector('.escKey').addEventListener('click',()=>{
    location.reload()
});

let timer = ()=>{

    let startTimer = ()=>{
        seconds--;
        if (seconds < 10) {
            document.querySelector('.seconds').innerText = "0" + seconds;
        } else{
            document.querySelector('.seconds').innerText = seconds;
        }
    };

    setInterval(() => { 
        if (seconds !== 0) {
            startTimer();
            if (seconds === 0 ) {
                document.querySelector('.typingArea').classList.add('hide');
                wpm(finalTime)
            }
        };
    }, 1000);

    const started = 1;

    document.querySelector('.leftBtn').style.opacity = '0';
    document.querySelector('.rightBtn').style.opacity = '0';
    document.querySelector('.leftBtn').style.visibility = 'hidden';
    document.querySelector('.rightBtn').style.visibility = 'hidden';

    document.querySelector('.timeReset').style.opacity = '0';
    document.querySelector('.timeReset').style.visibility = 'hidden';

    document.querySelector('.onTypeText').style.opacity = '1';

};

// WPM==>

let randomClick = ()=>{
    var ranRow = Math.floor(Math.random() * 3);
    var ranClick = 0;
    var selectedRow = document.querySelector('.keyboard').children[ranRow];

    if (ranRow === 0) {
        ranClick = Math.floor(Math.random() * 11);
        selectedRow.children[ranClick].classList.add('keyClicked')
        setTimeout (() =>{
            selectedRow.children[ranClick].classList.remove("keyClicked");
        },180);
    } else if (ranRow === 1) {
        ranClick = Math.floor(Math.random() * 10);
        selectedRow.children[ranClick].classList.add('keyClicked')
        setTimeout (() =>{
            selectedRow.children[ranClick].classList.remove("keyClicked");
        },180);
    } else {
        ranClick = Math.floor(Math.random() * 8);
        selectedRow.children[ranClick].classList.add('keyClicked')
        setTimeout (() =>{
            selectedRow.children[ranClick].classList.remove("keyClicked");
        },180);
    };
};

let wpm = (time)=>{

    for (let i = 0; i < 1201; i++) {
        document.querySelector('.popupCss').style.width = i+'px'; 
    }

    wrongLetters += Number(document.querySelectorAll('.wrong').length);
    correctLetters += Number(document.querySelectorAll('.correct').length);
    var totalLetters = wrongLetters + correctLetters;
    var netWords = totalLetters/time;
    var grossWpm = (correctLetters / 5)/time;
    var accuracy = (correctLetters/totalLetters)*100;
    let finalValue = 0;

    let calWpm = ()=>{
        finalValue++;
        if (finalValue < Math.floor(grossWpm) + 1 ) {
            document.querySelector('.grossWpm').innerText = finalValue;
        };
        if (finalValue < Math.floor(accuracy) + 1){
            if (Math.floor(accuracy) < 100) {
                document.querySelector('.accuracyValue').style.left = 74 +'%';
                document.querySelector('.accuracyValue').innerText = finalValue +'%';
            } else {
                document.querySelector('.accuracyValue').style.left = 72 +'%';
                document.querySelector('.accuracyValue').innerText = finalValue +'%';
            };
        };
        if (finalValue < finalTime*60 + 1){
            document.querySelector('.finalTime').innerText = finalTime*60+' sec';
        };
        if (finalValue < totalLetters +1) {
            if (totalLetters < 100) {
                document.querySelector('.charTyped').style.left = 75.5 +'%';
                document.querySelector('.charTyped').innerText = finalValue;
            } else {
                document.querySelector('.charTyped').style.left = 74.5 +'%';
                document.querySelector('.charTyped').innerText = finalValue;
            };
        }
    };

    setInterval(() => {
        calWpm();
    }, 10);

    // document.querySelector('.grossWpm').innerText = Math.floor(grossWpm);
    // document.querySelector('.accuracyValue').innerText = Math.floor(accuracy) +'%';
    
    // document.querySelector('.charTyped').innerText = totalLetters;
    // document.querySelector('.finalTime').innerText = finalTime*60+' sec';
    document.querySelector('.contentCarrier').classList.add('blur');
    document.querySelector('.popupCss').classList.remove('hide')
    document.addEventListener('keydown',(e)=>{
        
        if ((e.key === 'Enter') || (e.key === 'Escape')) {
            location.reload();
        }
    });

    setTimeout(() => {
        setInterval(() => {
            randomClick();
        }, 200);
    }, 800);

};

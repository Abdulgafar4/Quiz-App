//Declare the UI elements
var ul = document.getElementById('ul')
var nextButton = document.getElementById('btnNext');
var previousButton = document.getElementById('btnPrevious');
var quizbox = document.getElementById('questionBox')
var opt1 = document.getElementById('opt1')
var opt2 = document.getElementById('opt2')
var opt3 = document.getElementById('opt3')
var opt4 = document.getElementById('opt4')

var app={
        questions:[
            {
                q:'What is the name of the river',
                options: ['Danube', 'Niger', 'Congo', 'Limpopo'],
                answer:2
            },
            {
                q:'What is the name of the Deadly virus',
                options: ['Antrax', 'Killvi', 'Corona', 'Wuhanvi'],
                answer:3
            }, 
            {
                q:'HTML means ?',
                options: ['Hot Tiger Milk', 'Higher Test Markup Lang', 'Hyper Text Markup Language', 'Hit Tot Make Lang'],
                answer:3
            },
            {
                q:'What colour are Smurfs ?',
                options: ['Yellow', 'Brown', 'Red', 'Blue'],
                answer:4
            },
            {
                q:'What is the fastest land animal in the world ?',
                options: ['Pronghorn', 'Cheetah', 'Tiger', 'Lion'],
                answer:2
            },
            {
                q:'Which of these historical figures is most associated with the year 1431?',
                options: ['Napoleon', 'Joan of arc', 'Laozi', 'George Washinton'],
                answer:2
            },
            {
                q:'What type of file is .mpg file?',
                options: ['Video', 'Image', 'Database', 'Text'],
                answer:1
            },
            {
                q:'Which of these is an arachidan',
                options: ['Dog', 'Spider', 'Fish', 'Cat'],
                answer:2
            },
            {
                q:'Which of them is an example of rodents',
                options: ['Tiger', 'Cow', 'Rat', 'Fish'],
                answer:3
            },
            {
                q:'Which of these is a heart disease',
                options: ['Sleeping sickness', 'Heart pump', 'Malaria', 'Pneumonia'],
                answer:4
            },
            {
                q:'Which of these is a microsoft package',
                options: ['Corel Draw', 'Microsoft jungo', 'Microsoft Powerpoint', 'Micro-shop'],
                answer:3   
            },
            {
                q:'Which year did Nigeria got independent',
                options: ['1920', '1960', '2004', '1964'],
                answer:2
            },
            {
                q:'Another synonym for beautiful is',
                options: ['Splitting', 'Lickable', 'Fond of', 'Cute'],
                answer:4
            },
            {
                q:'Which of these is an example of pronoun',
                options: ['El-Mubarak', 'He', 'Jundo mark', 'Phillips'],
                answer:2
            }
        ],
        index:0,

        load:function(){
            if(this.index<=this.questions.length-1){
                quizbox.innerHTML=this.index+1 + ". " +this.questions[this.index].q;
                opt1.innerHTML=this.questions[this.index].options[0];
                opt2.innerHTML=this.questions[this.index].options[1];
                opt3.innerHTML=this.questions[this.index].options[2];
                opt4.innerHTML=this.questions[this.index].options[3];
            }
            else {
                quizbox.innerHTML="Quiz Completed!";
                ul.style.display="none";
                nextButton.style.display="none";
            }
        },
        next: function(){
            this.index++;
            this.load();
        },
        previous: function(){
            this.index--;
            this.load();
        },
        check: function(ele){
            var id=ele.id.split('');
            if(id[id.length-1]==this.questions[this.index].answer){
                this.score++;
                ele.className="correct";
                this.scoreCard();
            }
            else{
                ele.className="wrong";
            }
        },
        preventClick:function(){
            for(let i=0; i<ul.children.length; i++){
                ul.children[i].style.pointerEvents="none";
            }
        },
        allowClick:function(){
            for(let i=0; i<ul.children.length; i++){
                ul.children[i].style.pointerEvents="auto";
                ul.children[i].className=''
            }
        },
        score:0,
        scoreCard:function(){
            scoreCard.innerHTML=this.score + "/" + this.questions.length
        }
}

window.load=app.load();

function button(ele){
    app.check(ele);
    app.preventClick();
}

function next(){
    app.next();
    app.allowClick();
}
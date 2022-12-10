document.querySelector('main').classList.remove("blur-modal");
document.querySelector('header').classList.remove("blur-modal");
document.querySelector('section').classList.remove("blur-modal");
let s="dark";
document.querySelector(".light-mode").addEventListener('click',function(){
  document.querySelector('.btn-modal').style.color="#3F3B6C";
  document.querySelector('.btn-modal').style.backgroundColor="#D2DAFF";
  document.querySelector('.modal').style.color="#3F3B6C";
  document.querySelector('.modal').style.backgroundColor="#D2DAFF";
  document.querySelector("body").style.backgroundColor="#EEEEEE";
  document.querySelector("body").style.color="#937DC2";
  document.querySelector("main").style.color="#937DC2";
  document.querySelector("header").style.borderColor="#937DC2";
  document.querySelector(".again").style.color="#3F3B6C";
  document.querySelector(".again").style.backgroundColor="#D2DAFF"
  document.querySelector(".number").style.backgroundColor="#937DC2"
  document.querySelector(".number").style.color="#3F3B6C";
  document.querySelector(".guess").style.backgroundColor="#EEF1FF";
  document.querySelector(".guess").style.border="4px solid #D2DAFF";
  document.querySelector(".check").style.backgroundColor="#D2DAFF";
  document.querySelector(".light-mode").style.backgroundColor="#D2DAFF";
  document.querySelector(".light-mode").style.border="solid 4px #937DC2";
  document.querySelector(".dark-mode").style.border="solid 0 #937DC2";
  document.querySelector(".footer").style.backgroundColor="#D2DAFF";
  document.querySelector(".footer").style.color="#3F3B6C";

  s="light";
})

document.querySelector(".dark-mode").addEventListener('click',function(){
  document.querySelector('.btn-modal').style.color="white";
  document.querySelector('.btn-modal').style.backgroundColor="#2B2B2B";
  document.querySelector('.modal').style.color="white";
  document.querySelector('.modal').style.backgroundColor="black";
  document.querySelector("body").style.backgroundColor="#2B2B2B";
  document.querySelector("body").style.color="white";
  document.querySelector("main").style.color="white";
  document.querySelector("header").style.borderColor="white";
  document.querySelector(".again").style.color="black";
  document.querySelector(".again").style.backgroundColor="white";
  document.querySelector(".dark-mode").style.backgroundColor="black";
  document.querySelector(".guess").style.backgroundColor="#2B2B2B";
  document.querySelector(".guess").style.border="4px solid white";
  document.querySelector(".check").style.backgroundColor="white";
  document.querySelector(".number").style.backgroundColor="white";
  document.querySelector(".light-mode").style.backgroundColor="white";
  document.querySelector(".dark-mode").style.border="solid 4px white";
  document.querySelector(".light-mode").style.border="solid 0 #937DC2";
  document.querySelector(".footer").style.backgroundColor="black";
  document.querySelector(".footer").style.color="white";
  s="dark";
})




document.querySelector(".again").addEventListener('click',function(){
  if (s==="light"){
    document.querySelector("body").style.backgroundColor="#EEEEEE"
  }else{
    document.querySelector("body").style.backgroundColor="#2B2B2B";
  }
  document.querySelector(".guess").value="";
  document.querySelector(".message").textContent = "Start guessing...";
  b=document.querySelector(".score").value="20";
  document.querySelector(".score").innerHTML= "20";
  let c = Math.trunc((Math.random()*20))+1
  console.log(c)
  a=c;
})
let a = Math.trunc((Math.random()*20))+1
console.log(a)
let b=document.querySelector(".score").value= "20";
document.querySelector('.highscore').value='0';
document.querySelector(".check").addEventListener('click',function(){
  const guess = Number(document.querySelector(".guess").value)
  console.log(guess);

  if (!guess){
    document.querySelector(".message").textContent = "🙃 Please type a valid input";
  }else if(a===guess){
    document.querySelector('.message').textContent="🎉 You guessed it right";
    if (s==="dark"){
      document.querySelector('body').style.backgroundColor="green";
    }else{
      document.querySelector('body').style.backgroundColor="#CFF5E7";
    }
    console.log(b)
    if(b>document.querySelector('.highscore').value){
      document.querySelector('.highscore').textContent=b;
      document.querySelector('.highscore').value=b;
    }


  }else if(guess<a){
    if (guess>(a-3) && guess<a){
      document.querySelector(".message").innerHTML="📉 Number low";
      b= b-1;
      console.log(b);
      document.querySelector(".score").value=b;
      document.querySelector(".score").innerHTML=b;
      if (s==="light"){
        document.querySelector("body").style.backgroundColor="#EEEEEE"
      }else{
        document.querySelector("body").style.backgroundColor="#2B2B2B";
      }
    }else if(guess<(a-3)){
      document.querySelector(".message").innerHTML="📉📉 Number too low";
      b= b-1;
      console.log(b);
      document.querySelector(".score").value=b;
      document.querySelector(".score").innerHTML=b;
      if (s==="light"){
        document.querySelector("body").style.backgroundColor="#EEEEEE"
      }else{
        document.querySelector("body").style.backgroundColor="#2B2B2B";
      }
    }

  }else if(guess>a){

    if (guess<(a+3) && guess>a){
      document.querySelector(".message").innerHTML="📈 Number high";
      b= b-1;
      console.log(b);
      document.querySelector(".score").value=b;
      document.querySelector(".score").innerHTML= b;
      if (s==="light"){
        document.querySelector("body").style.backgroundColor="#EEEEEE"
      }else{
        document.querySelector("body").style.backgroundColor="#2B2B2B";
      }
    }else if(guess>(a+3)){
      document.querySelector(".message").innerHTML="📈📈 Number too high";
      b= b-1;
      console.log(b);
      document.querySelector(".score").value=b;
      document.querySelector(".score").innerHTML=b;
      if (s==="light"){
        document.querySelector("body").style.backgroundColor="#EEEEEE"
      }else{
        document.querySelector("body").style.backgroundColor="#2B2B2B";
      }
    }
  }else{
    document.querySelector(".message").textContent="Not right , try again";
  }


})
b=20





document.querySelector('.btn-modal').addEventListener('click',function(){
  document.querySelector(".modal").classList.remove('hidden');
  document.querySelector('main').classList.add("blur-modal");
  document.querySelector('header').classList.add("blur-modal");
  document.querySelector('section').classList.add("blur-modal");
})


document.querySelector('.cross').addEventListener('click',function(){
  document.querySelector(".modal").classList.add('hidden');
  document.querySelector('main').classList.remove("blur-modal");
  document.querySelector('header').classList.remove("blur-modal");
  document.querySelector('section').classList.remove("blur-modal");
})

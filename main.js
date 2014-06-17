function message(){
  {
  document.write("<h1 style='color: red;'>Welcome World"); //行末にもコメントできるよ
  //コメントできるよ
  /*
  複数行も出来るよ
  document.write("<h1 style='color: blue;'>Welcome World");
  document.write("<h1 style='color: green;'>Welcome World");
  */
  }
};

function today(){
  var x ="bar";
  var y = 1;
  document.write("<h1>" + x + y + "</h1>");
};

function tOrF(){
  var x = 5;
  if(x =="5"){
    document.write("<div style='color: blue;'>ゆるい真偽判定</div>");
  }
  if(x !== "5"){
    document.write("<div style='color: red;'>厳しい真偽判定</div>");
  }
};

function conditionalOperator(){
  var name = "junpei";
  var familyName;
  familyName=(name=="junpei")?"taneichi":"other"
  document.write(familyName);
};

function now(){
  var d = new Date();
  var time = d.getHours();
  var minutes = d.getMinutes();
  document.write("<div>"+time+"</div>");
  document.write(minutes);
};

function my_alert(){
  alert("danger!!!!");
};

function my_confirm(){
  var r=confirm("are you ok?");
  if(r==true){
    alert("you are OK!");
  }else{
    alert("you are ready...")
  }
};

function my_prompt(){
  var name =prompt("press your name", "junpei");
  if(name != null && name != ""){
    alert("hello" + name + "!");
  }else{

  }
};


function plus(x,y){
  // alert(x+y);
  document.write(x+y);
};

function my_loop(){
  for(i=0;i<10;i++){
    document.write(i+"<br>");
  }
};
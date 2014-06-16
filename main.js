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
  document.write(firstName);
};
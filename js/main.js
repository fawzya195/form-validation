function validation()
{
    var name=document.getElementById("name").value;
    var email=document.getElementById("email").value;
    var pass=document.getElementById("pass").value;
    var conf=document.getElementById("confirm1").value;
    var result=document.getElementById("result");
    result.setAttribute("class" , "warning");

    if(name==""&&email==""&&pass==""&&conf=="")
    {
        result.innerHTML="please ,Enter the values !";
        return false;
    }else if(name.length<5||name.length>15)
    {
        result.innerHTML="please ,Enter Username from 5 char to 15 !";
        return false;
    } else if(email.indexOf("@" , 3)==-1 || email.indexOf(".com")==-1)
    {
        result.innerHTML="please ,Enter valid email have @ and .com";
        return false;
    }else if(pass.length<8)
    {
        result.innerHTML="please ,Enter password more than 8 char";
        return false;
    }
    else if(pass!=conf)
    {
        result.innerHTML=" No matching password !";
        return false;
    }
    else{
        return true;
    }
   
}
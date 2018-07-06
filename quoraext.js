//document.body.style.border = "5px solid red";
 console.log("start")
 var url=window.location;
 var str="?view=1";
 var mod=url+str;
if((url.toString().search("view=1"))==-1)
{
//	console.log("YES")	
	location.replace(mod);
}
 console.log(mod);

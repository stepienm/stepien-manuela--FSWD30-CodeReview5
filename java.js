var person0 = {
			name: "Stefan",
			surname: "Reitmayer",
			image: "img/boy1.jpg",  
			age: 25,
			like: 7
		};
var person1 = {
			name: "Linda",
			surname: "Winter",
			image: "img/girl1.jpg",  
			age: 28,
			like:5
		};
var person2 = {
			name: "Kate",
			surname: "Whitesteen",
			image: "img/girl2.jpg",  
			age: 22,
			like:7
		};
var person3 = {
			name: "Richard",
			surname: "Cebener",
			image: "img/boy2.jpg",  
			age: 27,
			like: 5
		};


	var Persons = [
		person0, 
		person1,
		person2, 
		person3			
	];


document.write("<br>")
document.write("<br>")
document.write("<br>")
document.write("<br>")
document.write("<br>")
document.write("<br>")
document.write("<br>")
document.write("<br>")
document.write("<br>")
document.write("<br>")
document.write("<br>")
document.write("<br>")

	document.write("<div class='Persons'>");
	for(var i=0; i<Persons.length;i++) {
		document.write("<div class='person"+i+"'>");
		document.write("<img src='"+Persons[i].image+"'>");
		document.write("Name: "+Persons[i].name+"<br>");
		document.write("Surname: "+Persons[i].surname+"<br>");
		document.write("Age: "+Persons[i].age+"<br>");
		document.write("<button onclick='return numberoflikes["+i+"]'>Like</button><br>");
		document.write("<img id='like' src='img/like.png'>");
		document.write("<p id='demo"+i+" style='color:red'>"+Persons[i].like+"</p><br>");
		document.write("</div>");

	}



			
document.write("</div><br>")

var Persons = [{
			name: "Stefan",
			surname: "Reitmayer",
			image: "img/boy1.jpg",  
			age: 25,
			likes: 0,
					numberlikes: function (i){
					likes = this.likes +1;
					document.getElementById('0').innerHTML= likes;
				}
			},{
			name: "Linda",
			surname: "Winter",
			image: "img/girl1.jpg",  
			age: 28,
			likes: 0,
					numberlikes: function (i){
					likes = this.likes +1;
					document.getElementById('1').innerHTML= likes;
				}
			},{
			name: "Kate",
			surname: "Whitesteen",
			image: "img/girl2.jpg",  
			age: 22,
			likes: 0,
					numberlikes: function (i){
					likes = this.likes +1;
					document.getElementById('2').innerHTML= likes;
				}
			},{
			name: "Richard",
			surname: "Cebener",
			image: "img/boy2.jpg",  
			age: 27,
			likes: 0,
					numberlikes: function (i){
					likes = this.likes +1;
					document.getElementById('3').innerHTML= likes;
				}
			}];



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

		document.write("<button onclick='return numberlikes["+i+"]'>Like</button><br>");

		document.write("<img id='like' src='img/like.png'>");
		document.write("<p id='"+i+"'style='color:black'>"+Persons[i].likes+"</p><br>");
		document.write("</div>");

	}



			
document.write("</div><br>")


// Button1 listener
// Button2 listener
// Search for each input
// Search for text 
// Show text
// Replace variables

function find_text() {
	return $(".text");
}

function replaceVariables(){
	const $text = find_text();

	const var1 = $("#var1").val();
	const var2 = $("#var2").val();
	const var3 = $("#var3").val();
	const var4 = $("#var4").val();
	const var5 = $("#var5").val();
	const var6 = $("#var6").val();
	const speech = $("#speech").val();

// Я хотел получить объект из HTML в виде текста, и вставить туда переменные.
// Есть какие-либо адекватные варианты, как это сделать, не добавляя контент в JS файл?
// Буду очень благодарен ссылкам или другим материалам по этому вопросу!

	const obj = `Жили-были ${var1} да ${var2},<br>
	Была у них ${var3},<br>
	Снесла ${var3} ${var4}, не простое - золотое,<br>
	- ${var1} бил, бил - не разбил,<br>
	- ${var2} била, била - не разбила,<br>
	${var5} бежала, ${var6} задела, ${var4} упало и разбилось.<br>
	${var1} плачет, ${var2} плачет, а ${var3} кудахчет:,<br>
	${speech}`

	$text.html(obj);

}


$(document).ready(function(){
	$(".build-button").click(function(){
		$.getJSON(
			"https://api.jsonbin.io/b/5f1759b5c1edc466175baf5f", 
			function(data){
				const text = data.text;
				const $text = find_text();
				$text.html(function(){
					let finalText = "";
					for(let i=0; i<text.length;i++){
						finalText = finalText + text[i] + "<br>";
					}
					return finalText;
				});
			}
		);
	})
});

$(document).ready(function(){
	$(".replace-button").click(function(){
		replaceVariables();
	})
});


let text_source = "Первое задание. Заменить одинарные кавычки: Образ Петербурга в романе Ф. М. Достоевского 'Преступление и наказание' глубоко символичен. Он является, с одной стороны, социальным фоном, на котором разворачиваются события произведения, с другой — сам выступает действующим лицом, соучастником страшного преступления Раскольникова, а также и его раскаяния, возвращения в мир людей. В этом 'фантастическом' образе города, враждебного человеку и природе, воплощен протест писателя-гуманиста против господствующего зла, против ненормально устроенного современного ему общества его. Автор пытается понять жизнь столичного 'дна', мир 'униженных и оскорбленных', мир 'бедных людей'.";

let regexp = new RegExp(/\'/gm);
let repl = text_source.replace(regexp, '"');
console.log('Первое задание: ' + repl);
document.body.insertAdjacentHTML('beforeend', `<p>${repl}</p>`);




let second_text = `Второе задание. Заменить одинарные кавычки, не трогая апострофов: <br>All the world’s a stage,<br>
And all the men and women merely players;<br>
They have their exits and their entrances,<br>
And one man in his time plays many parts,<br>
His acts being seven ages. At first the infant,<br>
Mewling and puking in the nurse’s arms;<br>
And then the whining schoolboy, with his satchel<br>
And 'shining morning face', creeping like snail<br>
Unwillingly to school. And then the lover,<br>
Sighing like furnace, with a 'woeful ballad'<br>
Made to his mistress’ eyebrow. Then a soldier,<br>
Full of strange oaths, and bearded like the pard,<br>
'Jealous in honor', sudden and quick in quarrel,<br>
Seeking 'the bubble reputation'<br>
Even in the cannon’s mouth. And then the justice,<br>
In fair round belly with good capon lined,<br>
With eyes severe and beard of formal cut,<br>
Full of wise saws and modern instances;`;

let regexp1 = new RegExp(/\'([a-zA-Z0-9].*)\'/gm);
let repl1 = second_text.replace(regexp1, '"$1"');
//console.log(second_text.match(regexp1));
console.log('Второе задание: ' + repl1);
document.body.insertAdjacentHTML('beforeend', `<p>${repl1}</p>`);


let third_text = '<p>Третье задание в файле index.html</p>';
document.body.insertAdjacentHTML('beforeend', `<p>${third_text}</p>`);
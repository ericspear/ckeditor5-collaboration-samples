(function(d){	const l = d['sl'] = d['sl'] || {};	l.dictionary=Object.assign(		l.dictionary||{},		{"%0 of %1":"",Aquamarine:"Akvamarin",Black:"Črna","Block quote":"Blokiraj citat",Blue:"Modra",Bold:"Krepko",Cancel:"Prekliči","Choose heading":"Izberi naslov","Dim grey":"Temno siva","Dropdown toolbar":"","Edit block":"","Editor toolbar":"",Green:"Zelena",Grey:"Siva",Heading:"Naslov","Heading 1":"Naslov 1","Heading 2":"Naslov 2","Heading 3":"","Heading 4":"","Heading 5":"","Heading 6":"",Italic:"Poševno","Light blue":"Svetlo modra","Light green":"Svetlo zelena","Light grey":"Svetlo siva",Next:"",Orange:"Oranžna",Paragraph:"Odstavek",Previous:"",Purple:"Vijolična",Red:"Rdeča","Rich Text Editor, %0":"",Save:"Shrani","Saving changes":"Shrani spremembe","Show more items":"",Turquoise:"Turkizna","Type or paste your content here.":"","Type your title":"",Underline:"Podčrtaj",White:"Bela",Yellow:"Rumena"}	);l.getPluralForm=function(n){return (n%100==1 ? 0 : n%100==2 ? 1 : n%100==3 || n%100==4 ? 2 : 3);;};})(window.CKEDITOR_TRANSLATIONS||(window.CKEDITOR_TRANSLATIONS={}));
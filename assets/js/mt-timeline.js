//Json Object
var data = [
	{
		time: '1930-10-03',
		header: 'Первое упоминание',
		body: [{
			tag: 'h1',
			content: ''
		},
		{
			tag: 'p',
			content: 'Основываясь строго на документальных свидетельствах архива ИТМО, первое упоминание о прародительнице кафедры мехатроники содержится в приказе № 18 от 3.10.1930 по Учебному комбинату точной механики и оптики: “доцент Замыцкий Н.Н. назначен с 1.10.1930 заместителем заведующего кафедрой детали машин Института точной механики и оптики'
		}],
		footer: '<a href=\"https://museum.itmo.ru/page/36/\" target=\"_blank\">Источник - Сайт Музея ИТМО</a>'
	},
	{
		time: '1989-09-01',
		header: 'ТМиДП',
		body: [{
			tag: 'h1',
			content: ''
		},
		{
			tag: 'p',
			content: 'В 1989 году Тимофеев Б.П. приступил к заведыванию общеинженерной кафедрой теории механизмов и деталей приборов, вскоре преобразованную в выпускающую кафедру мехатроники. Однако, сделав этот шаг первыми на территории бывшего СССР в то время, когда слова «Мехатроника» еще не было в квалификационном справочнике, мы были обречены на долгую и упорную борьбу. Лишь в 1994 году специальность 071800 «Мехатроника» появилась в официальном списке специальностей. Первый ГОС специальности был во многом основан на нашем учебном плане. С 2000 года университет имеет лицензию на образовательную деятельность по специальности “Мехатроника”.'
		}],
		footer: '<a href=\"https://museum.itmo.ru/page/36/\" target=\"_blank\">Источник - Сайт Музея ИТМО</a>'
	},
	{
		time: '2012-10-12',
		header: 'Первое собрание инициативной группы',
		body: [{
			tag: 'h1',
			content: ""
		},
		{
			tag: 'p',
			content: 'Lorem ipsum dolor sit amet, nisl lorem, wisi egestas orci tempus class massa, suscipit eu elit urna in urna, gravida wisi aenean eros massa, cursus quisque leo quisque dui.'
		}],
	},
	{
		time: '2018-10-15',
		body: [{
			tag: 'img',
			attr: {
				src: '../img/qrcode.png',
				width: '150px',
				cssclass: 'img-responsive'
			}
		},
		{
			tag: 'h2',
			content: 'Первое собрание независимой лаборатории'
		},
		{
			tag: 'p',
			content: 'Lorem ipsum dolor sit amet, nisl lorem, wisi egestas orci tempus class massa, suscipit eu elit urna in urna, gravida wisi aenean eros massa, cursus quisque leo quisque dui. See <a href=\"https://github.com/Albejr/jquery-albe-timeline\" target=\"_blank\" class=\"mylink\">more details</a>'
		}]
	},
	{
		time: '2013-01-20',
		body: [{
			tag: 'img',
			attr: {
				src: '../img/girl.png',
				width: '100px',
				cssclass: 'img-responsive'
			}
		},
		{
			tag: 'h2',
			content: 'Sample with image rigth'
		},
		{
			tag: 'p',
			content: 'Lorem ipsum dolor sit amet, nisl lorem, wisi egestas orci tempus class massa, suscipit eu elit urna in urna, gravida wisi aenean eros massa, cursus quisque leo quisque dui.'
		}]
	}
];


$(document).ready(function () {

	$("#myTimeline").albeTimeline(data, {
	formatDate: 'dd MMM'}

)});
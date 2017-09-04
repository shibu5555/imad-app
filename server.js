var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles={
ArticleOne:{
	title:'The first Article',
	heading:'Article-one',
	date:'5 sep 2017',
	content:`<p>its completd done its completd done its completd done its completd done its completd done its completd done its completd done its completd done</p>

				<p>its completd done its completd done its completd done its completd done its completd done its completd done its completd done its completd done</p>
				
				<p>its completd done its completd done its completd done its completd done its completd done its completd done its completd done its completd done</p>`
},

 ArticleTwo:{
	title:'The Second Article',
	heading:'Article-one',
	date:'5 sep 2017',
	content:`<p>its completd done its completd done its completd done its completd done its completd done its completd done its completd done its completd done</p>

				<p>its completd done its completd done its completd done its completd done its completd done its completd done its completd done its completd done</p>
				
				<p>its completd done its completd done its completd done its completd done its completd done its completd done its completd done its completd done</p>`
},


ArticleThree:{
	title:'The Third Article',
	heading:'Article-one',
	date:'5 sep 2017',
	content:`<p>its completd done its completd done its completd done its completd done its completd done its completd done its completd done its completd done</p>

				<p>its completd done its completd done its completd done its completd done its completd done its completd done its completd done its completd done</p>
				
				<p>its completd done its completd done its completd done its completd done its completd done its completd done its completd done its completd done</p>`
}
};


function createTempler(data){
	var title=data.title;
	var date=data.date;
	var heading=data.heading;
	var content=data.content;
	var htmlTemplate=`<html>
	<head>
		<title>
			${title}
		</title>
		<link href="/ui/style.css" rel="stylesheet" />
	</head>
	<body>
	<div class="container">
			<div>
				<h1>${heading}</h1>
			</div>
			<div>
				<a href="/">Home</a>
				<h2>shuvam giri</h2>
			</div>
			<hr/>
			<div>
				${date}
			</div>
			<div>
				${content}
			</div>
		</div>
	</body>
</html>
`;	
	return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articleName', function (req, res) {
	var articleName=req.params.articleName;
  res.send(createTempler(articles[articleName]));
});


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});

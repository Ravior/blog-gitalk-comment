var fs=require("fs");


function getHeader(name){
	var header = '<?xml version="1.0"?><project name="Javascript compress project" basedir="." default="compile"><taskdef name="jscomp" classname="com.google.javascript.jscomp.ant.CompileTask" classpath="${basedir}/google-closure-compiler.jar"/><target name="compile"><jscomp compilationLevel="simple" warning="quiet" debug="false" output="'+name+'.js"><sources dir="${basedir}/../">';
	return header;
}

function createXML(file, html, jsCount){
	fs.writeFile(file,html,function(err){
		if(err){
			console.log('XML文件生成失败');
			throw err;
		}
		console.log('共和并%d个js文件到%s文件中',jsCount,file);
	})
}

var footer = '</sources></jscomp></target></project>';
var xmlHtml = '';
var count = 0;
fs.exists('main.js',function(exists){
	//如果main.js不存在
	if(!exists){
		console.log('main.js不存在');
		return;
	}
	fs.readFile('main.js','utf-8',function(err,data){
		if(err){
			return console.log(err);
		}
		var lineArr=data.split('\n');
		for(var i=0;i<lineArr.length;i++){
			var index=lineArr[i].indexOf('src/');
			if(index!=-1){
				var lastIndex=lineArr[i].lastIndexOf('\',');
				var str='<file name="'+lineArr[i].substring(index,lastIndex)+'"/>';
				xmlHtml+=str;
				count++;
			}
		}
		xmlHtml=getHeader('game')+xmlHtml+footer;
		console.log('共发现%d个js文件',count);
		createXML('game.xml',xmlHtml,count);
	})
})

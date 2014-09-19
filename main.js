(function(){

require("jsb.js");

var appFiles = [
    // Resource
    'src/Resource.js',

    // Skills
    'src/skills/Aoshu.js',                    
    'src/skills/Baofengxue.js',            
    'src/skills/Chuancisheji.js',              
    'src/skills/Dahuifu.js',                 
    'src/skills/Duochongsheji.js',            
    'src/skills/Heisexuanfeng.js',           
    'src/skills/Huanyingji.js',               
    'src/skills/Huikan.js',                
    'src/skills/Huixuanzhan.js',           
    'src/skills/Huoyanshu.js',               
    'src/skills/Huoyantuci.js',            
    'src/skills/Lianshe.js',                  
    'src/skills/Quantizhiyu.js',              
    'src/skills/Sheji.js',               
    'src/skills/Shencai.js',                 
    'src/skills/Shenenshu.js',                
    'src/skills/Shenyushu.js',          
    'src/skills/Shiziji.js',            
    'src/skills/Skills.js',                  
    'src/skills/Taiyangzhienci.js',         
    'src/skills/Tianleipo.js',                  
    'src/skills/Tuji.js',                
    'src/skills/Xiaohuifu.js',             
    'src/skills/Xieezhanbu.js',           
    'src/skills/Xunji.js',                   
    'src/skills/Zhenkongren.js',                
];

cc.dumpConfig();

for( var i=0; i < appFiles.length; i++) {
    require( appFiles[i] );
}

var director = cc.Director.getInstance();
if (sys.os == 'android') 
    director.setDisplayStats(false);
else
   director.setDisplayStats(false);

// set FPS. the default value is 1.0/60 if you don't call this
director.setAnimationInterval(1.0 / 60);



})()

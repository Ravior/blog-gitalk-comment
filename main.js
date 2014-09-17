(function(){

/***********匿名函数Start***********************/

require("jsb.js");

var appFiles = [
    // Configs
    'src/configs/configs.js',                           // 游戏配置文件
    'src/configs/ui_configs.js',                        // UI配置文件

    // Utils
    'src/utils/FCMUtils.js',                            // 游戏辅助函数
    'src/utils/GameUtils.js',                        // 游戏辅助函数
    'src/utils/Global.js',                           // 全局定时器
    'src/utils/NetworkUtils.js',                     // 网络相关
    'src/utils/UIUtils.js',                          // UI类辅助函数 

    // Extensions
    'src/extensions/Formation.js',
    'src/extensions/MaskLayer.js',  
    'src/extensions/MessageBox.js',  
    'src/extensions/Pagination.js',

    // Resource
    'src/Resource.js',

    // UI
    'src/ui/Avatar.js',
    'src/ui/Equip.js',
    'src/ui/Hero.js',
    'src/ui/HerosListView.js',
    'src/ui/InstanceListView.js',  
    'src/ui/Navigation.js', 
    'src/ui/Notice.js',                                // 登陆界面的公告UI控件
    'src/ui/Notification.js',    
    'src/ui/PlayerHerosList.js',
    'src/ui/ServerList.js', 
    'src/ui/PlayerStatus.js',  
    'src/ui/TeamInfo.js',
    // 'src/ui/MoreOptionsView.js',                        // 更多选项  
    'src/ui/OptionsListView.js',
    'src/ui/ChongzhiListView.js',                       // 充值list
    'src/ui/StoryStarMap.js',                           // 副本星球地图
    // UI - cells
    'src/ui/cells/CaptainCell.js',
    'src/ui/cells/HeroEvolutionCell.js',
    'src/ui/cells/HeroSellCell.js',
    'src/ui/cells/HeroUpgradeCell.js',
    'src/ui/cells/HeroUpgradeFoodsCell.js',
    'src/ui/cells/MyHeroCell.js',
    'src/ui/cells/TeamMemberCell.js',
    'src/ui/cells/FriendCell.js',
    'src/ui/cells/FriendAddCell.js',
    'src/ui/cells/ChongzhiCell.js',                     // 充值
    'src/ui/cells/OptionCell.js',                       // 选项
    'src/ui/cells/OptionCheckCell.js',                  // 带check的选项
    // Animation
    'src/animation/battle_go.js',                    // 战斗下一回合按钮动画
    'src/animation/battle_round.js',                 // 战斗回合动画
    'src/animation/hero_actions.js',                 // 英雄的动作动画
    

    // 'src/ui/NewsView.js', 


    // views
    'src/views/Battle.js',                              // 战斗
    'src/views/BattleFriends.js',                       // 助战好友选择
    'src/views/BattleFriendship.js',                    // 战斗友情结算
    'src/views/BattleResult.js',                        // 战斗结算（入口）
    'src/views/BattleReward.js',                        // 战斗奖励结算
    'src/views/CaptainLayer.js',                        // 设置队长
    'src/views/FCM.js',                                 // 防沉迷验证、提示界面
    'src/views/FormationSetting.js',                    // 进副本前英雄位置调整
    'src/views/Greeting.js',                            // 欢迎界面
    'src/views/HeroEvolutionMultiplex.js',              // 英雄进化（入口）
    'src/views/HeroInfo.js',                            // 查看英雄信息
    'src/views/HeroStore.js',                           // 英雄商店（出售英雄）
    'src/views/HeroUpgradeMultiplex.js',                // 英雄升级（入口）
    'src/views/InstanceScene.js',                       // 副本列表
    'src/views/Login.js',                       // 登陆
    'src/views/Mail.js',                                // 邮件列表
    'src/views/MainScene.js',                        // 主页
    'src/views/PlayerHeroes.js',                        // 玩家的英雄列表
    'src/views/Rewards.js',                             // 任务奖励
    'src/views/Story.js',                               // 故事副本
    'src/views/StoryNode.js',                           // 故事子副本
    'src/views/TeamMember.js',                          // 设置队员
    'src/views/MoreScene.js',                           // 更多
    'src/views/NewsScene.js',                           // 公告
    'src/views/StoreScene.js',                          // 商城
    'src/views/StoreChongzhiScene.js',                  // 商城充值
    'src/views/FriendsMutiplex.js',                     // 好友（入口）
    'src/views/LotteryScene.js',                        // 抽奖 (入口)
    'src/views/LotteryLayer.js',                        // 抽奖 (抽奖动画)
    // view - sub
    'src/views/HeroEvolution/HeroEvolutionChoose.js',   // 英雄进化（选择要进化的英雄）
    'src/views/HeroEvolution/HeroEvolutionMain.js',     // 英雄进化（主界面）
    'src/views/HeroUpgrade/HeroUpgradeChoose.js',       // 英雄升级（选择要升级的英雄）
    'src/views/HeroUpgrade/HeroUpgradeFoods.js',        // 英雄升级（选择要被吞噬的英雄）
    'src/views/HeroUpgrade/HeroUpgradeMain.js',         // 英雄升级（主界面）
    'src/views/Friends/FriendsMain.js',                 // 好友列表 (主界面)
    'src/views/Friends/FriendsAdd.js',                  // 添加好友列表
    'src/views/Friends/FriendsManage.js',               // 好友管理


    // Skills
    'src/skills/Aoshu.js',                      // 技能 - 奥术
    'src/skills/Baofengxue.js',                 // 技能 - 暴风雪
    'src/skills/Chuancisheji.js',               // 技能 - 穿刺射击
    'src/skills/Dahuifu.js',                    // 技能 - 大回复
    'src/skills/Duochongsheji.js',              // 技能 - 多重射击
    'src/skills/Heisexuanfeng.js',              // 技能 - 黑色旋风
    'src/skills/Huanyingji.js',                 // 技能 - 幻影击
    'src/skills/Huikan.js',                     // 技能 - 挥砍
    'src/skills/Huixuanzhan.js',                // 技能 - 回旋斩
    'src/skills/Huoyanshu.js',                  // 技能 - 火焰术
    'src/skills/Huoyantuci.js',                 // 技能 - 火焰突刺
    'src/skills/Lianshe.js',                    // 技能 - 连射
    'src/skills/Quantizhiyu.js',                // 技能 - 全体治愈
    'src/skills/Sheji.js',                      // 技能 - 射击
    'src/skills/Shencai.js',                    // 技能 - 神裁
    'src/skills/Shenenshu.js',                  // 技能 - 圣恩术
    'src/skills/Shenyushu.js',                  // 技能 - 神愈术
    'src/skills/Shiziji.js',                    // 技能 - 十字击
    'src/skills/Skills.js',                     // 技能工厂类
    'src/skills/Taiyangzhienci.js',             // 技能 - 太阳之恩赐
    'src/skills/Tianleipo.js',                  // 技能 - 天雷破
    'src/skills/Tuji.js',                       // 技能 - 突击    
    'src/skills/Xiaohuifu.js',                  // 技能 - 小回复
    'src/skills/Xieezhanbu.js',                 // 技能 - 邪神占卜
    'src/skills/Xunji.js',                      // 技能 - 迅击
    'src/skills/Zhenkongren.js',                 // 技能 - 真空刃
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

//启用PureMVC
app.GameFacade.getInstance(app.GameFacade.NAME).startup();


/***********匿名函数End***********************/

})()

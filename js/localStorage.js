$(function(){
    // diy左导航栏导航标题和 // diy物品的数据
    //--------首页数据--------
        //生活diy
        lifeDiy();
        // 传统手工
        traditionDiy();
        // 民间艺术
        popularDiy();
        // 创意美术
        artDiy();
        // ------------步骤页数据---------
        //生活diy
        lifeDiy02();
        // 传统手工
        traditionDiy02();
        // 民间艺术
        popularDiy02();
        // 创意美术
        artDiy02();
});

// ------------------------------------------------------------------------------首页数据------------------------------------------------------------------
 //生活diy
 var lifeDiy =function(){
    //生活
    var obj = [
        // 1
       {"id":"生活Diy","title":"小人国般的微型建筑","img":"https://cdn.rouding.com/imagesrc-s/jpg/201608-31-63104198CF29862ED467E37427640BC1-th.jpg",
       "summary":"要在我们这儿建个树屋确实不易，除了没有那么多适合的树之外，还有一个主要原因是：能闯过建筑法规的关卡吗?既然以树为邻的想法难以成真，我在我家自己盖树屋，总可以了吧?！",
        "scan":"120","collect":"1"},
        // 2
         {"id":"生活Diy","title":"亲手DIY地中海贝壳相框","img":"https://cdn.rouding.com/imagesrc-s/jpg/201903-7-EE101F72026949C4574EA4E65C1D71F5-th.jpg",
       "summary":"相片是我们美好的回忆，那么怎么把照片保存下来呢？不如来制作一些漂亮的相框，将美好的瞬间定格在画面中。用家庭温情的每一刻来装点生活！",
        "scan":"90","collect":"0"},
        // 3
       {"id":"生活Diy","title":"超可爱晴雨表","img":"https://cdn.rouding.com/imagesrc-s/jpg/201903-6-EDB0396B5D0FC6D4296C81D74F4F8F3D-th.jpg",
       "summary":"太阳公公、云朵姐姐、风哥哥、雪弟弟一起住在天上。晴天时，太阳公公高兴地挂在天上，散发着温暖明媚；阴天时，是云朵姐姐来了，太阳公公躲在云朵姐姐身后和我们捉迷藏；下雨时，是风哥哥调皮，弄哭了云朵姐姐。下雪时，是雪弟弟把世界都变成了银白色，逗笑了云朵姐姐。",
        "scan":"990","collect":"0"},
        // 4
         {"id":"生活Diy","title":"布艺手工JK领结短柄平结蝴蝶结","img":"https://cdn.rouding.com/imagesrc-s/jpg/201807-24-8FFC2E5DBCC13539B779AE41FFACB99C-th.jpg",
       "summary":"裁缝布料组成领结",
        "scan":"10","collect":"1"},
         // 5
       {"id":"生活Diy","title":"神秘郁金香","img":"https://cdn.rouding.com/imagesrc-s/jpg/201807-24-FD815BA17B3330876E5BB2CAAFB2F4B7-th.jpg",
       "summary":"又到了郁金香花开的季节啦，郁金香由于花朵含有毒碱，不适合养在家里，只能在花园里种植，那么如何将它静静的盛放在家里呢，一起来做一束神秘的真丝郁金香吧，让它点亮家里的空白。",
        "scan":"190","collect":"0"},
        // 6
         {"id":"生活Diy","title":"软木垫相片留言板","img":"https://cdn.rouding.com/imagesrc-s/jpg/201903-1-EAAE6411678F6E1DDA445B5D6E1C39D3-th.jpg",
       "summary":"将旧纸盒和软木桌垫创组合，变身“小清新留言板相框”，快快发挥自己的创意和智慧，一起动手装扮家居空间吧！",
        "scan":"60","collect":"0"},
        // 7
        {"id":"生活Diy","title":"简单发箍","img":"https://cdn.rouding.com/imagesrc-s/jpg/201807-24-CBDF9F17B783CC28268B6F1FC2E6AAD9-th.jpg",
       "summary":"收到我家小侄女的订单，哈哈～",
        "scan":"190","collect":"1"},
        // 8
         {"id":"生活Diy","title":"可爱小鲸鱼项链","img":"https://cdn.rouding.com/imagesrc-s/jpg/201903-1-293CB1C82A5B7C48DD24B40472192817-th.jpg",
       "summary":"在浩瀚的海洋中，除了此起彼伏的波涛声之外，还有优美动听的歌声。鲸是海洋中的歌唱家，它们用歌声诉说着海的故事。",
        "scan":"120","collect":"1"},
        {"id":"生活Diy","title":"家具改造","img":"https://cdn.rouding.com/imagesrc-s/jpg/201504-11-76028762F59AE0F7B4477162E9018A6D-th.jpg",
       "summary":"拉斯特三斗抽屉柜是未涂漆实木材质。实话说，宜家的合板家具质量真不怎么样，可实木家具品质就相当不错。朴素的表面才方便我们进行涂油、打蜡和涂漆处理，省去清除旧漆的步骤。先来看报纸的应用。",
        "scan":"120","collect":"1"},
    ]
    obj = JSON.stringify(obj);
    localStorage.setItem("lifeJosn_life", obj);
    // 摄影
    var obj = [
        {"id":"生活Diy","title":"随便","img":"https://www.rouding.com/bianfeiweibao/1713024.html","summary":"哈哈哈哈","scan":"10","collect":"10"},
        {"id":"生活Diy","title":"随便哒哒打","img":"https://www.rouding.com/bianfeiweibao/1713024.html","summary":"哈哈哈哈","scan":"10","collect":"10"},
        {"id":"生活Diy","title":"随便哈哈哈哈","img":"https://www.rouding.com/bianfeiweibao/1713024.html","summary":"哈哈哈哈，牛逼","scan":"10","collect":"10"},
    ]
    obj = JSON.stringify(obj);
    localStorage.setItem("lifeJosn_photograpere", obj);
    // 电子
    var obj = [
        {"id":"生活Diy","title":"随便","img":"https://www.rouding.com/bianfeiweibao/1713024.html","summary":"哈哈哈哈","scan":"10","collect":"10"},
        {"id":"生活Diy","title":"随便哒哒打","img":"https://www.rouding.com/bianfeiweibao/1713024.html","summary":"哈哈哈哈","scan":"10","collect":"10"},
        {"id":"生活Diy","title":"随便哈哈哈哈","img":"https://www.rouding.com/bianfeiweibao/1713024.html","summary":"哈哈哈哈，牛逼","scan":"10","collect":"10"},
    ]
    obj = JSON.stringify(obj);
    localStorage.setItem("lifeJosn_tube", obj);

}
// 传统手工
var traditionDiy =function(){
    var obj = [
        {"id":"传统手工","title":"随便","img":"https://www.rouding.com/bianfeiweibao/1713024.html","summary":"哈哈哈哈","scan":"10","collect":"10"},
        {"id":"传统手工","title":"随便哒哒打","img":"https://www.rouding.com/bianfeiweibao/1713024.html","summary":"哈哈哈哈","scan":"10","collect":"10"},
        {"id":"传统手工","title":"随便哈哈哈哈","img":"https://www.rouding.com/bianfeiweibao/1713024.html","summary":"哈哈哈哈，牛逼","scan":"10","collect":"10"},
    ]
    obj = JSON.stringify(obj);
    localStorage.setItem("traditionJosn", obj);
}

// 民间艺术
var popularDiy =function(){
    var obj = [
        {"id":"民间艺术","title":"随便","img":"https://www.rouding.com/bianfeiweibao/1713024.html","summary":"哈哈哈哈","scan":"10","collect":"10"},
        {"id":"民间艺术","title":"随便哒哒打","img":"https://www.rouding.com/bianfeiweibao/1713024.html","summary":"哈哈哈哈","scan":"10","collect":"10"},
        {"id":"民间艺术","title":"随便哈哈哈哈","img":"https://www.rouding.com/bianfeiweibao/1713024.html","summary":"哈哈哈哈，牛逼","scan":"10","collect":"10"},
    ]
    obj = JSON.stringify(obj);
    localStorage.setItem("popularJosn", obj);
}

// 创意美术
var artDiy =function(){
    var obj = [
        {"id":"创意美术","title":"随便","img":"https://www.rouding.com/bianfeiweibao/1713024.html","summary":"哈哈哈哈","scan":"10","collect":"10"},
        {"id":"创意美术","title":"随便哒哒打","img":"https://www.rouding.com/bianfeiweibao/1713024.html","summary":"哈哈哈哈","scan":"10","collect":"10"},
        {"id":"创意美术","title":"随便哈哈哈哈","img":"https://www.rouding.com/bianfeiweibao/1713024.html","summary":"哈哈哈哈，牛逼","scan":"10","collect":"10"},
    ]
    obj = JSON.stringify(obj);
    localStorage.setItem("artJosn", obj);
}

//-------------------------------------------------------------------------------步骤页数据---------------------------------------------------------
 //生活diy
var lifeDiy02 =function(){
    // 生活
    var obj = [
        // 1
        {"id":"生活Diy","title":"小人国般的微型建筑",
        "material":"",
        "stepImg1":"https://cdn.rouding.com/imagesrc-s/jpg/201608-31-9CE844BE15EC226D08DB2A8CE06D497E-th.jpg",
        "stepContent1":"这些树屋是木造建筑，并用布料装饰得温馨，摆进精挑细选的家具，最后再用散发宝石光芒的石头做造景，于是一栋栋小人国建案宣告落成。",
        "stepImg2":"https://cdn.rouding.com/imagesrc-s/jpg/201608-31-2CA9BBCF4CB46C5BB6D4C8C2AFF3B9F0-th.jpg",
        "stepContent2":"首这组树屋盆景从幽静丛林中的瞭望塔，到大树下的水车、屋顶的风车，千奇百态的房子栖息在植物中，房子不大，内部却格外精致，甚至连桌椅，挂画都可以清晰看到。好想把自己缩小住在里面……",
        },
        // 2
        {"id":"生活Diy","title":"亲手DIY地中海贝壳相框",
        "material":"丙烯颜料、贝壳、木质相框、海绵纸、羽毛、胶水、画笔",
        "stepImg1":"https://cdn.https://cdn.rouding.com/imagesrc-s/jpg/201903-01-A332D6CA3BE5FA6D37D21E2A2ADF81D2-th.jpgrouding.com/imagesrc-s/jpg/201608-31-9CE844BE15EC226D08DB2A8CE06D497E-th.jpg",
        "stepContent1":"拿喜欢的颜料用画笔把相框图上颜色。",
        "stepImg2":"https://cdn.rouding.com/imagesrc-s/jpg/201903-01-FAE73B2AC562E82EFB178FA7BC637C93-th.jpg",
        "stepContent2":"在相框右上方用胶水粘上你喜欢的贝壳", 
        "stepImg3":"https://cdn.rouding.com/imagesrc-s/jpg/201903-01-B0232E8D074ABCF5067BB093728368E2-th.jpg",
        "stepContent3":"如图所示，在相框下方一排粘上贝壳",
        "stepImg4":"https://cdn.rouding.com/imagesrc-s/jpg/201903-01-6F2556168B0C8AF8252CC8CC243D9601-th.jpg",
        "stepContent4":"用海绵布和一片羽毛粘贴如图所示，准备一个爱心水晶",
        "stepImg5":"https://cdn.rouding.com/imagesrc-s/jpg/201903-01-17AA662F5A18233505BAB745A5C4C316-th.jpg",
        "stepContent5":"饰品粘贴如下，准备一张白色卡纸剪跟相框一样大小粘贴在后面",
        "stepImg6":"https://cdn.rouding.com/imagesrc-s/jpg/201903-01-7EE542CB8F3973169B32A7AF622ADE38-th.jpg",
        "stepContent6":"接着把喜欢的相片放在相框里面用胶水粘贴好",
        "stepImg7":"https://cdn.rouding.com/imagesrc-s/jpg/201903-01-315BF0DBC1DAB7376350CCD56C406FAB-th.jpg",
        "stepContent7":"漂亮的贝壳相框制作完成啦",
        },
        // 3
        {"id":"生活Diy","title":"超可爱晴雨表",
        "material":"彩色卡纸、不织布、英语子母贴片、扣子、扭扭棒、双面胶、锥子、剪刀、笔。",
        "stepImg1":"https://cdn.rouding.com/imagesrc-s/jpg/201903-01-0A210AA9A150F2EF32CDC55955FA6AAF-th.jpg",
        "stepContent1":"选取卡纸一张，在上面画出一个圆形（可借助光盘、圆规等）。用剪刀沿线剪下。",
        "stepImg2":"https://cdn.rouding.com/imagesrc-s/jpg/201903-01-3ABA291DB831F5DFF1F506A1A4CBD517-th.jpg",
        "stepContent2":"选取卡纸一张，在上面画出一个圆形（可借助光盘、圆规等）。用剪刀沿线剪下。",
        "stepImg3":"https://cdn.rouding.com/imagesrc-s/jpg/201903-01-6007ED41D7DBAF728CDC3A87CE2B1C1F-th.jpg",
        "stepContent3":"在白色、蓝色卡纸，黄色、白色不织布上分别画出云朵、雨滴、阳光和雪花的形状，用剪刀剪下备用。",
        "stepImg4":"https://cdn.rouding.com/imagesrc-s/jpg/201903-01-5B5B06A7C1422025F351A2D7DB86CC1D-th.jpg",
        "stepContent4":"在将云朵、雨滴、阳光、雪花图案用双面胶粘在圆形卡纸上。",
        "stepImg5":"https://cdn.rouding.com/imagesrc-s/jpg/201903-01-9B49E9B6B962A25E26B3A0EAF52CD887-th.jpg",
        "stepContent5":"用英语字母贴片在图案下粘出英文示意。阳光sun，云朵clouds，下雨rain，下雪snow。如果没有字母贴片可用彩笔书写代替。",
        "stepImg6":"https://cdn.rouding.com/imagesrc-s/jpg/201903-01-13CC2C37D7BB8B87B938EEFEF00753B3-th.jpg",
        "stepContent6":"在黑色卡纸上画出箭头的形状，准备锥子、双孔钮扣、扭扭棒。",
        "stepImg7":"https://cdn.rouding.com/imagesrc-s/jpg/201903-01-D87D5DBB33E3C66B0CF95DB543BEFC18-th.jpg",
        "stepContent7":"用锥子在箭头尾部和卡纸中心戳一个小洞。将扭扭棒穿过双孔钮扣后扭成1根，再穿过箭头和卡纸，最后将尾部按压固定。",
        },
         // 4
         {"id":"生活Diy","title":"布艺手工JK领结短柄平结蝴蝶结",
         "material":"棉布、针线、松紧插扣、熨斗可有可无 有了更好、剪刀、",
         "stepImg1":"https://cdn.rouding.com/imagesrc-s/jpg/201807-24-2FFDD3EEB99924B13D0443A8FF336DC3-th.jpg",
         "stepContent1":"布料准备 尺寸图标",
         "stepImg2":"https://cdn.rouding.com/imagesrc-s/jpg/201807-24-363BA9E343239D135018C00B3605703D-th.jpg",
         "stepContent2":"①号布对折平针缝来回后布缝烫平放一边备用",
         "stepImg3":"https://cdn.rouding.com/imagesrc-s/jpg/201807-24-DD8A4C694D72CDFBE60FE7DCFFA7E9AA-th.jpg",
         "stepContent3":"②号布对折平针来回缝三个边中间记得留口翻过来烫平",
         "stepImg4":"https://cdn.rouding.com/imagesrc-s/jpg/201807-24-99B085E0F08F0487039F9EDBED4AF7CB-th.jpg",
         "stepContent4":"③号④号布对折平针来回后掏出来烫平",
         "stepImg5":"https://cdn.rouding.com/imagesrc-s/jpg/201807-24-A504CA16895BCEFFD4EFE4A9451D131A-th.jpg",
         "stepContent5":"②③④号布都准备好烫平",
         "stepImg6":"https://cdn.rouding.com/imagesrc-s/jpg/201807-24-097CF851F6112CC9A7A776E484339359-th.jpg",
         "stepContent6":"①号布如图三折按照黄线地方把三份布平针缝在一起 这一步的布就比较厚不用缝来回",
         "stepImg7":"https://cdn.rouding.com/imagesrc-s/jpg/201807-24-1FC82B871EC39F5CDDCD4F7881EC8738-th.jpg",
         "stepContent7":"①号②号布如图折出褶子缝一针待用 注意两边对称",
         },
         // 1
        {"id":"生活Diy","title":"小人国般的微型建筑",
        "material":"",
        "stepImg1":"https://cdn.rouding.com/imagesrc-s/jpg/201608-31-9CE844BE15EC226D08DB2A8CE06D497E-th.jpg",
        "stepContent1":"这些树屋是木造建筑，并用布料装饰得温馨，摆进精挑细选的家具，最后再用散发宝石光芒的石头做造景，于是一栋栋小人国建案宣告落成。",
        "stepImg2":"https://cdn.rouding.com/imagesrc-s/jpg/201608-31-2CA9BBCF4CB46C5BB6D4C8C2AFF3B9F0-th.jpg",
        "stepContent2":"首这组树屋盆景从幽静丛林中的瞭望塔，到大树下的水车、屋顶的风车，千奇百态的房子栖息在植物中，房子不大，内部却格外精致，甚至连桌椅，挂画都可以清晰看到。好想把自己缩小住在里面……",
        },
        // 2
        {"id":"生活Diy","title":"亲手DIY地中海贝壳相框",
        "material":"丙烯颜料、贝壳、木质相框、海绵纸、羽毛、胶水、画笔",
        "stepImg1":"https://cdn.https://cdn.rouding.com/imagesrc-s/jpg/201903-01-A332D6CA3BE5FA6D37D21E2A2ADF81D2-th.jpgrouding.com/imagesrc-s/jpg/201608-31-9CE844BE15EC226D08DB2A8CE06D497E-th.jpg",
        "stepContent1":"拿喜欢的颜料用画笔把相框图上颜色。",
        "stepImg2":"https://cdn.rouding.com/imagesrc-s/jpg/201903-01-FAE73B2AC562E82EFB178FA7BC637C93-th.jpg",
        "stepContent2":"在相框右上方用胶水粘上你喜欢的贝壳", 
        "stepImg3":"https://cdn.rouding.com/imagesrc-s/jpg/201903-01-B0232E8D074ABCF5067BB093728368E2-th.jpg",
        "stepContent3":"如图所示，在相框下方一排粘上贝壳",
        "stepImg4":"https://cdn.rouding.com/imagesrc-s/jpg/201903-01-6F2556168B0C8AF8252CC8CC243D9601-th.jpg",
        "stepContent4":"用海绵布和一片羽毛粘贴如图所示，准备一个爱心水晶",
        "stepImg5":"https://cdn.rouding.com/imagesrc-s/jpg/201903-01-17AA662F5A18233505BAB745A5C4C316-th.jpg",
        "stepContent5":"饰品粘贴如下，准备一张白色卡纸剪跟相框一样大小粘贴在后面",
        "stepImg6":"https://cdn.rouding.com/imagesrc-s/jpg/201903-01-7EE542CB8F3973169B32A7AF622ADE38-th.jpg",
        "stepContent6":"接着把喜欢的相片放在相框里面用胶水粘贴好",
        "stepImg7":"https://cdn.rouding.com/imagesrc-s/jpg/201903-01-315BF0DBC1DAB7376350CCD56C406FAB-th.jpg",
        "stepContent7":"漂亮的贝壳相框制作完成啦",
        },
        // 3
        {"id":"生活Diy","title":"超可爱晴雨表",
        "material":"彩色卡纸、不织布、英语子母贴片、扣子、扭扭棒、双面胶、锥子、剪刀、笔。",
        "stepImg1":"https://cdn.rouding.com/imagesrc-s/jpg/201903-01-0A210AA9A150F2EF32CDC55955FA6AAF-th.jpg",
        "stepContent1":"选取卡纸一张，在上面画出一个圆形（可借助光盘、圆规等）。用剪刀沿线剪下。",
        "stepImg2":"https://cdn.rouding.com/imagesrc-s/jpg/201903-01-3ABA291DB831F5DFF1F506A1A4CBD517-th.jpg",
        "stepContent2":"选取卡纸一张，在上面画出一个圆形（可借助光盘、圆规等）。用剪刀沿线剪下。",
        "stepImg3":"https://cdn.rouding.com/imagesrc-s/jpg/201903-01-6007ED41D7DBAF728CDC3A87CE2B1C1F-th.jpg",
        "stepContent3":"在白色、蓝色卡纸，黄色、白色不织布上分别画出云朵、雨滴、阳光和雪花的形状，用剪刀剪下备用。",
        "stepImg4":"https://cdn.rouding.com/imagesrc-s/jpg/201903-01-5B5B06A7C1422025F351A2D7DB86CC1D-th.jpg",
        "stepContent4":"在将云朵、雨滴、阳光、雪花图案用双面胶粘在圆形卡纸上。",
        "stepImg5":"https://cdn.rouding.com/imagesrc-s/jpg/201903-01-9B49E9B6B962A25E26B3A0EAF52CD887-th.jpg",
        "stepContent5":"用英语字母贴片在图案下粘出英文示意。阳光sun，云朵clouds，下雨rain，下雪snow。如果没有字母贴片可用彩笔书写代替。",
        "stepImg6":"https://cdn.rouding.com/imagesrc-s/jpg/201903-01-13CC2C37D7BB8B87B938EEFEF00753B3-th.jpg",
        "stepContent6":"在黑色卡纸上画出箭头的形状，准备锥子、双孔钮扣、扭扭棒。",
        "stepImg7":"https://cdn.rouding.com/imagesrc-s/jpg/201903-01-D87D5DBB33E3C66B0CF95DB543BEFC18-th.jpg",
        "stepContent7":"用锥子在箭头尾部和卡纸中心戳一个小洞。将扭扭棒穿过双孔钮扣后扭成1根，再穿过箭头和卡纸，最后将尾部按压固定。",
        },
         // 4
         {"id":"生活Diy","title":"布艺手工JK领结短柄平结蝴蝶结",
         "material":"棉布、针线、松紧插扣、熨斗可有可无 有了更好、剪刀、",
         "stepImg1":"https://cdn.rouding.com/imagesrc-s/jpg/201807-24-2FFDD3EEB99924B13D0443A8FF336DC3-th.jpg",
         "stepContent1":"布料准备 尺寸图标",
         "stepImg2":"https://cdn.rouding.com/imagesrc-s/jpg/201807-24-363BA9E343239D135018C00B3605703D-th.jpg",
         "stepContent2":"①号布对折平针缝来回后布缝烫平放一边备用",
         "stepImg3":"https://cdn.rouding.com/imagesrc-s/jpg/201807-24-DD8A4C694D72CDFBE60FE7DCFFA7E9AA-th.jpg",
         "stepContent3":"②号布对折平针来回缝三个边中间记得留口翻过来烫平",
         "stepImg4":"https://cdn.rouding.com/imagesrc-s/jpg/201807-24-99B085E0F08F0487039F9EDBED4AF7CB-th.jpg",
         "stepContent4":"③号④号布对折平针来回后掏出来烫平",
         "stepImg5":"https://cdn.rouding.com/imagesrc-s/jpg/201807-24-A504CA16895BCEFFD4EFE4A9451D131A-th.jpg",
         "stepContent5":"②③④号布都准备好烫平",
         "stepImg6":"https://cdn.rouding.com/imagesrc-s/jpg/201807-24-097CF851F6112CC9A7A776E484339359-th.jpg",
         "stepContent6":"①号布如图三折按照黄线地方把三份布平针缝在一起 这一步的布就比较厚不用缝来回",
         "stepImg7":"https://cdn.rouding.com/imagesrc-s/jpg/201807-24-1FC82B871EC39F5CDDCD4F7881EC8738-th.jpg",
         "stepContent7":"①号②号布如图折出褶子缝一针待用 注意两边对称",
         },
    ]
    obj = JSON.stringify(obj);
    localStorage.setItem("lifeJosn02_life", obj);
    // 摄影
}
// 传统手工
var traditionDiy02 =function(){
    var obj = [
        {"id":"传统手工","title":"随便","stepImg1":"https://www.rouding.com/bianfeiweibao/1713024.html","stepContent1":"首先呢",
        "stepImg2":"https://www.rouding.com/bianfeiweibao/1713024.html","stepContent2":"首先呢",
        "stepImg3":"https://www.rouding.com/bianfeiweibao/1713024.html","stepContent3":"首先呢"},
        {"id":"传统手工","title":"随便哒哒打"},
        {"id":"传统手工","title":"随便哈哈哈哈"}
    ]
    obj = JSON.stringify(obj);
    localStorage.setItem("traditionJosn02", obj);
}

// 民间艺术
var popularDiy02 =function(){
    var obj = [
        {"id":"民间艺术","title":"随便","stepImg1":"https://www.rouding.com/bianfeiweibao/1713024.html","stepContent1":"首先呢",
        "stepImg2":"https://www.rouding.com/bianfeiweibao/1713024.html","stepContent2":"首先呢",
        "stepImg3":"https://www.rouding.com/bianfeiweibao/1713024.html","stepContent3":"首先呢"},
        {"id":"民间艺术","title":"随便哒哒打"},
        {"id":"民间艺术","title":"随便哈哈哈哈"}
    ]
    obj = JSON.stringify(obj);
    localStorage.setItem("popularJosn02", obj);
}

// 创意美术
var artDiy02 =function(){
    var obj = [
        {"id":"创意美术","title":"随便","stepImg1":"https://www.rouding.com/bianfeiweibao/1713024.html","stepContent1":"首先呢",
        "stepImg2":"https://www.rouding.com/bianfeiweibao/1713024.html","stepContent2":"首先呢",
        "stepImg3":"https://www.rouding.com/bianfeiweibao/1713024.html","stepContent3":"首先呢"},
        {"id":"创意美术","title":"随便哒哒打"},
        {"id":"创意美术","title":"随便哈哈哈哈"}
    ]
    obj = JSON.stringify(obj);
    localStorage.setItem("artJosn02", obj);
}
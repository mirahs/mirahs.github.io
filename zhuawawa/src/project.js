require=function n(c,s,u){function h(e,t){if(!s[e]){if(!c[e]){var i="function"==typeof require&&require;if(!t&&i)return i(e,!0);if(r)return r(e,!0);var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}var a=s[e]={exports:{}};c[e][0].call(a.exports,function(t){return h(c[e][1][t]||t)},a,a.exports,n,c,s,u)}return s[e].exports}for(var r="function"==typeof require&&require,t=0;t<u.length;t++)h(u[t]);return h}({game:[function(t,e,i){"use strict";cc._RF.push(e,"75d52VzxixEZbClr5yh2/2S","game"),cc.Class({extends:cc.Component,properties:{audio_click:{url:cc.AudioClip,default:null},audio_readygo:{url:cc.AudioClip,default:null},zhua_line:{type:cc.Sprite,default:null},zhuazi:{type:cc.Sprite,default:null},zhua_top:{type:cc.Sprite,default:null},zhuanchang_name:{type:cc.Label,default:null},cost_num:{type:cc.Label,default:null},coin_num:{type:cc.Label,default:null},wawa_prefab:{type:cc.Prefab,default:null},result_prefab:{type:cc.Prefab,default:null},prize:{type:cc.Node,default:null},xiazhua_btn:cc.Button,shake_zhuazi_seq:null,shake_zhualine_seq:null,shake_zhuatop_seq:null,shake_wawa_seq:null,orign_zhuazi_pos:null,orign_zhualine_pos:null,orign_zhuatop_pos:null,prize_list_layout_pos:null,orign_zhualine_scale_y:0,prize_bar:{type:cc.Sprite,default:null},prize_list_layout:{type:cc.Layout,default:null},lottery_data:null,zhua_click:0},shake:function(){this.shake_zhuazi_seq=cc.repeatForever(cc.sequence(cc.moveBy(1,-100,0),cc.moveBy(1,100,0),cc.moveBy(1,100,0),cc.moveBy(1,-100,0))),this.shake_zhualine_seq=cc.repeatForever(cc.sequence(cc.moveBy(1,-100,0),cc.moveBy(1,100,0),cc.moveBy(1,100,0),cc.moveBy(1,-100,0))),this.shake_zhuatop_seq=cc.repeatForever(cc.sequence(cc.moveBy(1,-100,0),cc.moveBy(1,100,0),cc.moveBy(1,100,0),cc.moveBy(1,-100,0))),this.zhuazi.node.runAction(this.shake_zhuazi_seq),this.zhua_line.node.runAction(this.shake_zhualine_seq),this.zhua_top.node.runAction(this.shake_zhuatop_seq),this.prize_list_layout.node.setCascadeOpacityEnabled(!1),this.prize_list_layout.node.opacity=0;var t=this.prize_list_layout.node.width;console.log(t),this.shake_wawa_seq=cc.repeatForever(cc.sequence(cc.moveBy(2,-t/3,0),cc.moveBy(2,t/3,0),cc.moveBy(2,t/3,0),cc.moveBy(2,-t/3,0))),this.prize_list_layout.node.runAction(this.shake_wawa_seq)},onLoad:function(){this.orign_zhuazi_pos=this.zhuazi.node.position,this.orign_zhuatop_pos=this.zhua_top.node.position,this.orign_zhualine_pos=this.zhua_line.node.position,this.prize_list_layout_pos=this.prize_list_layout.node.position,this.orign_zhualine_height=this.zhua_line.node.height,this.initData()},sendHttpReq:function(t,e,i){var o=this,a=new XMLHttpRequest;a.onreadystatechange=function(){if(4==a.readyState&&200<=a.status&&a.status<400){var t=a.responseText;i(JSON.parse(t),t,o)}},a.open("POST",t,!0),a.setRequestHeader("Content-Type","application/x-www-form-urlencoded;");var n=[];for(var c in e)n.push(c+"="+e[c]);var s=n.join("&");a.send(s)},getLotteryId:function(){var t=window.location.href,e=t.indexOf("id/"),i=t.indexOf(".html");return t.substr(e+3,i-e-3)},initData:function(){this.getLotteryId();var t=this;this.coin_num.string="金币："+1e4,this.zhuanchang_name.string="mirahs",this.cost_num.string="100金币/次",this.lottery_data={};for(var e=0;e<5;e++){var i=cc.instantiate(this.wawa_prefab);i.setPosition(cc.p(0,0)),i.getComponent("good").setData("i"+e,""),this.prize_list_layout.node.addChild(i)}setTimeout(function(){t.shake()},500)},zhuawawa_go:function(){this.zhuazi.node.stopAction(this.shake_zhuazi_seq),this.zhua_top.node.stopAction(this.shake_zhuatop_seq),this.zhua_line.node.stopAction(this.shake_zhualine_seq),this.prize_list_layout.node.stopAction(this.shake_wawa_seq);var t=this.prize_bar.node.height,e=this.zhuazi.node.height,i=this.prize_bar.node.position.y+t,o=this.zhuazi.node.position.x;i+=297,i-=t;var a=cc.sequence(cc.moveTo(.1,o,i),cc.rotateTo(.1,3),cc.rotateTo(.1,0),cc.rotateTo(.1,-3),cc.rotateTo(.1,0));this.zhuazi.node.runAction(a);this.orign_zhualine_scale_y=(this.orign_zhualine_pos.y+this.zhua_line.node.height/2-i-e/2)/this.orign_zhualine_height;cc.director.getWinSizeInPixels().height,this.orign_zhualine_pos.y,i=this.orign_zhualine_pos.y+this.zhua_line.node.height/2-this.orign_zhualine_scale_y*this.zhua_line.node.height/2;var n=this.zhua_line.node.x,c=cc.spawn(cc.scaleTo(.1,1,this.orign_zhualine_scale_y),cc.moveTo(.1,n,i));this.zhua_line.node.runAction(c);this.getLotteryId();var s=this;setTimeout(function(){var t;(s.coin_num.string="金币：9900",Math.random()<.5)?((t=cc.instantiate(s.result_prefab)).setPosition(cc.p(0,0)),t.getComponent("result").setData("很遗憾","",function(){s.resetGame()}),s.node.addChild(t)):((t=cc.instantiate(s.result_prefab)).setPosition(cc.p(0,0)),t.getComponent("result").setData("恭喜您抓到了，已存入背包！","",function(){s.resetGame()}),s.node.addChild(t))},700)},zhuawawa:function(){if(1!=this.zhua_click){this.zhua_click=1,cc.audioEngine.play(this.audio_readygo,!1);var t=this,e=cc.sequence(cc.rotateTo(.1,2),cc.rotateTo(.1,0),cc.rotateTo(.1,-2),cc.rotateTo(.1,0),cc.rotateTo(.1,2),cc.rotateTo(.1,0),cc.rotateTo(.1,-2),cc.rotateTo(.1,0),cc.rotateTo(.1,2),cc.rotateTo(.1,0));this.zhuazi.node.runAction(e),setTimeout(function(){t.zhuawawa_go()},1200)}},resetGame:function(){cc.audioEngine.play(this.audio_click,!1),this.zhua_line.node.height=64,this.zhua_line.node.scaleY=1,this.zhuazi.node.position=this.orign_zhuazi_pos,this.zhua_top.node.position=this.orign_zhuatop_pos,this.zhua_line.node.position=this.orign_zhualine_pos,this.prize_list_layout.node.position=this.prize_list_layout_pos,this.shake(),this.zhua_click=0},charge:function(){this.resetGame()},detail:function(){cc.audioEngine.play(this.audio_click,!1),zhuawawa.show_detail(this.lottery_data)}}),cc._RF.pop()},{}],good:[function(t,e,i){"use strict";cc._RF.push(e,"e8c1cRLnANCuKCOs9FpC66t","good"),cc.Class({extends:cc.Component,properties:{good:{type:cc.Sprite,default:null},good_name:{type:cc.Label,default:null}},onLoad:function(){},setData:function(t,e){this.good_name.string=t},start:function(){}}),cc._RF.pop()},{}],result:[function(t,e,i){"use strict";cc._RF.push(e,"aa21dQ/CZ1OurlI1XXO6pNt","result"),cc.Class({extends:cc.Component,properties:{msg:cc.Label,good:cc.Sprite,audio_click:{url:cc.AudioClip,default:null},gameCallback:null},setData:function(t,e,i){this.msg.string=t,this.gameCallback=i},start:function(){},ok:function(){cc.audioEngine.play(this.audio_click,!1),this.node.destroy(),this.gameCallback()}}),cc._RF.pop()},{}]},{},["game","good","result"]);
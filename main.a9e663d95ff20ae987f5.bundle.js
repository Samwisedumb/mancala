webpackJsonp([1],{"+h1B":function(n,l,t){"use strict";var e=t("/oeL"),u=t("aR8+"),r=t("wQAS"),o=t("q4dy"),a=t("qbdv"),i=t("fc+i");t.d(l,"a",function(){return c});var c=e.b(u.a,[r.a],function(n){return e.c([e.d(512,e.e,e.f,[[8,[o.a]],[3,e.e],e.g]),e.d(5120,e.h,e.i,[[3,e.h]]),e.d(4608,a.a,a.b,[e.h]),e.d(4608,e.j,e.j,[]),e.d(5120,e.k,e.l,[]),e.d(5120,e.m,e.n,[]),e.d(5120,e.o,e.p,[]),e.d(4608,i.b,i.c,[i.d]),e.d(6144,e.q,null,[i.b]),e.d(4608,i.e,i.f,[]),e.d(5120,i.g,function(n,l,t,e){return[new i.h(n),new i.i(l),new i.j(t,e)]},[i.d,i.d,i.d,i.e]),e.d(4608,i.k,i.k,[i.g,e.r]),e.d(135680,i.l,i.l,[i.d]),e.d(4608,i.m,i.m,[i.k,i.l]),e.d(6144,e.s,null,[i.m]),e.d(6144,i.n,null,[i.l]),e.d(4608,e.t,e.t,[e.r]),e.d(4608,i.o,i.o,[i.d]),e.d(4608,i.p,i.p,[i.d]),e.d(512,a.c,a.c,[]),e.d(1024,e.u,i.q,[]),e.d(1024,e.v,function(n,l){return[i.r(n,l)]},[[2,i.s],[2,e.w]]),e.d(512,e.x,e.x,[[2,e.v]]),e.d(131584,e.y,e.y,[e.r,e.z,e.A,e.u,e.e,e.x]),e.d(2048,e.B,null,[e.y]),e.d(512,e.C,e.C,[e.B]),e.d(512,i.t,i.t,[[3,i.t]]),e.d(512,u.a,u.a,[])])})},0:function(n,l,t){n.exports=t("cDNt")},"06HT":function(n,l,t){"use strict";t.d(l,"a",function(){return e});var e=function(){function n(n,l){this.player=n,this.hole=l}return n}()},NhKt:function(n,l,t){"use strict";t.d(l,"a",function(){return e});var e=[""]},U1uk:function(n,l,t){"use strict";t.d(l,"a",function(){return e});var e;!function(n){n[n.FIRST=0]="FIRST",n[n.SECOND=1]="SECOND"}(e||(e={}))},"aR8+":function(n,l,t){"use strict";t.d(l,"a",function(){return e});var e=function(){function n(){}return n}()},arZC:function(n,l,t){"use strict";var e=t("U1uk"),u=t("06HT"),r=t("dUAs");t.d(l,"a",function(){return o});var o=function(){function n(){this.width=6,this.currentPlayer=e.a.FIRST,this.board=new r.a(6,4)}return n.prototype.move=function(n,l){var t=new u.a(n,l);return!!this.validateMove(t)&&(this.harvestAndSow(t),!0)},n.prototype.getPlayersSeeds=function(n){var l=[],t=new u.a(n,0);for(t.hole=0;t.hole<this.width;t.hole++)l.push(this.board.getSeeds(t));return l},n.prototype.getValidMoves=function(n){var l=[];return this.getPlayersSeeds(n).forEach(function(n,t){n>0&&l.push(t)}),l},n.prototype.getCahcedSeeds=function(n){return this.board.getMancala(n)},n.prototype.validateMove=function(n){return n.player===this.currentPlayer&&this.board.getSeeds(n)>0},n.prototype.harvestAndSow=function(n){var l=this.board.getSeeds(n);for(this.board.setSeeds(0,n);l>0;)l=this.board.sow(l,this.board.nextHole(this.currentPlayer,n));this.nextTurn(n)},n.prototype.nextTurn=function(n){var l=this.getValidMoves(this.currentPlayer),t=this.getValidMoves(this.otherPlayer(this.currentPlayer));0===l.length&&0===t.length?alert("Game Over"):-1===n.hole&&l.length>0||t.length>0&&(this.currentPlayer=this.otherPlayer(this.currentPlayer))},n.prototype.otherPlayer=function(n){return n===e.a.FIRST?e.a.SECOND:e.a.FIRST},n}()},cDNt:function(n,l,t){"use strict";Object.defineProperty(l,"__esModule",{value:!0});var e=t("/oeL"),u=t("p5Ee"),r=t("+h1B"),o=t("fc+i");u.a.production&&t.i(e.a)(),t.i(o.a)().bootstrapModuleFactory(r.a)},dUAs:function(n,l,t){"use strict";var e=t("U1uk");t.d(l,"a",function(){return u});var u=function(){function n(n,l){var t=this;this.width=n,this.startSeeds=l,this.mancalas={},this.holes={},[e.a.FIRST,e.a.SECOND].forEach(function(e){t.holes[e]=Array(n).fill(l),t.mancalas[e]=0})}return n.prototype.sow=function(n,l){return-1===l.hole?this.mancalas[l.player]+=1:this.holes[l.player][l.hole]+=1,n-1},n.prototype.getSeeds=function(n){return this.holes[n.player][n.hole]},n.prototype.setSeeds=function(n,l){this.holes[l.player][l.hole]=n},n.prototype.getMancala=function(n){return this.mancalas[n]},n.prototype.nextHole=function(n,l){return 0===l.player?l.hole===this.width-1&&n===l.player?l.hole=-1:-1===l.hole||l.hole===this.width-1&&n!==l.player?(l.player=1,l.hole=this.width-1):l.hole+=1:0===l.hole&&n===l.player?l.hole=-1:-1===l.hole||0===l.hole&&n!==l.player?(l.player=0,l.hole=0):l.hole-=1,l},n}()},eUCh:function(n,l,t){"use strict";function e(n){return i._12(0,[(n()(),i._13(0,null,null,3,"td",[],null,[[null,"click"]],function(n,l,t){var e=!0,u=n.component;if("click"===l){e=!1!==u.game.move(0,n.context.index)&&e}return e},null,null)),i._14(278528,null,0,c.f,[i.m,i.o,i.Z,i._0],{ngClass:[0,"ngClass"]},null),i._17(["currentPlayer"]),(n()(),i._15(null,["",""]))],function(n,l){var t=l.component;n(l,1,0,n(l,2,0,t.game.currentPlayer===t.Player.FIRST&&l.context.$implicit>0))},function(n,l){n(l,3,0,l.context.$implicit)})}function u(n){return i._12(0,[(n()(),i._13(0,null,null,3,"td",[],null,[[null,"click"]],function(n,l,t){var e=!0,u=n.component;if("click"===l){e=!1!==u.game.move(1,n.context.index)&&e}return e},null,null)),i._14(278528,null,0,c.f,[i.m,i.o,i.Z,i._0],{ngClass:[0,"ngClass"]},null),i._17(["currentPlayer"]),(n()(),i._15(null,["",""]))],function(n,l){var t=l.component;n(l,1,0,n(l,2,0,t.game.currentPlayer===t.Player.SECOND&&l.context.$implicit>0))},function(n,l){n(l,3,0,l.context.$implicit)})}function r(n){return i._12(0,[(n()(),i._13(0,null,null,20,"table",[],null,null,null,null,null)),(n()(),i._15(null,["\n  "])),(n()(),i._13(0,null,null,18,"tbody",[],null,null,null,null,null)),(n()(),i._13(0,null,null,10,"tr",[],null,null,null,null,null)),(n()(),i._15(null,["\n    "])),(n()(),i._13(0,null,null,1,"td",[["rowspan","2"]],null,null,null,null,null)),(n()(),i._15(null,["",""])),(n()(),i._15(null,["\n    "])),(n()(),i._18(16777216,null,null,1,null,e)),i._14(802816,null,0,c.g,[i._2,i._3,i.m],{ngForOf:[0,"ngForOf"]},null),(n()(),i._15(null,["\n    "])),(n()(),i._13(0,null,null,1,"td",[["rowspan","2"]],null,null,null,null,null)),(n()(),i._15(null,["",""])),(n()(),i._15(null,["\n  "])),(n()(),i._15(null,["\n  "])),(n()(),i._13(0,null,null,4,"tr",[],null,null,null,null,null)),(n()(),i._15(null,["\n    "])),(n()(),i._18(16777216,null,null,1,null,u)),i._14(802816,null,0,c.g,[i._2,i._3,i.m],{ngForOf:[0,"ngForOf"]},null),(n()(),i._15(null,["\n  "])),(n()(),i._15(null,["\n"])),(n()(),i._15(null,["\n"]))],function(n,l){var t=l.component;n(l,9,0,t.game.getPlayersSeeds(t.Player.FIRST)),n(l,18,0,t.game.getPlayersSeeds(t.Player.SECOND))},function(n,l){var t=l.component;n(l,6,0,t.game.getCahcedSeeds(t.Player.SECOND)),n(l,12,0,t.game.getCahcedSeeds(t.Player.FIRST))})}function o(n){return i._12(0,[(n()(),i._13(0,null,null,1,"mancala",[],null,null,null,r,f)),i._14(49152,null,0,s.a,[],null,null)],null,null)}var a=t("p2E+"),i=t("/oeL"),c=t("qbdv"),s=t("ezF9");t.d(l,"b",function(){return f}),l.a=r;var d=[a.a],f=i._11({encapsulation:0,styles:d,data:{}});i._16("mancala",s.a,o,{},{},[])},ezF9:function(n,l,t){"use strict";var e=t("arZC"),u=t("U1uk");t.d(l,"a",function(){return r});var r=function(){function n(){this.game=new e.a,this.Player=u.a}return n}()},"p2E+":function(n,l,t){"use strict";t.d(l,"a",function(){return e});var e=["td.currentPlayer[_ngcontent-%COMP%]:hover{background-color:#00f;color:#fff}td[_ngcontent-%COMP%]{font-size:400%;font-family:Verdana,Geneva,sans-serif;width:1.5em;text-align:center}"]},p5Ee:function(n,l,t){"use strict";t.d(l,"a",function(){return e});var e={production:!0}},q4dy:function(n,l,t){"use strict";function e(n){return o._12(0,[(n()(),o._13(0,null,null,1,"mancala",[],null,null,null,a.a,a.b)),o._14(49152,null,0,i.a,[],null,null),(n()(),o._15(null,["\n"]))],null,null)}function u(n){return o._12(0,[(n()(),o._13(0,null,null,1,"app-root",[],null,null,null,e,d)),o._14(49152,null,0,c.a,[],null,null)],null,null)}var r=t("NhKt"),o=t("/oeL"),a=t("eUCh"),i=t("ezF9"),c=t("wQAS");t.d(l,"a",function(){return f});var s=[r.a],d=o._11({encapsulation:0,styles:s,data:{}}),f=o._16("app-root",c.a,u,{},{},[])},qtrl:function(n,l){function t(n){throw new Error("Cannot find module '"+n+"'.")}t.keys=function(){return[]},t.resolve=t,n.exports=t,t.id="qtrl"},wQAS:function(n,l,t){"use strict";t.d(l,"a",function(){return e});var e=function(){function n(){}return n}()}},[0]);
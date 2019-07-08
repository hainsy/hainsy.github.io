(function($) {
	$.fn.rvc = function(obj) {
		return this.each(function() {
			var self = $(this);
			var startX = 0,
				startY = 0; //瑙︽懜寮€濮嬫椂鎵嬪娍妯旱鍧愭爣 
			var temPos; //婊氬姩鍏冪礌褰撳墠浣嶇疆
			var iCurr = 0; //褰撳墠婊氬姩灞忓箷鏁�
			var oPosition = {}; //瑙︾偣浣嶇疆
			var iCurr = 0;
			var ww;
			var sw;
			var rvcw = self.children('.rvc-wrapper');
			var rvcw_ul = rvcw.find('ul');
			var clone = rvcw.find('li').clone();
			rvcw_ul.append(clone);
			var rvcw_li = rvcw.find('li');
			var liw;
			var liNum = obj.liNum;
			var plr = obj.plr;
			var sb = obj.spaceBetween;
			var time = obj.time;
			var size = rvcw_li.length;
			var rvcww;
			var prv = self.find(obj.prv);
			var next = self.find(obj.next);
			/*鍒ゆ柇鎵撳紑璁惧*/
			var system = {
				win: false,
				mac: false,
				xll: false
			};
			//妫€娴嬪钩鍙�     
			var p = navigator.platform;
			system.win = p.indexOf("Win") == 0;
			system.mac = p.indexOf("Mac") == 0;
			system.x11 = (p == "X11") || (p.indexOf("Linux") == 0);
			$(window).on('load resize', function() {
				ww = $(window).width();
				self.css('width', ww - plr * 2);
				sw = self.width();
				rvcw.css('width', sw - sb * 2);
				rvcww = rvcw.width();
				prv.width(sb)
				next.width(sb)
				if(ww >= 1024) {
					liw = (rvcww - (obj.spaceBetween * (liNum + 1))) / liNum
				}
				if(ww >= 768 && ww < 1024) {
					liw = (rvcww - (obj.spaceBetween * (3))) / 2
				}
				if(ww < 768) {
					liw = (rvcww - (obj.spaceBetween * (2))) / 1
				}
				rvcw_li.css({
					'width': liw,
					'margin-left': obj.spaceBetween
				});
				rvcw_ul.css('width', (liw + sb) * size);
			})
			//宸︽粦
			function move_left() {
				iCurr++;
				if(iCurr == size / 2 + 1) {
					rvcw_ul.css({
						left: 0
					});
					iCurr = 1;
				}
				rvcw_ul.stop().animate({
					left: -iCurr * (liw + sb)
				}, time);
			}
			$(next).on('click', function() {
				move_left();
			})
			// 鍙虫粦
			function move_right() {
				iCurr--;
				if(iCurr == -1) {
					rvcw_ul.css({
						left: -(size / 2) * (liw + sb)
					});
					iCurr = size / 2 - 1;
				}
				rvcw_ul.stop().animate({
					left: -iCurr * (liw + sb)
				}, time);
			}
			$(prv).on('click', function() {
				move_right();
			})
			//鑾峰彇瑙︾偣浣嶇疆
			function touchPos(e) {
				var touches = e.changedTouches,
					l = touches.length,
					touch, tagX, tagY;
				for(var i = 0; i < l; i++) {
					touch = touches[i];
					tagX = touch.clientX;
					tagY = touch.clientY;
				}
				oPosition.x = tagX;
				oPosition.y = tagY;
				return oPosition;
			}
			//瑙︽懜寮€濮�
			function touchStartFunc(e) {
				touchPos(e);
				startX = oPosition.x;
				startY = oPosition.y;
				temPos = rvcw_ul.position().left;
			}
			// 瑙︽懜缁撴潫
			function touchEndFunc(e) {
				touchPos(e);
				var moveX = oPosition.x - startX;
				var moveY = oPosition.y - startY;
				if(Math.abs(moveY) < Math.abs(moveX)) {
					if(moveX > 0) {
						move_right();
					} else {
						move_left();
					}
				}
			}
			if(system.win || system.mac || system.xll) {
				// 榧犳爣浜嬩欢
				rvcw_ul.mousedown(function(event) {
					var event = event || window.event;
					var disX = event.clientX;
					var iL;
					$(document).mousemove(function(event) {
						console.log(2)
						var event = event || window.event;
						iL = event.clientX - disX;
						return false
					})
					$(document).mouseup(function() {
						console.log(3)
						$(document).unbind('mousemove');
						$(document).unbind('mouseup');
						if(iL > 0) {
							move_right();
						} else {
							move_left();
						}

					})
					return false
				})
			} else {
				rvcw_ul.get(0).addEventListener('touchstart', touchStartFunc, false);
				rvcw_ul.get(0).addEventListener('touchend', touchEndFunc, false);
			}
		})
	}
})(jQuery)
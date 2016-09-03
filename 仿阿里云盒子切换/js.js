window.onload = function () {
	//容器对象
	var wrapper =  document.getElementById('wrapper');

	//获得盒子的NodeList对象集合
	var boxs = wrapper.getElementsByClassName('box');

	//单个盒子的宽度
	var boxWidth = boxs[0].offsetWidth;

	//设置掩藏盒子的暴露宽度
	var exposeWidth = 230;

	//设计容器总宽度
	var wrapperWidth = boxWidth + (boxs.length - 1) * exposeWidth;
	wrapper.style.width = wrapperWidth + 'px';

	//设置每个盒子的初始位置
	function setBoxPos(){
		for (var i = 1, len = boxs.length; i < len ; i++) {
			boxs[i].style.left = boxWidth + (i - 1) * exposeWidth + 'px';
		}		
	}
	setBoxPos();

	//计算每个盒子打开时应移动的距离
	var translate = boxWidth - exposeWidth;

	//为每个盒子绑定事件
	for (var i = 0; i <= boxs.length; i++) {
		//使用立即调用函数表达式，为了获得不同的i值
		(function(i) {
			boxs[i].onmouseover = function() {
				//先将每个盒子复位
				setBoxPos();
				//打开盒子
				for (var j = 1; j <= i; j++) {
					boxs[j].style.left = parseInt(boxs[j].style.left,10) - translate + 'px';
				}
			}
		})(i);
	}
};
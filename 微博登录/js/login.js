function Login () {
	this.btn = tools.$("#btn");
	this.container = tools.$("#container");
}
// 绑定按钮事件
Login.prototype = {
	constructor: Login, 
	bindEvents: function () {
		this.btn.onclick = function () {
			this.popBox();
		}.bind(this);
// 删除和登录按钮事件委托给container
	this.container.onclick = e => {
		// 使用case穿透登录的时候也会执行关闭事件的代码
		switch(e.target.id) {
			case "loginBtn": this.loginBtnClick();
			case "closeBtn": this.closeBtnClick(); break;
				
			}
		}
		
	},
	// 弹出发布框
popBox: function () {

		this.container.innerHTML = '<h4>发布微博</h4><a id="closeBtn" class="close_btn" href="javascript:;">×</a><p><label>用户名：<br/><input id="username" type="text"></label></p><p><label>上传内容：<br/><input id="content" type="text"></label></p><p><button id="loginBtn" class="loginBtn" type="button">点击上传</button></p>';

		tools.showCenter(this.container);

		this.modal = document.createElement('div');
		this.modal.className = "modal";
		document.body.appendChild(this.modal);
		// 拖拽
		new Drag(this.container, "h4");
	},
	// 关闭按钮
	closeBtnClick: function () {
		this.container.style.display = "none";
		this.modal.remove();
	},
	// 登录
	loginBtnClick: function () {
		let username = tools.$("#username").value;
		let content = tools.$("#content").value;
		if(username === "" || content === "") {
			alert("用户名或内容不能为空");
		}else{
			// ---- 发送后端，完成登录
			console.log(username, content);
		}
	}
	
}
new Login().bindEvents();
import { Component,Input,OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { Invest } from './invest';
import { LoginService } from './login.service';

@Component({
		selector:'my-login',
		templateUrl:'./login.template.html',
		styleUrls:['./login.style.css']
})

export class LoginComponent  implements OnInit{

	invest: Invest
	invests:Invest[] = []

	constructor(
		private loginService: LoginService,
		private router: Router) {}

	ngOnInit(): void {
		
	}


	login(username:string,password:string): void {
		this.loginService.login(username,password)
						.then(
							invests => {this.invests = invests//.slice(1,5)
							console.log(invests)
						}
						)
		// 验证 调用后台 成功的话缓存起来
		sessionStorage.setItem('token','1231231');

		this.router.navigate(['/home'])

	}

	gotoDetail(invest:Invest):void {

		//根据业务逻辑 需要判断

		let link = ['/invest',invest.type]
		this.router.navigate(link)
	}
}
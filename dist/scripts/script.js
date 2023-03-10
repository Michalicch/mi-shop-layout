const authBtn = document.getElementById('open-auth-btn')
const openCartBtn = document.getElementById('open-cart-btn')
const logoutBtn = document.getElementById('logout-btn')
const modal = document.getElementById('auth-modal')
const closeBtns = modal.querySelectorAll('.close-btn')
const loginBtn = modal.querySelector('.login-btn')



//Функции
const openModal = () => {
	modal.classList.add('d-block') //через классы бутстрап
	document.getElementById('password-control').type = 'password'//звездочки в пароле
	
	setTimeout(() => {
		modal.classList.add('show')
	}, 100)
}

const closeModal = () => {
	modal.classList.remove('show')
	setTimeout(() => {
		modal.classList.remove('d-block')
	}, 500)	
}

const login = () => {
	authBtn.classList.add('d-none')
	openCartBtn.classList.remove('d-none')
	logoutBtn.classList.remove('d-none')
	closeModal()
}
const logout = () => {
	authBtn.classList.remove('d-none')
	openCartBtn.classList.add('d-none')
	logoutBtn.classList.add('d-none')	
}

const checkAuth = () => {
	if (JSON.parse(localStorage.getItem('auth'))) {
		login()
	}
}


//Обработчики событий
authBtn.addEventListener('click', openModal);

closeBtns.forEach((btn) => {
	btn.addEventListener('click', closeModal)
})

loginBtn.addEventListener('click', () => {
	
	const loginInput = modal.querySelector('#login-control')
	const passwordInput = modal.querySelector('#password-control')
	
	const user = {
		login: loginInput.value,
		password: passwordInput.value 
	}
	if (loginInput.value != 0 && passwordInput.value != 0) {
		localStorage.setItem('auth', JSON.stringify(user))//auth - ключ, и данные usera в виде строки JSON.stringify переводит в строку
		login()	
		}else {
			alert("Вход не возможен! Авторизируйтесь!")
		}
	


//копия
	// const loginInput = modal.querySelector('#login-control')
	// const passwordInput = modal.querySelector('#password-control')

	// const user = {
	// 	login: loginInput.value,
	// 	password: passwordInput.value 
	// }

	// localStorage.setItem('auth', JSON.stringify(user))//auth - ключ, и данные usera в виде строки JSON.stringify переводит в строку
	// login()
})


logoutBtn.addEventListener('click', () => {
	localStorage.removeItem('auth')
	logout()
})

checkAuth()





















// const authBtn       = document.getElementById('open-auth-btn');
// const openCartBtn   = document.getElementById('open-cart-btn');
// const logoutBtn     = document.getElementById('logout-btn');
// const modal         = document.getElementById('auth-modal');
// const closeBtns     = modal.querySelectorAll('.close-btn');
// const loginBtn      = modal.querySelector('.login-btn');

// const openModal= ()=>{
//     modal.classList.add('d-block');
//     modal.querySelector('#password-control').setAttribute('type', 'password')

//     setTimeout(()=>{
//         modal.classList.add('show');
//     }, 100);
// };

// const closeModal= ()=>{
    
//     modal.classList.remove('show');

//     setTimeout(()=>{
//         modal.classList.remove('d-block');
//     }, 500);
// };

// const login = ()=>{
//     console.log('login Func');
//     authBtn.classList.add('d-none');
//     openCartBtn.classList.remove('d-none');
//     logoutBtn.classList.remove('d-none');
//     closeModal();

// }

// const logout=()=>{
//     authBtn.classList.remove('d-none');
//     openCartBtn.classList.add('d-none');
//     logoutBtn.classList.add('d-none');
// }

// const checkAuth= ()=>{
//     if (JSON.parse(localStorage.getItem('auth'))){
//         login()
//     };
// }
// authBtn.addEventListener('click', ()=>openModal());

// closeBtns.forEach(btn=>{
//     btn.addEventListener('click', ()=>closeModal())
// });

// loginBtn.addEventListener('click', ()=>{
//     const loginInput= modal.querySelector('#login-control');
//     const passwordInput= modal.querySelector('#password-control');
    
//     if(loginInput.value==''|| passwordInput.value==''){
//         alert("Fill in the fields\nЗаполните необходимые поля");
//         return 
//     }
//     const user = {
//         login:loginInput.value,
//         password:passwordInput.value 
//     };

//     localStorage.setItem('auth', JSON.stringify(user))

//     login();
// })
// logoutBtn.addEventListener('click', ()=>{
//     checkAuth();
//     logout();

// });
// checkAuth();


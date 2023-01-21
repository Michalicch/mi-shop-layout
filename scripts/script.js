const authBtn = document.getElementById('open-auth-btn')
const openCartBtn = document.getElementById('open-cart-btn')
const logoutBtn = document.getElementById('logout-btn')
const modal = document.getElementById('auth-modal')
const closeBtns = modal.querySelectorAll('.close-btn')
const loginBtn = modal.querySelector('.login-btn')




const openModal = () => {
	// modal.style.display = 'block'//через CSS стили
	modal.classList.add('d-block') //через классы бутстрап

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
	authBtn.style.display = 'none'
	openCartBtn.classList.remove('d-none')
	logoutBtn.classList.remove('d-none')
	// openCartBtn.style.display = 'block'
	// logoutBtn.style.display = 'block'

}
const logout = () => {
	console.log('logout');
}

//Обработчики событий
authBtn.addEventListener('click', openModal);

closeBtns.forEach((btn) => {
	btn.addEventListener('click', closeModal)
})

loginBtn.addEventListener('click', () => {
	login()
})


// closeBtns.forEach((btn) => {
// 	btn.addEventListener('click', () =>{
// 		closeModal()
// 	})
// })

// for (let i=0; i < closeBtns.length; i++){
// 	console.log(closeBtns[i]);
// }























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


// toggle class active untuk hamburger menu
const navbarNav = document.querySelector('.navbar-nav');
//ketika hamburger menu di klik//
document.querySelector('#hamburger-menu').onclick =() => {
    navbarNav.classList.toggle('active');
};

// shoppingcart
const shoppingCart = document.querySelector('.shopping-cart');
document.querySelector('#shopping-cart-button').onclick =() =>{
    shoppingCart.classList.toggle('active');
    e.preventDefault();
}


//klik diluar sidebar untuk menghilangkan nav// 
const hamburgerMenu = document.querySelector('#hamburger-menu');
const sc = document.querySelector('#shopping-cart-button');
const searchButton = document.querySelector('#search-button'); 
document.addEventListener('click',function(e){
    if (!hamburgerMenu.contains(e.target)&& !navbarNav.contains(e.target)){
        navbarNav.classList.remove('active');
    }
    if (!sc.contains(e.target)&& !shoppingCart.contains(e.target)){
        shoppingCart.classList.remove('active');
    }
    if (!searchButton.contains(e.target)&& !searchForm.contains(e.target)){
        searchForm.classList.remove('active');
    }
});




// toggle class active unutk search-form
const searchForm = document.querySelector('.search-form');
const searchBox = document .querySelector('#search-box');

document.querySelector('#search-button').onclick = (e) => {
    searchForm.classList.toggle('active');
    searchBox.focus();
    e.preventDefault();

};

// modal box
const itemDetailModal = document.querySelector('#item-detail-modal');
const itemDetailButton = document.querySelectorAll('.item-detail-button');

itemDetailButton.forEach((btn) => {
    btn.onclick = (e) =>{
            itemDetailModal.style.display ='flex';
            e.preventDefault();
}

});

// klik modal box
document.querySelector('.modal .close-icon').onclick = (e) =>{
    itemDetailModal.style.display ='none';
    e.preventDefault();
}

window.onclick =(e)=>{
    if(e.target === itemDetailModal ){
        itemDetailModal.style.display ='none';
    }
}
document.getElementById('waForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const nama = document.getElementById('nama').value.trim();
    const email = document.getElementById('email').value.trim();
    const nohp = document.getElementById('nohp').value.trim();
    const pesan = document.getElementById('pesan').value.trim();

    const waNumber = "6281218594413"; 


    const url = `https://wa.me/${waNumber}?text=${encodeURIComponent(message)}`;

    window.open(url, '_blank');
  });
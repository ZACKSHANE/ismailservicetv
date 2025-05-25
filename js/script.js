// Toggle class active untuk hamburger menu
const navbarNav = document.querySelector('.navbar-nav');
const hamburgerMenu = document.querySelector('#hamburger-menu');
if (hamburgerMenu) {
  hamburgerMenu.onclick = () => {
    navbarNav.classList.toggle('active');
  };
}

// Shopping cart toggle
const shoppingCart = document.querySelector('.shopping-cart');
const cartButton = document.querySelector('#shopping-cart-button');
if (cartButton) {
  cartButton.onclick = (e) => {
    e.preventDefault();
    shoppingCart.classList.toggle('active');
  };
}

// Toggle class active untuk search form
const searchForm = document.querySelector('.search-form');
const searchBox = document.querySelector('#search-box');
const searchButton = document.querySelector('#search-button');
if (searchButton) {
  searchButton.onclick = (e) => {
    e.preventDefault();
    searchForm.classList.toggle('active');
    searchBox.focus();
  };
}

// Klik di luar elemen untuk menutup menu, search, dan cart
document.addEventListener('click', function (e) {
  if (!hamburgerMenu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove('active');
  }
  if (!cartButton.contains(e.target) && !shoppingCart.contains(e.target)) {
    shoppingCart.classList.remove('active');
  }
  if (!searchButton.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove('active');
  }
});

// Modal box (deskripsi produk)
const itemDetailModal = document.querySelector('#item-detail-modal');
const itemDetailButtons = document.querySelectorAll('.item-detail-button');

itemDetailButtons.forEach(button => {
  button.addEventListener('click', function (e) {
    e.preventDefault();

    // Ambil data dari atribut data-
    const title = this.getAttribute('data-title');
    const description = this.getAttribute('data-description');
    const image = this.getAttribute('data-image');
    const price = this.getAttribute('data-price');
    const link = this.getAttribute('data-link');

    // Masukkan ke modal
    document.getElementById('modal-title').textContent = title;
    document.getElementById('modal-description').textContent = description;
    document.getElementById('modal-image').src = image;
    document.getElementById('modal-price').textContent = price;
    document.getElementById('modal-buy-link').href = link;

    // Tampilkan modal
    itemDetailModal.style.display = 'block';
  });
});

// Tombol close (ikon X)
const closeModalIcon = document.querySelector('.modal .close-icon');
if (closeModalIcon) {
  closeModalIcon.onclick = (e) => {
    e.preventDefault();
    itemDetailModal.style.display = 'none';
  };
}

// Klik di luar modal-container untuk menutup modal
window.onclick = (e) => {
  if (e.target === itemDetailModal) {
    itemDetailModal.style.display = 'none';
  }
};

// WhatsApp form submit
const waForm = document.getElementById('waForm');
if (waForm) {
  waForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const nama = document.getElementById('nama').value.trim();
    const email = document.getElementById('email').value.trim();
    const nohp = document.getElementById('nohp').value.trim();
    const pesan = document.getElementById('pesan').value.trim();

    const waNumber = "6281218594413";
    const message = `Nama: ${nama}%0AEmail: ${email}%0ANo HP: ${nohp}%0APesan: ${pesan}`;
    const url = `https://wa.me/${waNumber}?text=${encodeURIComponent(message)}`;

    window.open(url, '_blank');
  });
}

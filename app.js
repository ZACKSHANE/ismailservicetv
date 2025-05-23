document.addEventListener("alpine:init", () => {
  Alpine.data("product", () => ({
    items: [
      { id: 1, name: "Remote", image: "product/remote.jpg", price: 100000 },
      { id: 2, name: "Bracket x", image: "product/bracket1.jpg", price: 300000 },
      { id: 3, name: "Bracket y", image: "product/stand2.jpg", price: 400000 },
    ],
  }));

  Alpine.store("cart", {
    items: [],
    total: 0,
    quantity: 0,

    add(newItem) {
      const cartItem = this.items.find((item) => item.id === newItem.id);

      if (!cartItem) {
        this.items.push({ ...newItem, quantity: 1, total: newItem.price });
        this.quantity++;
        this.total += newItem.price;
      } else {
        this.items = this.items.map((item) => {
          if (item.id !== newItem.id) {
            return item;
          } else {
            item.quantity++;
            item.total = item.price * item.quantity;
            this.quantity++;
            this.total += item.price;
            return item;
          }
        });
      }
    },

    remove(id) {
      const cartItem = this.items.find((item) => item.id === id);

      if (!cartItem) return; // jika item tidak ada, keluar fungsi

      if (cartItem.quantity > 1) {
        this.items = this.items.map((item) => {
          if (item.id !== id) {
            return item;
          } else {
            item.quantity--;
            item.total = item.price * item.quantity;
            this.quantity--;
            this.total -= item.price;
            return item;
          }
        });
      } else {
        // jika quantity = 1, hapus item dari cart
        this.items = this.items.filter((item) => item.id !== id);
        this.quantity--;
        this.total -= cartItem.price;
      }
    },
  });

  // Fungsi konversi ke Rupiah
  window.rupiah = function (number) {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(number);
  };
});

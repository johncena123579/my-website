let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Hàm để cập nhật hiển thị giỏ hàng (nếu cần)
function updateCartDisplay() {
  // Logic để cập nhật giao diện giỏ hàng
}

// Hàm để xóa giỏ hàng (tùy chọn)
function clearCart() {
  cart = [];
  localStorage.removeItem("cart");
}

// Hàm để xem các sản phẩm trong giỏ hàng
function viewCart() {
  console.log("Các sản phẩm trong giỏ hàng:", cart);
}
function updateCartCount() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const count = cart.reduce((total, item) => total + item.quantity, 0);
  const countElement = document.getElementById("cart-count");
  if (countElement) {
    countElement.innerText = count;
  }
}

// Call it when page loads
document.addEventListener("DOMContentLoaded", updateCartCount);
// Cập nhật số lượng sản phẩm trong icon giỏ hàng
function addToCart(productName, price) {
  const existingProduct = cart.find((item) => item.name === productName);

  if (existingProduct) {
    existingProduct.quantity += 1;
  } else {
    cart.push({ name: productName, price: price, quantity: 1 });
  }

  // Lưu vào localStorage
  localStorage.setItem("cart", JSON.stringify(cart));

  // Hiển thị thông báo
  Swal.fire({
    title: "Đã thêm vào giỏ!",
    text: `${productName} đã được thêm vào giỏ hàng.`,
    icon: "success",
    showCancelButton: true,
    confirmButtonText: "Xem giỏ hàng",
    cancelButtonText: "Tiếp tục mua",
    timer: 2500,
    timerProgressBar: true,
  }).then((result) => {
    if (result.isConfirmed) {
      window.location.href = "../html/giohang.html";
    }
  });

  updateCartCount(); // Cập nhật số lượng trên icon
}

// Gọi hàm này khi trang được tải
document.addEventListener("DOMContentLoaded", updateCartCount);

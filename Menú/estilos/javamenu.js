// Obtener la imagen expandible por su ID
const expansibleImage = document.getElementById('expansible-image');

// Agregar un event listener al mover el mouse fuera de la imagen
expansibleImage.addEventListener('mouseout', () => {
  expansibleImage.style.width = '100%'; // Restaurar el ancho original
});
    // Obtiene todos los elementos con la clase "menu-item"
const menuItems = document.querySelectorAll('.menu-item');

// Itera sobre cada elemento del menú y agrega un listener de clic
menuItems.forEach(item => {
  item.addEventListener('click', () => {
    const itemName = item.querySelector('.item-name').textContent;
    const itemPrice = item.querySelector('.item-price').textContent;
    
    // Muestra una alerta con los detalles del producto seleccionado
    alert(`Producto: ${itemName}\nPrecio: ${itemPrice}`);
  });
});

  </script>
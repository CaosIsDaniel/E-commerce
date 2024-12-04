function applyFilters() {
    const searchText = document.getElementById('search-input').value.toLowerCase();
    const checkboxes = document.querySelectorAll('.filter-checkbox');
    const products = document.querySelectorAll('.product');

    const activeFilters = Array.from(checkboxes)
        .filter(checkbox => checkbox.checked)
        .map(checkbox => checkbox.value);

    products.forEach(product => {
        const productName = product.querySelector('p').textContent.toLowerCase();
        const productCategory = product.classList;

        if (
            (activeFilters.length === 0 || activeFilters.some(filter => productCategory.contains(filter))) &&
            (searchText === "" || productName.includes(searchText))
        ) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
}

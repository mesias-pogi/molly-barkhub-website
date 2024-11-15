function showCategory(categoryId) {
    // Hide all category contents
    document.querySelectorAll('.category-content').forEach(function (content) {
      content.style.display = 'none';
    });
    // Show the selected category
    document.getElementById(categoryId).style.display = 'flex';
  }
  
  // Show Best Sellers by default
  document.getElementById('bestSellers').style.display = 'flex';
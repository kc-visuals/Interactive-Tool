const selectElement = document.document.querySelector("");




result.addEventListener('click', (event) => {
    event.preventDefault();
    
    const formData = new FormData(lcForm);
    const firstName = formData.get('firstName');
    const secondName = formData.get('secondName');
    
    
    
    
});
    
    
    document.addEventListener('click', function(e) {
    if (e.target.tagName === 'img1') {
    e.target.remove();
    }
    });

document.addEventListener('DOMContentLoaded', function () {
    const areas = document.querySelectorAll('map area');

    areas.forEach(area => {
        area.addEventListener('click', function (event) {
            event.preventDefault(); // Öntanımlı tıklama davranışını engelle

            const price = area.getAttribute('alt');
            displayPrice(price);
        });
    });

    function displayPrice(price) {
        const priceDisplay = document.getElementById('price-display');
        priceDisplay.textContent = 'Koltuk Fiyatı: ' + price;
    }
});

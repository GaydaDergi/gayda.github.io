document.addEventListener("DOMContentLoaded", function() {
    // Sayfaların dizisi
    const pages = ["images/1.jpg", "images/2.jpg", "images/3.jpg", "images/4.jpg"];
    let currentPage = 0;

    // Sonraki sayfa butonuna tıklama olayı
    document.getElementById('next').addEventListener('click', () => {
        if (currentPage < pages.length - 1) {
            currentPage++;
            updatePage();
        }
    });

    // Önceki sayfa butonuna tıklama olayı
    document.getElementById('prev').addEventListener('click', () => {
        if (currentPage > 0) {
            currentPage--;
            updatePage();
        }
    });

    // Sayfa güncelleme fonksiyonu
    function updatePage() {
        document.getElementById('page').src = pages[currentPage];
        document.getElementById('pageNumber').textContent = `${currentPage + 1} / ${pages.length}`;
    }
});

// charts.js
// تنظیمات نمودارها
//document.addEventListener('DOMContentLoaded', function() {
//    // نمودار امکانات
//    const featuresCtx = document.getElementById('featuresChart').getContext('2d');
//    const featuresChart = new Chart(featuresCtx, {
//        type: 'line',
//        data: {
//            labels: ['نرم‌افزار قرآنی نسخه 1', ' نرم‌افزار قرآنی نسخه2 (بزودی)', 'اپلیکیشن ویندوز ترجمه خواندنی قرآن'],
//            datasets: [{
//                label: 'تعداد قاری های مختلف',
//                data: [3, 10, 1],
//                borderColor: '#078f94',
//                backgroundColor: 'rgba(7, 143, 148, 0.1)',
//                borderWidth: 3,
//                fill: true,
//                tension: 0.4
//            }]
//        },
//        options: {
//            responsive: true,
//            plugins: {
//                legend: {
//                    display: false
//                }
//            },
//            scales: {
//                y: {
//                    beginAtZero: true,
//                    title: {
//                        display: true,
//                        text: 'تعداد امکانات'
//                    }
//                }
//            }
//        }
//    });

// قرار دادن آیات در مکان‌های رندوم
document.addEventListener('DOMContentLoaded', function() {
    const ayahs = document.querySelectorAll('.ayah');
    const positions = ['top-left', 'top-right', 'bottom-left', 'bottom-right', 'middle-left', 'middle-right'];
    
    ayahs.forEach(ayah => {
        const randomPosition = positions[Math.floor(Math.random() * positions.length)];
        ayah.classList.add(randomPosition);
    });
});

    // نمودار سرعت اجرا
    const speedCtx = document.getElementById('speedChart').getContext('2d');
    const speedChart = new Chart(speedCtx, {
        type: 'bar',
        data: {
            labels: ['بارگذاری اولیه', 'جستجو', 'تعداد قاری', 'تم های مختلف', 'تعداد ترجمه'],
            datasets: [{
                label: 'نرم‌افزار ما',
                data: [1.2, 1, 10.0, 7, 6],
                borderColor: '#078f94',
                backgroundColor: 'rgba(7, 143, 148, 0.7)',
                borderWidth: 2,
                fill: false,
                tension: 0.4
            }, {
                label: 'اپلیکیشن ویندوز ترجمه خواندنی قرآن',
                data: [2.5, 5, 1.0, 1.0, 1],
                borderColor: '#ffa726',
                backgroundColor: 'rgba(255, 167, 38, 0.7)',
                borderWidth: 2,
                borderDash: [5, 5],
                fill: false,
                tension: 0.4
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'نمره یا تعداد'
                    }
                }
            }
        }
    });
//});
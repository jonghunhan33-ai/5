document.addEventListener('DOMContentLoaded', () => {
    //  요구사항: 홈 배경 (resized_1, resized_2, resized_3) 4초 간격 슬라이드 전환
    const heroSection = document.getElementById('home-hero');
    if (heroSection) {
        const images = [
            'resized_1.jpg',
            'resized_2.jpg',
            'resized_3.jpg'
        ];
        let currentIndex = 0;

        function changeBackground() {
            // 배경 이미지를 교체
            heroSection.style.backgroundImage = `url('${images[currentIndex]}')`;
            // 다음 인덱스로 이동 (배열 끝에 도달하면 0으로 리셋)
            currentIndex = (currentIndex + 1) % images.length;
        }

        // 초기 배경 설정
        changeBackground();

        // 4초 간격으로 배경 변경 설정
        setInterval(changeBackground, 4000);
    }
});
// 이미지 클릭 이벤트 추가
images.forEach((img, index) => {
    img.addEventListener('click', () => {
        window.location.href = `detail${index + 1}.html`; // detail1.html, detail2.html, ...
    });
});

const showItems = document.querySelectorAll('.show-item');
const featuredVideo = document.getElementById('featuredVideo');

// Event listener for each show item
showItems.forEach(item => {
    item.addEventListener('click', () => {
        const videoURL = item.getAttribute('data-video-url');
        featuredVideo.src = videoURL;
        featuredVideo.play(); // Auto-play the new video
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const projectBubbles = document.querySelectorAll('.project-bubble');

    projectBubbles.forEach(bubble => {
        bubble.addEventListener('click', function() {
            const projectName = this.getAttribute('data-project');
            window.location.href = `${projectName}.html`;
        });

        bubble.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1)';
        });

        bubble.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
});

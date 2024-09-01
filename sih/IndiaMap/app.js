const tooltipSpan = document.getElementById('details-box');
        const element = document.getElementById('INUP');
        document.addEventListener('mouseover', function (e) {
            if (e.target.tagName == 'path') {
                var content = e.target.getAttribute('name');
                document.getElementById("details-box").innerHTML = content;
                document.getElementById("details-box").style.opacity = "100%";
            }
            else {
                document.getElementById("details-box").style.opacity = "0%";
            }
        });

        window.onmousemove = function (e) {
            var x = e.clientX,
                y = e.clientY;
            tooltipSpan.style.top = (y + 20) + 'px';
            tooltipSpan.style.left = (x - 100) + 'px';
        };


element.addEventListener('mouseover', () => {
  // Add the 'transformed' class to apply the scale and translate effect
  element.classList.add('transformed');

  // Remove the 'transformed' class after 1 second to revert back
  setTimeout(() => {
    element.classList.remove('transformed');
  }, 3000); // 1000ms = 1 second
});
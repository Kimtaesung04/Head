let bar = document.getElementsByClassName('gnb_cont');
let i;

for (i = 0; i < bar.length; i ++) {
    bar[i].addEventListener('click', function(){
        this.classList.toggle('active');
        let content = this.nextElementSibling;
        if (content.style.display === 'block') {
            content.style.display = 'none';
        } else {
            content.style.display = 'block';
        }
    });
}
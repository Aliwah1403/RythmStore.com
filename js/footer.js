const footer = document.querySelector(".footer");

const createFooter = () => {
  footer.innerHTML = `
        <h3 class="footer_logo">
    <span>Rythm</span>House
</h3>

<ul class="footer_nav">
    <li><a href="#">Home</a></li>
    <li><a href="#">About</a></li>
    <li><a href="#">Services</a></li>
    <li><a href="#">Events</a></li>
    <li><a href="#">Store</a></li>
    <li><a href="#">Contacts</a></li>
</ul>

<ul class="footer_social">
    <li>
        <img src="images/Icons/facebook.svg" alt="facebook-icon">
    </li>
    <li>
        <img src="images/Icons/instagram.svg" alt="instagram-icon">
    </li>
    <li>
        <img src="images/Icons/twitter.svg" alt="twitter-icon">
    </li>
</ul>
    `;
};

createFooter();

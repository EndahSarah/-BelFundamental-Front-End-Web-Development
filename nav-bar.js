class NavBar extends HTMLElement {
    connectedCallback(){
        this.render();
    }
 
    render() {
        this.innerHTML = `
        <nav class="navbar navbar-light bg-light">
          <a class="navbar-brand" href="#">
            <img src="./src/asset/film.png" width="30" height="30" class="d-inline-block align-top" alt="">
            <b>MovieQU</b>
          </a>
        </nav>
        `;
    }
}
 
customElements.define("nav-bar", NavBar);
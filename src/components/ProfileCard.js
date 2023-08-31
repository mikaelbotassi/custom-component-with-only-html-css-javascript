class profileCard extends HTMLElement{
    constructor(){
        super();
        const shadow = this.attachShadow({mode: 'open'});
        shadow.appendChild(this.bootstrapLink());
        shadow.appendChild(this.build());
        shadow.appendChild(this.styles());
    }

    props = {
        src: super.getAttribute('src') || '',
        title: super.getAttribute('title') || '',
        text: super.getAttribute('text') || '',
        link: super.getAttribute('link') || '',
    };

    bootstrapLink(){
        const bootstrapLink = document.createElement('link');
        bootstrapLink.setAttribute('rel', 'stylesheet');
        bootstrapLink.setAttribute('href', './assets/styles/bs.min.css');
        return bootstrapLink;
    }

    build(){
        const flexCard = document.createElement('div');
        flexCard.setAttribute('class', 'flex-card');
        
        flexCard.innerHTML = `
            <div class="card-img">
                <div class="img-holder">
                    <img src='${this.props.src}' alt=''>
                </div>
            </div>
            <div class="content d-flex flex-column align-items-center">
                <h2 class="fw-bold h4 text-uppercase">${this.props.title}</h2>
                <p class="text-center lh-2"><slot></slot></p>
                <a href="${this.props.link}" class="btn btn-outline-dark rounded-pill text-uppercase">mostrar mais</a>
            </div>
        `;

        return flexCard;
    }

    styles(){
        const style = document.createElement('style');
        style.textContent = `
        .flex-card{
            background-color:#fff;
            width:400px;
            height:500px;
            margin:1rem;
            transition:all .6s cubic-bezier(.22, 1, .36, 1);
            position:relative;
            box-shadow:0 0 25px rgba(0,0,0,.15);
            border-radius:2rem;
            overflow:hidden;
            }
            
            .flex-card:before{
            content:"";
            width:100%;
            height:0;
            transition:all .6s cubic-bezier(.22, 1, .36, 1);
            background-color:#eee;
            top:0;
            left:0;
            opacity:0;
            position:absolute;
            }
            
            .flex-card .card-img{
            position:absolute;
            width:100%;
            height:100%;
            transition:all .3s cubic-bezier(.22, 1, .36, 1);
            }
            
            .flex-card:hover .card-img{
            position:relative;
            height:auto;
            transition:all .3s cubic-bezier(.22, 1, .36, 1);
            animation: 1s fadedown cubic-bezier(.22, 1, .36, 1);
            }
            
            @keyframes fadedown {
            from {
                opacity:0;
                transform:translatey(-100px)
            }
            
            to {
                opacity:1;
                transform:translatey(0)
            }
            }
            
            .flex-card .img-holder{
            width:100%;
            height:100%;
            position:relative;
            margin:0 auto;
            transition:all .6s cubic-bezier(.22, 1, .36, 1);
            }
            
            .flex-card .img-holder img{
            width:100%;
            height:100%;
            object-fit:cover;
            }
            
            .flex-card .content{
                overflow-y: auto;
                opacity: 0;
                padding: 0 3rem 3rem 2rem;
                margin-top:3rem;
                z-index: 1;
            }
            
            .flex-card .content::-webkit-scrollbar {
            width: 0px;
            }
            
            .flex-card:hover .content::-webkit-scrollbar {
            width: 8px;
            transition:all .6s cubic-bezier(.22, 1, .36, 1);
            }
            
            .flex-card .content::-webkit-scrollbar-track {
            display:none
            }
            
            .flex-card .content::-webkit-scrollbar-thumb {
            background-color: #222;
            border-radius: 5rem;
            }
            
            .flex-card:hover:before{
            height:110px;
            opacity:1;
            }
            
            .flex-card .content h2{
            transform:translatey(50px);
            transition:all .6s cubic-bezier(.22, 1, .36, 1);
            }
            
            .flex-card .content p{
            transform:translatey(100px);
            transition:all .6s cubic-bezier(.22, 1, .36, 1);
            }
            
            .flex-card .content a{
            transform:translatey(150px);
            transition:all .6s cubic-bezier(.22, 1, .36, 1);
            }
            
            .flex-card:hover .content{
            opacity:1;
            width:100%;
            height:200px;
            }
            
            .flex-card:hover .content *{
            transform:translatex(0);
            }
            
            .flex-card:hover .img-holder{
            width:170px;
            height:170px;
            box-shadow:0 0 15px rgba(0,0,0,.15);
            border-radius:50%;
            margin:1.25rem auto 0;
            overflow:hidden;
            border:5px solid #fff;
            transition:all .6s cubic-bezier(.22, 1, .36, 1);
            }
        `;
        return style;
    }
}

customElements.define('profile-card', profileCard);
const app = document.getElementById("app")

function AppContent() {
    return(
            <div class="content">
                <div class="image-wrapper">
                    <NftImage class="item-image" />
                    <div class ="overlay">
                        <svg width="48" height="48" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M0 0h48v48H0z"/><path d="M24 9C14 9 5.46 15.22 2 24c3.46 8.78 12 15 22 15 10.01 0 18.54-6.22 22-15-3.46-8.78-11.99-15-22-15Zm0 25c-5.52 0-10-4.48-10-10s4.48-10 10-10 10 4.48 10 10-4.48 10-10 10Zm0-16c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6Z" fill="#FFF" fill-rule="nonzero"/></g></svg>
                    </div>
                </div>
                
                <MainTitle content="Equilibrium #3429" class="item-title" />
                <Paragraph content="Our Equilibrium collection promotes balance and calm." class="item-desc" />
                <div class="info">
                    <div class="price-container">
                        <svg class="icon-info" width="11" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M11 10.216 5.5 18 0 10.216l5.5 3.263 5.5-3.262ZM5.5 0l5.496 9.169L5.5 12.43 0 9.17 5.5 0Z" fill="#00FFF8"/></svg>
                        <Paragraph content="0.041 ETH" class="info price" />
                    </div>
                    <div class="time-container">
                        <svg class="icon-info" width="17" height="17" xmlns="http://www.w3.org/2000/svg"><path d="M8.305 2.007a6.667 6.667 0 1 0 0 13.334 6.667 6.667 0 0 0 0-13.334Zm2.667 7.334H8.305a.667.667 0 0 1-.667-.667V6.007a.667.667 0 0 1 1.334 0v2h2a.667.667 0 0 1 0 1.334Z" fill="#8BACD9"/></svg>
                        <Paragraph content="3 days left" class="info time" />
                    </div>
                    
                </div>
                <hr />
                <div class="creator">
                    <ImageComponent src="images/image-avatar.png" class="avatar" alt="avatar" />
                    <Paragraph content="Creation of " class="info creator" />
                    <LinkComponent class="creator-link" content="Jules Wyvern" url="#" />
                </div>
                
                
            </div>
        )
      
}

function LinkComponent (props) {
    return <a href={props.url} class={props.class}>{props.content}</a>
}

function ImageComponent (props) {
    return <img class={props.class} src={props.src} alt={props.alt} />
}

function MainTitle (props) {
    return <h1 class={props.class}><LinkComponent class="item-title" url="#" content={props.content} /></h1>
}


function Paragraph (props) {
    return <p class={props.class}>{props.content}</p>
}

function NftImage (props) {
    return(<img src="images/image-equilibrium.jpg" alt="nft-image" class={props.class} />)
}

ReactDOM.render(<AppContent />, app)
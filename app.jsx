const app = document.getElementById("app")

function AppContent() {
    return(
            <div class="content">
                <NftImage class="item-image" />
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
                    <ImageComponent src="images/image-avatar.png" class="avatar" />
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
    return <img class={props.class} src={props.src} />
}

function MainTitle (props) {
    return <h1 class={props.class}><LinkComponent class="item-title" url="#" content={props.content} /></h1>
}


function Paragraph (props) {
    return <p class={props.class}>{props.content}</p>
}

function NftImage (props) {
    return(<img src="images\image-equilibrium.jpg" alt="nft-image" class={props.class} />)
}

ReactDOM.render(<AppContent />, app)
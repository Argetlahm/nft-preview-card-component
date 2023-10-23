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
                        <Paragraph content="3 days left" class="info time" />
                    </div>
                    
                    
                </div>
                <Paragraph content="Creation of Jules Wyvern" class="info creator" />
                
            </div>
        )
      
}

function MainTitle (props) {
    return <h1 class={props.class}>{props.content}</h1>
}


function Paragraph (props) {
    return <p class={props.class}>{props.content}</p>
}

function NftImage (props) {
    return(<img src="images\image-equilibrium.jpg" alt="nft-image" class={props.class} />)
}

ReactDOM.render(<AppContent />, app)
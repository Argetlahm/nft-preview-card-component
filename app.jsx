const app = document.getElementById("app")

function AppContent() {
    return(
            <div class="content">
                <NftImage class="item-image" />
                <MainTitle content="Equilibrium #3429" class="item-title" />
                <Paragraph content="Our Equilibrium collection promotes balance and calm." class="item-desc" />
                <div class="info">
                    <Paragraph content="0.041 ETH" class="info price" />
                    <Paragraph content="3 days left" class="info time" />
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
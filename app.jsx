const app = document.getElementById("app")

function AppContent() {
    return(
            <div class="content">
                <NftImage class="item-image" />
                <MainTitle title="Equilibrium #3429" class="item-title" />
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
    return <h1>{props.title}</h1>
}


function Paragraph (props) {
    return <p>{props.content}</p>
}

function NftImage () {
    return(<img src="images\image-equilibrium.jpg" alt="nft-image" />)
}

ReactDOM.render(<AppContent />, app)
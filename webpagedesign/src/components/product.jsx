import Style from "./product.module.css"

const Product = () => {
    return (
        <>

            <div id="main">
                <div id={Style["nav"]}>
                    <div style={{ margin: "5px 5px" }}>WISHLIST</div> <span style={{ margin: "5px 15px" }}>|</span>
                    <div style={{ margin: "5px 5px" }}>CART</div>  <span style={{ margin: "5px 15px" }}>|</span>
                    <div style={{ margin: "5px 5px" }}>CUSTUMBER NAME</div>
                </div>

                <div id={Style["header"]}>

                    <div id={Style["logo"]}>
                        <p>KRAYA.</p>
                    </div>

                    <div id={Style["h-text"]}>
                        <p>PHONE</p>
                        <p>TELEVISION</p>
                        <p>REFRIGERATOR</p>
                        <p>LAPTOP</p>
                        <p>WASHING MACHINE</p>
                        <p>DOWNLOADS</p>
                    </div>

                    <div id={Style["search"]}>
                        <input />
                    </div>


                </div>




            </div>

        </>
    )
}

export default Product;
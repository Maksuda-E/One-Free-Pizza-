import  "./Home.scss";

function Home(){
    return(
        <main>
             <h1 className="heading">Hello, our valued customers!</h1>
            <img className="pizzaImage" src="images/pizzaoffer@3x.jpg" alt="pizza icon"/>
            <p className="para">Currently we are offering free pizza to all our customers. Use our website to order yours.
            </p>
            <p className="para">How to order:</p>
            <p className="para">- Go to "Get Your Pizza" option.</p> 
            <p className="para"> - Fill up the form and your order will be done.</p>
            <p className="para" >- To see the order, click on "Orders" option.</p>
            <p className="note">Special Note: Please order only one. After all, we trust you. 
             Give a chance to others!</p>
            <p className="variations">Our Pizza Variations</p>
            <div className="pizzas">
            <img className="type" src="images/pepperoni.jpg" alt=" pepperoni pizza "/>
            <img className="type" src="images/delux.webp" alt="delux pizza"/>
            <img className="type" src="images/hawaiian.jpg" alt="hawaiian pizza"/>
            <img className="type" src="images/cheese.webp" alt="cheese pizza"/>
             
            </div>
        </main>
    )
}

export default Home;
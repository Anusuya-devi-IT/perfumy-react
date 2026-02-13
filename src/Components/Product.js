import one from "../assets/images/photo1.jpg"
import two from "../assets/images/photo2.jpeg"
import three from "../assets/images/photo3.jpg"
function Product()
{
    return(
       <div className="product">
        <div class="box1">
          <img  src={one} style={{ width:"220px",height: "200px"}} alt="One"></img>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos vitae fugit vero. Voluptates illo corporis rem natus minima, totam deserunt!</p>
        </div>
         <div class="box1">
          <img  src={two} style={{ width:"220px",height: "200px"}} alt="Two"></img>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos vitae fugit vero. Voluptates illo corporis rem natus minima, totam deserunt!</p>
        </div>
         <div  class="box1">
          <img  src={three} style={{ width:"220px",height: "200px"}} alt="Three"></img>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos vitae fugit vero. Voluptates illo corporis rem natus minima, totam deserunt!</p>
        </div>
    </div> 
    )
}
export default Product
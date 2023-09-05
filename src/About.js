import styled from 'styled-components'
import Secondary from './styles/Secondary'
import ButtonPrimary from './styles/ButtonPrimary'
let color = "red"
//Internal/External Styled Components
const XH1 = styled.h1`
    background-color: black;
    color: ${color};
    padding: 2px;
`  

const PrimaryInfo = styled(XH1)`
    border-left: 5px solid orange;
`

const Section = styled.section`
    padding: 10px;
    background-color: gray;
    div {
        margin: 10px;
        background-color: pink;
        h1{
             color: orange;
             font-family: 'Courier New', Courier, monospace;
             padding: 2px;
        }
                
    }
`
const About = () => {
    return ( 
        <div className="about">
            <ButtonPrimary>Download Brochure</ButtonPrimary>
            <ButtonPrimary>Chat with Us</ButtonPrimary>
            <Secondary>Hello There!!</Secondary>
            <XH1>About Us</XH1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda dignissimos voluptatum, pariatur magnam voluptates veritatis dicta ex dolorem facere sit a earum aut rerum accusantium veniam et distinctio. Eos, ullam!</p>
            <PrimaryInfo>Checkout Our Labs</PrimaryInfo>
            <button>Back</button>

            <h2>Our Mission</h2>
            <p className='bg-danger p-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas rerum magni dicta, esse, minima minus corporis laboriosam, non vitae cum numquam? Vitae distinctio, molestiae iure fugit fuga impedit aut minima?</p>
            <div className="about-us">
                <h3>Who we are</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum ex dolorum non debitis aliquam voluptates, iure soluta? Quasi quas quibusdam dignissimos officiis deleniti harum aliquid nobis. Illum cumque voluptates hic?</p>
            </div>

            <Section>
                <div className="form">
                    <h1>Talk to Us</h1>
                    <form action="">
                        <input type="text" placeholder='Email' />
                        <br />
                        <button>Send Message</button>
                     </form>
                 </div>
            </Section>
    
        </div>
     );
}
 
export default About;
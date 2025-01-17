import React from 'react'
import {connect} from 'react-redux'
import ProductComp from '../components/product'
import Head from 'next/head'

class Product extends React.Component {
    static getInitialProps = ({query}) => 
        ({id: query.id})

    getProduct = () =>
        (this.props.products.filter(x => x.id == this.props.id)[0])

    render = () => (
        <div>
            <Head>
                <meta name="title" content={"Peaky Blinder's " + this.getProduct().name} />
                <meta name="description" content={this.getProduct().description} />
                    
<meta property="og:url" content="https://youthful-albattani-09187f.netlify.com/product/1"/>
<meta  property="og:type" content="article"/>
 <meta  property="og:title" content= {this.getProduct().name} />
<meta property="og:description" content={this.getProduct().description}  />

<meta property="og:image"content={this.getProduct().image}  />
    
    
            </Head>
            
            <a href="/">go back to home</a>
            <ProductComp {...(this.getProduct())}/>
        </div>
    );
}

const mapStateToProps = (state) => 
    ({products: state.products})

export default connect(mapStateToProps)(Product)

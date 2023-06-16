import React from 'react'
import {Container , Row , Col , Image} from 'react-bootstrap';
import Ins from '../components/images/Instagram.png';
import hash from '../components/images/hashtag.jpg';
import Ins1 from '../components/images/Instagram1.jpg';
import hash1 from '../components/images/hashtag1.png';
import short from '../components/images/shortCon.jpg';
import stra from '../components/images/strategies.png';
import Mark from '../components/images/InfluencerMarketing.png';
// import Cars from './Carousels';
import './Blogs.css'


export default function Blogs() {
  return (
    <div>

    <Container>
        <Row>
            <Col md={12} style={{ height:'20vh' , borderRadius:'15px'  , textAlign:'center' , border:'1px solid white' }} >
                    <h1 className="mt-5 top_heading" style={{letterSpacing:'2.2rem' , fontWeight:'500'}}>LATEST BLOGS</h1>
            </Col>
        </Row>
    
        <div className="row mb-2 mt-5">
    <div className="col-md-6">
      <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
        <div className="col p-4 d-flex flex-column position-static">
          {/* <strong class="d-inline-block mb-2 text-primary">World</strong> */}
          <h3 className="mb-3">5 reasons why Instagram reels are important for your business</h3>
          {/* <div class="mb-1 text-muted">Nov 12</div> */}
          <p className="card-text text-white">In today's fast-paced digital landscape, businesses need to constantly adapt and embrace new trends to stay relevant.</p>
          <a href="#" class="stretched-link">Continue reading</a>
        </div>
        {/* <div class="col-auto d-none d-lg-block"> */}
           {/* <svg class="bd-placeholder-img" width="200" height="250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"></svg> */}
            {/* <Image src={Ins1} style={{width:'200px' , height:'208px'}}></Image> */}
            
        {/* </div> */}
        <Image src={stra} style={{width:'200px'}} className="thumbnail"></Image> 

        
      </div>
    </div>
    <div className="col-md-6">
      <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
        <div className="col p-4 d-flex flex-column position-static">
          {/* <strong class="d-inline-block mb-2 text-success">Design</strong> */}
          <h3 className="mb-3">10 Benefits of Influencer Marketing</h3>
          {/* <div class="mb-1 text-muted">Nov 11</div> */}
          <p className="card-text text-white">In the ever-evolving world of marketing, businesses are constantly seeking innovative strategies to reach their target audience and boost. </p>
          <a href="#" className="stretched-link">Continue reading</a>
        </div>

         {/* <div class="col-auto d-none d-lg-block"> */}
          
        <Image src={Mark} style={{width:'200px'}} className="thumbnail"></Image>

        {/* </div>  */}
      </div>
    </div>
  </div>




    <div class="row mb-0 mt-0">
    <div class="col-md-12 p-5">
      <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
        <div class="col p-4 d-flex flex-column position-static">
          {/* <strong class="d-inline-block mb-2 text-primary">World</strong> */}
          <h3 class="mb-3">The Importance of Digital Marketing for Small Business Owners</h3>
          {/* <div class="mb-1 text-muted">Nov 12</div> */}
          <p class="card-text text-white"><span className="desktop_width">Digital marketing was introduced to fulfil the needs of businesses  which are evolving in this digital age. It emerging as a response to the growing influence of the internet and also the digital technologies on each consumer behaviour and communication channels. Digital marketing is important because it helps businesses reach more people on the internet and connect with potential customers. Nowadays, many people use the internet to search for information, make decisions, and interact with brands.</span><span className="ipad_width"> Digital marketing was introduced to fulfil the needs of businesses  which are evolving in this digital age.</span></p>
          <a href="#" class="stretched-link">Continue reading</a>
        </div>
        {/* <div class="col-auto d-none d-lg-block"> */}
           {/* <svg class="bd-placeholder-img" width="200" height="250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"></svg> */}
            {/* <Image src={Ins1} style={{width:'200px' , height:'208px'}}></Image> */}
            
        {/* </div> */}
        <Image src={stra} style={{width:'200px'}} className="thumbnail"></Image> 

        
      </div>
    </div>
    
  </div>


  



  <div className="row mb-2 ">
    <div className="col-md-6">
      <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
        <div className="col p-4 d-flex flex-column position-static">
          {/* <strong class="d-inline-block mb-2 text-primary">World</strong> */}
          <h3 className="mb-3">5 reasons why Instagram reels are important for your business</h3>
          {/* <div class="mb-1 text-muted">Nov 12</div> */}
          <p className="card-text text-white">In today's fast-paced digital landscape, businesses need to constantly adapt and embrace new trends to stay relevant.</p>
          <a href="#" class="stretched-link">Continue reading</a>
        </div>
        {/* <div class="col-auto d-none d-lg-block"> */}
           {/* <svg class="bd-placeholder-img" width="200" height="250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"></svg> */}
            {/* <Image src={Ins1} style={{width:'200px' , height:'208px'}}></Image> */}
            
        {/* </div> */}
        <Image src={stra} style={{width:'200px'}} className="thumbnail"></Image> 

        
      </div>
    </div>
    <div className="col-md-6">
      <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
        <div className="col p-4 d-flex flex-column position-static">
          {/* <strong class="d-inline-block mb-2 text-success">Design</strong> */}
          <h3 className="mb-3">10 Benefits of Influencer Marketing</h3>
          {/* <div class="mb-1 text-muted">Nov 11</div> */}
          <p className="card-text text-white">In the ever-evolving world of marketing, businesses are constantly seeking innovative strategies to reach their target audience and boost. </p>
          <a href="#" className="stretched-link">Continue reading</a>
        </div>

         {/* <div class="col-auto d-none d-lg-block"> */}
          
        <Image src={stra} style={{width:'200px'}} className="thumbnail"></Image>

        {/* </div>  */}
      </div>
    </div>
  </div>




  <div className="row mb-2 mt-5">
    <div className="col-md-6">
      <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
        <div className="col p-4 d-flex flex-column position-static">
          {/* <strong class="d-inline-block mb-2 text-primary">World</strong> */}
          <h3 className="mb-3">5 reasons why Instagram reels are important for your business</h3>
          {/* <div class="mb-1 text-muted">Nov 12</div> */}
          <p className="card-text text-white">In today's fast-paced digital landscape, businesses need to constantly adapt and embrace new trends to stay relevant.</p>
          <a href="#" class="stretched-link">Continue reading</a>
        </div>
        {/* <div class="col-auto d-none d-lg-block"> */}
           {/* <svg class="bd-placeholder-img" width="200" height="250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"></svg> */}
            {/* <Image src={Ins1} style={{width:'200px' , height:'208px'}}></Image> */}
            
        {/* </div> */}
        <Image src={stra} style={{width:'200px'}} className="thumbnail"></Image> 

        
      </div>
    </div>
    <div className="col-md-6">
      <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
        <div className="col p-4 d-flex flex-column position-static">
          {/* <strong class="d-inline-block mb-2 text-success">Design</strong> */}
          <h3 className="mb-3">10 Benefits of Influencer Marketing</h3>
          {/* <div class="mb-1 text-muted">Nov 11</div> */}
          <p className="card-text text-white">In the ever-evolving world of marketing, businesses are constantly seeking innovative strategies to reach their target audience and boost. </p>
          <a href="#" className="stretched-link">Continue reading</a>
        </div>

         {/* <div class="col-auto d-none d-lg-block"> */}
          
        <Image src={stra} style={{width:'200px'}} className="thumbnail"></Image>

        {/* </div>  */}
      </div>
    </div>
  </div>



  <div className="row mb-0 mt-0">
    <div className="col-md-12 p-5">
      <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
        <div className="col p-4 d-flex flex-column position-static">
          {/* <strong class="d-inline-block mb-2 text-primary">World</strong> */}
          <h3 className="mb-3">5 reasons why Instagram reels are important for your business</h3>
          {/* <div class="mb-1 text-muted">Nov 12</div> */}
          <p className="card-text text-white"><span className="desktop_width">In today's fast-paced digital landscape, businesses need to constantly adapt and embrace new trends to stay relevant. One such trend that has taken the social media world by storm is Instagram Reels. This dynamic and engaging feature has transformed the way businesses promote their products and services on the platform. In this blog post, we will explore why Instagram Reels are essential for your business and how they can effectively enhance your marketing strategy.</span><span className="ipad_width">In today's fast-paced digital landscape, businesses need to constantly adapt and embrace new trends to stay relevant.</span></p>
          <a href="#" className="stretched-link">Continue reading</a>
        </div>
        {/* <div class="col-auto d-none d-lg-block"> */}
           {/* <svg class="bd-placeholder-img" width="200" height="250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"></svg> */}
            {/* <Image src={Ins1} style={{width:'200px' , height:'208px'}}></Image> */}
            
        {/* </div> */}
        <Image src={stra} style={{width:'200px'}} className="thumbnail"></Image>

        
      </div>
    </div>
    
  </div>



        
    </Container>

    </div>
  )
}

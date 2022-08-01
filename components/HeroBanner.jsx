import React from 'react'
import {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Carousel from 'react-bootstrap/Carousel'
import Link from 'next/link'

{/*const images = ['https://i.imgur.com/EDOQSs3.jpeg', 'https://i.imgur.com/cLsChiY.jpeg', 'https://i.imgur.com/aWHu2TD.jpeg', 'https://i.imgur.com/olj6orn.jpeg']
const imageIndex = 0*/}

const HeroBanner = () => {
  {/*const [imageChoice, setImageChoice] = useState({imageIndex: 0})
  const nextImage = () => {
    if(imageIndex < (images.length - 1)) {
      console.log("before: ", imageIndex, " ", images.length)
      imageIndex = imageIndex + 1
      console.log("after: ", imageIndex)
    }
    else if(imageIndex >= (images.length - 1)){
      console.log("before: ", imageIndex, " ", images.length)
      imageIndex = 0
      console.log("after: ", imageIndex)
    }
    setImageChoice({imageIndex})
    console.log(images[imageChoice.imageIndex])
  }
  const previousImage = () => {
    if(imageIndex > 0) {
      console.log("before: ", imageIndex)
      imageIndex = imageIndex - 1
      console.log("after: ", imageIndex)
    }
    else if(imageIndex <= 0){
      console.log("before: ", imageIndex)
      imageIndex = images.length - 1
      console.log("after: ", imageIndex)
    }
    setImageChoice({imageIndex})
    console.log(images[imageChoice.imageIndex])
  }*/}
  const carousel_parent = {
    display: 'table',
    marginLeft: 'auto',
    marginRight: 'auto',
  }
  const carousel = {
    backgroundColor: '#dcdcdc',
    display: 'table-cell',
    width: '1728px'
  }
  const banner_ad = {
    objectFit: 'cover',
    height: '500px',
  }
  return (
    <div style={carousel_parent}>
    <div style={carousel}>
      <Carousel variant='dark'>
        <Carousel.Item style={banner_ad}>
          <img class='d-block w-100' src='https://raw.githubusercontent.com/Arrowkill/Cinema/development/bannerimage_1.jpg' />
        </Carousel.Item>

        <Carousel.Item style={banner_ad}>
          <img class='d-block w-100' src='https://i.imgur.com/cLsChiY.jpeg' />
          <Carousel.Caption>
            Test 2
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item style={banner_ad}>
          <img class='d-block w-100' src='https://i.imgur.com/aWHu2TD.jpeg' />
          <Carousel.Caption>
            Test 3
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item style={banner_ad}>
          <img class='d-block w-100' src='https://i.imgur.com/olj6orn.jpeg' />
          <Carousel.Caption>
            Test 4
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
    </div>
  )
}


export default HeroBanner
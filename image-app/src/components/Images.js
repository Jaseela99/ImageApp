import React from 'react'
import axios from "axios"
import "./styles.css"
const Images = () => {
    const [images,setImages]=React.useState([]) 
    React.useEffect(()=>{
    const getImages=()=>{
        axios.get("https://my-json-server.typicode.com/Codeinwp/front-end-internship-api/posts").then((res)=>{
        setImages(res.data)
        //console.log(res.data)
        })
    } 
        getImages()
    },[])
  return (
    <>
        <h1>Galleria</h1>
    <div class="container">
{images && images.map((image,index)=>{
    return(<div class="gallery" key={index}>

        <img class="image" src={image.thumbnail.large} />
        <h2 class="title">{image.title}</h2>
        <p class="content">{image.content}</p>
        <div class="last">
            <p class="author">{image.author.name}-{image.author.role}</p>
            <p class="date">Nov 25, 2020</p>
            </div>
            </div>)
})}

    </div>
    </>
  )
}

export default Images
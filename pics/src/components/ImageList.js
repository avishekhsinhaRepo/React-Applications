import Spinner from "./Spinner";

const ImageList= (props)=>{

     const searchedImagesList = props.imageList.map(image =>{
      return <img key= {image.id} src={image.urls.thumb} alt={image.alt_description}/>;
    });
    if(!props.isLoading){
        return <div>{searchedImagesList}</div>

    }else{
        return <Spinner message="Fetching Images For You..."/>
    }
}
export default ImageList
import ImageShow from "./ImageShow";

function ImageList({imageUrls}){
    return(
            imageUrls.map((imageUrl,index) =>  
            <div key={imageUrl.id}>
                <ImageShow thumbnailImage={imageUrl.urls.thumb} altDesc={imageUrl.alt_description}/>
                </div>
                )
           
    );
}
export default ImageList;
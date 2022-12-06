import styled from "styled-components";

const PhotoSlider = () => {
    const StyledPhotoSlider = styled.div`
        width: 100%;
        height: 300px;
        background-image: url("./../../../images/image-product-1.jpg");
        background-size: cover;
        img {
            width: 100vw;
        }
    `
    return (
        <StyledPhotoSlider className="photo-slider">

            {/* <img src="./../../../images/image-product-1.jpg" alt="white/brownish trainers" /> */}

        </StyledPhotoSlider>
    )
}
// C: \Users\Max\Desktop\DEV\PROJECTS\FrontendMasters\e - commerce\src\components\PhootoSlider.js
export default PhotoSlider;
import { Container, Grid, Paper } from "@mui/material";
import React, { useContext, useState } from "react";
import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { productContext } from "../../../context/ProductContextProvider";
import { useParams } from "react-router-dom";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "./ProductDetails.css";

import SwiperCore, { Thumbs } from "swiper";

SwiperCore.use([Thumbs]);

const ProductDetails = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const { readOneProduct, productDetails } = useContext(productContext);

  const { id } = useParams();

  useEffect(() => {
    readOneProduct(id);
  }, [id]);

  return (
    <>
      {productDetails ? (
        <Container>
          <Grid item xs={6}>
            <Swiper
              className="mySwiper2"
              spaceBetween={10}
              thumbs={{ swiper: thumbsSwiper }}
            >
              <SwiperSlide>
                <img src={productDetails.img1} alt={productDetails.title} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={productDetails.img2} alt={productDetails.title} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={productDetails.img3} alt={productDetails.title} />
              </SwiperSlide>
            </Swiper>
            <Swiper
              onSwiper={setThumbsSwiper}
              spaceBetween={10}
              slidesPerView={4}
              freeMode={true}
              watchSlidesProgress={true}
              className="mySwiper"
            >
              <SwiperSlide>
                <Paper elevation={3}>
                  <img
                    width={50}
                    src={productDetails.img1}
                    alt={productDetails.title}
                  />
                </Paper>
              </SwiperSlide>
              <SwiperSlide>
                <Paper elevation={3}>
                  <img src={productDetails.img2} alt={productDetails.title} />
                </Paper>
              </SwiperSlide>
              <SwiperSlide>
                <Paper elevation={3}>
                  <img src={productDetails.img3} alt={productDetails.title} />
                </Paper>
              </SwiperSlide>
            </Swiper>
          </Grid>
        </Container>
      ) : null}
    </>
  );
};

export default ProductDetails;

"use-client";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchProductData } from "@/store/slice/productslice";
const RelatedSlider = ({ productid }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProductData());
  }, [dispatch]);
const productData=useSelector((state)=>state?.products?.data?.products);

console.log(productData,"productData")
  return (
    <div>relatedSlider</div>

  )

};

export default RelatedSlider;

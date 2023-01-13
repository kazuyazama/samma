
type Props<T> = {
    srcPC: T 
    srcSP: T
    alt: T;
}[]



 export const carouselImages:Props<string> = [
  {
    srcPC:"/images/whitening-samale.png",
    srcSP:"/images/whitening-sample-sp.png" ,
    alt:`Image`
  },

  {
    srcPC:"/images/whitening.png",
    srcSP:"/images/whitening-sample-sp.png" ,
    alt:`Image2`
  },
]

import React from 'react'
import { Popular } from '../Components/Popular/Popular'
import { Offers } from '../Components/Offers/Offers'
import { NewCollections } from '../Components/NewCollections/NewCollections'
import { NewsLetters } from '../Components/NewsLetters/NewsLetters'
import { RelativeProduct } from '../Components/RelativeProduct/RelativeProduct'
import { Arrival } from '../Components/Arrival/Arrival'

export const Shop = () => {
  return (
  <>
    <Arrival/>
    <Popular/>
    <Offers/>
    <NewCollections/>
    <NewsLetters/>
    <RelativeProduct/>
  </>
  )
}

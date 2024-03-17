import { Divider } from '@mui/material';
import React from 'react'
import { useState, useEffect } from 'react';

export default function Shop() {

  const [data, setData] = useState(null)

  useEffect(() => {
    fetchData();
  }, []); // El array de dependencias está vacío para que este efecto solo se ejecute una vez al montar el componente

  const fetchData = () => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching data:', error));
  };


  return (
    <div className='shop-container'>
      {/* Verifica si data es null antes de mapear para evitar errores */}
      {data && data.map((product, index) => (
        <div className='product-container-column' key={index}>
          <span className='product-title'>
            <h3>{product.title}</h3>
          </span>
          <div className='product-container-row'>
            <span className='product-image'>
              <img src={product.image} alt={product.title} />
            </span>
            <span className='product-details'>
              <h2>{product.price}</h2>
              <h5>{product.description}</h5>
            </span>
          </div>
        </div>
      ))}
    </div>
  )
}

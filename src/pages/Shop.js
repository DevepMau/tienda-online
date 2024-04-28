import React from 'react'
import { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import PopUpDetail from '../components/PopUpDetail';
import { Button } from '@mui/material';

export default function Shop() {

  const NewButton = styled(Button)({
    margin: 5,
    marginLeft: 15,
    marginRight: 15,
    backgroundColor: 'orange',
    color: 'white',
    '&:hover': {
      backgroundColor: 'yellow',
    },
  });

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
        <div className='product-container' key={index}>
          <div className='product-row-title'>
            <h3>{product.title}</h3>
          </div>
          <div className='product-row-image'>
            <span>
              <img src={product.image} alt={product.title} />
            </span>
          </div>
          <div className='product-row-button'>
            <NewButton>Comprar</NewButton>
            <PopUpDetail product={product.description}/>
          </div>
        </div>
      ))}
    </div>
  )
}

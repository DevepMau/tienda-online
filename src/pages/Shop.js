import React from 'react'
import { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import PopUpDetail from '../components/PopUpDetail';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Box, Button, Fab, Stack } from '@mui/material';

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

  const CustomButton = styled(Button)({
    backgroundColor: 'orange',
    color: 'white',
    '&:hover': {
      backgroundColor: 'yellow',
    },
  });

  return (
    <Box
      display={'flex'}
      flexWrap={'wrap'}
    >
      {/* Verifica si data es null antes de mapear para evitar errores */}
      {data && data.map((product, index) => (
        <Box 
          key={index}
          height={400}
          width={350}
          margin={2}
          marginTop={8}
          marginBottom={8}
          position='relative'
        >
          <Box>
            <Stack spacing={2} direction='row' style={{position: 'absolute'}}>
              <Fab 
                color='primary' 
                aria-label='add to cart'
              >
                <ShoppingCartIcon />
              </Fab>
              <PopUpDetail product={product.description}/>
            </Stack>
            <img src={product.image} alt={product.title} />
          </Box> 
          <Box
            height={50}
            alignContent={'center'}
          >
            <h3 className='product-title'>{product.title}</h3>
          </Box>
        </Box>
      ))}
    </Box>
  )
}

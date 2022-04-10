import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Card, Container } from 'react-bootstrap'

const VideoView = () => {
  const [items, setItems] = useState<any[]>([])
  const [isLoading, setIsLoading] = useState(true)
  
  useEffect(() => {
    const fetchItems = async () => {
      setIsLoading(true)
      const result = await axios('http://localhost:8010/proxy/tutorial')

      console.log(result.data);

      setItems(result.data);
      setIsLoading(false);
    }
    
    fetchItems()
    
  }, [])
  

  return (
    <Container>
      {items.map((item) => (
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="holder.js/286px180" width="286" height="200"/>
          <Card.Body>
            <Card.Title>{item.name}</Card.Title>
          </Card.Body>
        </Card>
      ))}
    </Container>
  )
}

export default VideoView
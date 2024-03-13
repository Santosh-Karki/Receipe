import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './receipe.css'


const Receipes = ({title, image, ingredients}) => {
  return (
    <div className='contain'>

<Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
         {ingredients.map(ingredient =>
     
     <li key={ingredient.text}> {ingredient.text}</li>
     )}
        </Card.Text>
        <Button variant="primary">Try This</Button>
      </Card.Body>
    </Card>
      
      </div>
  )
        };

export default Receipes;
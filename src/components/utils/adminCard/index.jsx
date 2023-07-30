import { Card } from "react-bootstrap"

export const AdminCard = ({ variant, title, text=200.00, fwi }) => {

    
    
    return (
        <Card
            bg="light"
            border={variant}
            key={variant}
            text={variant}
            style={{ width: '16.5rem' }}
            className="mb-3 shadow m-auto"
        > 
            <Card.Header>
                <Card.Title className={`float-start text-${variant}`} >{title} </Card.Title>
                <i className={`icon float-end  fa-solid text-${variant} ${fwi} `}></i>
            </Card.Header>
            <Card.Body>

                <Card.Text>
                    <h2 className="p-3">${parseFloat(text)} </h2>
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

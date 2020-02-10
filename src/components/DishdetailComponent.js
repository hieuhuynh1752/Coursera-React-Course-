import React, {Component} from 'react';
import {Card, CardImg, CardImgOverlay, CardBody, CardText, CardTitle} from 'reactstrap';

class DishDetail extends Component{

    render() {
        const dish = this.props.selectedDish;

        if(dish != null){
            return(
                <div className="container">
                    <div className="row">
                        <div className='col-12 col-md-5 m-1'>
                            <Card>
                                <CardImg width="100%" object src={dish.image} alt={dish.name}/>
                                <CardBody>
                                    <CardTitle>{dish.name}</CardTitle> 
                                    <CardText>{dish.description}</CardText>
                                </CardBody> 
                            </Card>
                        </div>
                        <div className='col-12 col-md-5 m-1'>
                            <h4>Comments</h4>
                                {dish.comments.map((comment,i)=>{
                                    return(
                                        <ul className='list-unstyled' key = {comment.id}>
                                            <li>
                                                <p>{comment.comment}</p>
                                                <p>{`-- ${comment.author}, ${comment.date}`}</p>
                                            </li>
                                        </ul>
                                    )
                                })}
                        </div>
                    </div>
                </div>
                
            );
        }
        else{
            return(
                <div></div>
            );
        }
    }
}

export default DishDetail;
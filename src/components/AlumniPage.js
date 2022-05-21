import React from 'react';
import { Card, CardBody, CardImg, CardImgOverlay, CardText, CardTitle } from 'reactstrap';
import { ALUMNI } from '../shared/alumnis.js'

function RenderAlumni({alumni}) {
    return (
        <Card className='box2'>
            <CardImg src="/assests/images/lnmiit.jpg" alt="lnmiit" className='img2'></CardImg>
            <img src={alumni.image} alt={alumni.name} className='img1'/>
            <CardBody>
                <CardText>{alumni.name}</CardText>
                <CardText>{alumni.batch}</CardText>
            </CardBody>
        </Card>
    )
}

const A = ALUMNI;

function AlumniPage() {

    const alumnis = A.map((alumni) => {
        return (
            <div key={alumni.id} className="col-6 col-md-4">
                <RenderAlumni alumni={alumni}/>
            </div>
        )
    });

    return (
        <div className="container">
            <div className="row">
                <div className="box1">
                    ALUMNI
                </div>
            </div>
            <div className="row row1">
                {alumnis}
            </div>
        </div>
    )
}

export default AlumniPage;
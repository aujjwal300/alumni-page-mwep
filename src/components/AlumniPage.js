import React from 'react';
import { Card, CardBody, CardImg, CardText } from 'reactstrap';
import { ALUMNI } from '../shared/alumnis.js'

// Create box structure for each Alumni
function RenderAlumni({alumni}) {
    return (
        <Card className='box2'>
            <CardImg src="/assests/images/lnmiit.jpg" alt="lnmiit" className='img2'></CardImg> {/*Background image for alumni box*/}
            <img src={alumni.image} alt={alumni.name} className='img1'/> {/*Alumni image*/}
            <CardBody>
                <CardText>{alumni.name}</CardText>
                <CardText>{alumni.batch}</CardText>
            </CardBody>
        </Card>
    )
}

{/*Taking data from alumnis/js in shared folder and storing as variable A in this page*/}
const A = ALUMNI;

{/*Main function*/}
function AlumniPage() {

    {/*Traversing through each alumni entry and and calling RenderAlumni to form box structure.
        Storing as a set*/}
    const alumnis = A.map((alumni) => {
        return (
            <div key={alumni.id} className="col-6 col-md-4">
                <RenderAlumni alumni={alumni}/>
            </div>
        )
    });

    // Main code
    return (
        <div className="container">
            <div className="row">
                <div className="box1">
                    ALUMNI     {/*Page Heading*/}
                </div>
            </div>
            <div className="row row1">
                {alumnis}      {/* Calling alumnis set which stores all the alumni box structure */}
            </div>
        </div>
    )
}

export default AlumniPage;
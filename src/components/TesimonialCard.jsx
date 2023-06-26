import React from 'react'
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
  } from "@material-tailwind/react";

function TesimonialCard(props) {
  return (
    <Card className=" drop-shadow-lg">
      <CardHeader shadow={false} floated={false} className="h-20 w-20 rounded-full mx-auto">
        <img 
          src={props.img} 
          className="w-full h-full object-cover"
        />
      </CardHeader>
      <CardBody>
        <div className="flex flex-col items-center justify-between mb-2">
          <Typography color="blue-gray" className="font-medium">
            ImperialHal  
          </Typography>
          <Typography color="blue-gray" className="font-medium">
            Apex Legends Gamer
          </Typography>
        </div>
        <Typography variant="small" color="gray" className="font-normal opacity-75">
        Lorem ipsum dolor sit amet,
 consectetur adipisicing elit.
        </Typography>
      </CardBody>

    </Card>
  )
}

export default TesimonialCard
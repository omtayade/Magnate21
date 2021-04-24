import React from 'react'
import Card from './Card'
import './Body.css'

function Body() {

    const data="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit sint alias maiores recusandae atque, aliquid vel consectetur iusto reiciendis debitis. Facere nostrum eaque quos aperiam, exercitationem reprehenderit repellendus est provident!";

    return (
        <>
            <div className="app__body">
                <div className="app__body__heading">
                    <a> Events </a>                  
                </div>
                <div className="app__body__cards">
                    <div className="a">
                    <Card title={<h3>Event</h3>} modalData={data} >
                        {data}
                    </Card>
                    <Card title={<h3>Event</h3>} modalData={data} >
                        {data}
                    </Card>
                    </div>
                    <div  className="b">
                    <Card title={<h3>Event</h3>} modalData={data}>
                        {data}
                    </Card>
                    <Card title={<h3>Event</h3>} modalData={data}>
                        {data}
                    </Card>
                    </div>
                </div>
                <div className="app__body__cards">
                    <div className="a">
                    <Card title={<h3>Event</h3>} modalData={data}>
                        {data}
                    </Card>
                    <Card title={<h3>Event</h3>} modalData={data}>
                        {data}
                    </Card>
                    </div>
                    <div  className="b">
                    <Card title={<h3>Event</h3>} modalData={data}>
                        {data}
                    </Card>
                    <Card title={<h3>Event</h3>} modalData={data}>
                        {data}
                    </Card>
                    </div>
                </div>  
            </div>
        </>
    )
}

export default Body

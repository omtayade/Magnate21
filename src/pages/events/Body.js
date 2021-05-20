import React from 'react'
import Card from '../../components/event-cards/Card'
import './Body.css'

function Body() {

    const data=" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit sint alias maiores recusandae atque, aliquid vel consectetur iusto reiciendis debitis. Facere nostrum eaque quos aperiam, exercitationem reprehenderit repellendus est provident!";

    return (
        <>
            <div class="animation-area">
                <ul class="box-area">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
            <div className="app__body">
                <div className="app__body__heading">
                    <a> Events </a>                  
                </div>
                <div className="app__body__cards">
                    <div className="a">
                    <Card title="Event1" modalData={data} >
                        {data}
                    </Card>
                    <Card title="Event2" modalData={data} >
                        {data}
                    </Card>
                    </div>
                    <div  className="b">
                    <Card title="Event3" modalData={data}>
                        {data}
                    </Card>
                    <Card title="Event4" modalData={data}>
                        {data}
                    </Card>
                    </div>
                </div>
                <div className="app__body__cards">
                    <div className="a">
                    <Card title="Event5" modalData={data}>
                        {data}
                    </Card>
                    <Card title="Event6" modalData={data}>
                        {data}
                    </Card>
                    </div>
                    <div  className="b">
                    <Card title="Event7" modalData={data}>
                        {data}
                    </Card>
                    <Card title="Event8 " modalData={data}>
                        {data}
                    </Card>
                    </div>
                </div>
                <div className="app__body__cards">
                    <div className="a">
                    <Card title="Event9 " modalData={data}>
                        {data}
                    </Card>
                    <Card title="Event10" modalData={data}>
                        {data}
                    </Card>
                    </div> 
                </div> 
            </div>
        </>
    )
}

export default Body

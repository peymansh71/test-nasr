import React from 'react'
import Sitewrapper from '../components/Sitewrapper';
import {Items} from '../components'
 
export default function Home() {
    return (
        <Sitewrapper>
            <main className="w100">
                <div className="item-container">
                    <Items />
                </div>
            </main>
        </Sitewrapper>
    )
}
import React from 'react'

import Card from './Card'
import bed from '../../assets/bed.jpg'
import meeting from '../../assets/meeting.webp'
import sitting from "../../assets/header.webp";
import styles from './style.module.scss'

function index() {
    return (
        <div className={styles.reason}>
            <h1>Why Bella</h1>
            <div className={styles.flex}>
                <Card image={meeting} text="Every Bela has been purposefully designed and outfitted as an entire living space with the amenities of a home" title="Beauty Amplified" />

                <Card image={sitting} text="Bellas are located in kinds of vibrant neigborhoods where we ourselves want to live" title="Fascinating Locations" />

                <Card image={bed} text="Each Bellas regularly undergoes thorough checklist by our staff to make sure your stay is flawless" title="A Signature of Excellence" />
            </div>
        </div>
    )
}

export default index
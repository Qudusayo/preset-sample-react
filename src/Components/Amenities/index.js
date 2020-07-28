import React from 'react'

import Card from './Card'
import bed from '../../assets/bed.jpg'
import coincerge from '../../assets/coincerge.png'
import washer from '../../assets/laundry.webp'
import tv from '../../assets/tv.jpg' 
import furniture from '../../assets/meet.jpeg'
import coffee from '../../assets/coffee.jpg'
import styles from './style.module.scss'

function index() {
    return (
        <div className={styles.amenities}>
            <h1>Our Amenities</h1>
            <div className={styles.flex}>
                <Card image={bed} text="Premium Matresses" />
                <Card image={washer} text="Exclusive Toiletries" />
                <Card image={coffee} text="Naspresso Coffee" />
                <Card image={bed} text="Fully Stocked Kitchen" />
                <Card image={tv} text="Smart TV's" />
                <Card image={washer} text="Washer & Dryer" />
                <Card image={tv} text="Local Art" />
                <Card image={coincerge} text="Concierge Services" />
                <Card image={furniture} text="Modern Furniture" />
                <Card image={bed} text="Premium Matresses" />
            </div>
        </div>
    )
}

export default index
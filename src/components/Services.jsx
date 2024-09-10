import React from 'react'

const Services = () => {
    return (
        <section className='my-services' id='work'>

            <h2 className="section__title section__title--services">What I do</h2>
            <div className="services">
                <div className="service">
                    <h3>Web Design</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat.</p>
                </div>
                <div className="service">
                    <h3>Frontend Development</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat.</p>
                </div>
                <div className="service">
                    <h3>Figma to Code</h3>
                    <p>Need your beautiful Figma prototype converted into code?  No problem.  I can help transform your prototype into a working website, complete with animations, responsive layout, and the beautiful fonts and colors you worked so hard on.</p>
                </div>
            </div>
            <button type='button' className='btn'>See my work</button>


        </section>
    )
}

export default Services



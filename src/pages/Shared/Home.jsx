// import React from 'react';

// const Home = () => {
//     return (
//         <div>
//             <h1>Welcome to EduCircle</h1>
//             <p>Your one-stop platform for educational resources.</p>
//         </div>
//     );
// };

// export default Home;


import React from 'react';
import Banner from '../components/HomePages/Banner';

const Home = () => {
    return (
        <div className='flex flex-col items-center justify-center h-screen'>
            {/* <header>
                <h1>Welcome to EduCircle</h1>
            </header>
            <main>
                <section>
                    <h2>About Us</h2>
                    <p>EduCircle is a platform dedicated to providing quality education resources.</p>
                </section>
                <section>
                    <h2>Our Services</h2>
                    <ul>
                        <li>Online Courses</li>
                        <li>Webinars</li>
                        <li>Study Materials</li>
                    </ul>
                </section>
            </main>
            <footer>
                <p>&copy; 2023 EduCircle. All rights reserved.</p>
            </footer> */}
            <Banner></Banner>
        </div>
    );
};

export default Home;
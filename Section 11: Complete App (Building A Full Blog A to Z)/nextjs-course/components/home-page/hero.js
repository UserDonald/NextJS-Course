import Image from 'next/image';

import classes from './hero.module.css';

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/profile.jpeg"
          alt="An image showing Donald"
          width={400}
          height={400}
        />
      </div>
      <h1>Hi, I'm Donald</h1>
      <p>
        I am an aspiring software engineer specializing in NextJS, with a
        background in informatics that strengthens my approach to front-end
        development. My goal is to enhance user experiences in technology,
        blending technical skills with a user-focused perspective. I am eager to
        contribute to innovative projects and grow in a dynamic tech
        environment.
      </p>
    </section>
  );
}

export default Hero;

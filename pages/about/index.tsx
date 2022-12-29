import Image from "next/image";
import style from './About.module.css';

const About = () => {
  return (
    <main className={`container ${style.main}`}>
      <h2 className="heading">About</h2>
      <section className={style.content}>
        <Image src='/images/about.jpg' width={600} height={450} alt='About us'/>
        <div>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur cumque similique voluptas ut sint maxime necessitatibus reprehenderit repellendus at, molestiae saepe fugiat atque laboriosam est blanditiis impedit earum aliquam repellat.
          Dignissimos suscipit fuga ullam, dolores magni laborum error inventore quae alias et, fugit ipsum nam modi excepturi vero ad sed minima.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste reprehenderit similique consequuntur aliquam! Sapiente magnam, nulla quasi iste molestiae perspiciatis et explicabo dolorum ad voluptates sunt modi? Aperiam, fuga fugiat.
          Expedita xercitationem, eius qui. At, delectus? Aspernatur, delectus.</p>
        </div>
      </section>
    </main>
  )
}

export default About;
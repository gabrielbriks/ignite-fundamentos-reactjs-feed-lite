
import styles from './Post.module.css';


export function Post(props) {
  return (
    <article className={styles.post}>
      
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}  
            src="https://github.com/gabrielbriks.png"            
          />
          <div className={styles.authorInfo}>
            <strong>Gabriel Morais</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title='Publicado em 14-11-2022' dateTime='2022-11-14 19:00:12'>Publicado a 1h</time>
      </header>
      
      <div className={styles.content}>
        <p>Fala galera! 👋 </p>
        <p>Acabei de subir mais um projeto no meu portifolio. É um projeto pessoal que fiz com ReactJS</p>
        <p> 👉 <a href="">gabriel.design/projeto-react</a></p>
        <p>
          <a href="">#novoprojeto</a>{' '}
          <a href="">#nlw</a>{' '}
          <a href="">#dev</a>{' '}
        </p>
      </div>
    </article>
  );

}
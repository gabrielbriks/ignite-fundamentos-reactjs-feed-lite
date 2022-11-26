
import { ThumbsUp, Trash } from 'phosphor-react';
import { useState } from 'react';
import { Avatar } from '../avatar/Avatar';
import styles from './Comment.module.css';

export function Comment({content, onDeleteComment}) {

  const [likeCount, setLikeCount] = useState(0);

  function handleDeleteComment(){
    onDeleteComment(content);
  }

  function handleLikeComment() {
    setLikeCount(likeCount +1)
  }

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/gabrielbriks.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Gabriel Morais</strong>
              <time title='Publicado em 14-11-2022' dateTime='2022-11-14 19:00:12'>Cerca de 1h atrás</time>
            </div>

            <button 
              onClick={handleDeleteComment}
              title="Deletar comentário">
              <Trash size={24}/>
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button
            onClick={handleLikeComment}
          >
            <ThumbsUp size={20}/>
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>

      </div>
    </div>
  );
}
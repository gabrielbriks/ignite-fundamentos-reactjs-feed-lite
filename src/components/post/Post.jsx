
import { Avatar } from '../avatar/Avatar';
import { Comment } from '../comment/Comment';
import styles from './Post.module.css';

import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { useState } from 'react';

//# O que um post vai ter inicialmente??
//author: { avatar_url: "", name: "", role: "}
//publishedAt: Date
//content: String



export function Post({ author, publishedAt, content }) {

  const [comments, setComments] = useState([1,2]);

  const publishedDateFormat = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h' ", {
    locale: ptBR
  });

  const publishedDateRealtiveToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true
  });

  function handleCreateNewComment(event) {
    event.preventDefault();
    console.log('oi');
    setComments([...comments, comments.length + 1])
  }


  return (
    <article className={styles.post}>

      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time title={publishedDateFormat} dateTime={publishedAt.toISOString()}>
          {publishedDateRealtiveToNow}
        </time>
      </header>

      <div className={styles.content}>
        {
          content.map(line => {
            if(line.type === 'paragraph') {
              return <p>{line.content}</p>
            }
            else if(line.type === 'link'){
              return <p><a href=''>{line.content}</a></p>              
            }
          })
        }
        
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea
          placeholder="Deixe um comentário ... "
        />

        <footer>
          <button type="submit">Publicar</button>
        </footer>


      </form>

      <div className={styles.commentList}>
        {
          comments.map((comment, index) => {
           return <Comment key={index}/>
          })
        }
      </div>

    </article>
  );

}
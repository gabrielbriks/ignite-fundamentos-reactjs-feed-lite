
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

  const [comments, setComments] = useState([
    'Post muito top! Vamos nessa!',
  ]);

  const [newCommentText, setNewCommentText] = useState('');

  const publishedDateFormat = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h' ", {
    locale: ptBR
  });

  const publishedDateRealtiveToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true
  });

  const newCommentTextEmpty = newCommentText.length === 0;

  function handleCreateNewComment(event) {
    event.preventDefault();


    setComments([...comments, newCommentText]);
    setNewCommentText('');

  }


  function handleNewCommentChange(event) {
    event.target.setCustomValidity('');
    setNewCommentText(event.target.value);
  }

  function deleteComment(commentToDelete) {

    const commentWithoutDeleteOne = comments.filter(comment => {
      return comment !== commentToDelete;
    })

    setComments(commentWithoutDeleteOne);
  }

  function handleNewCommentInvalid() {
    event.target.setCustomValidity('Esse campo é obrigatório.');
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
              return <p key={line.content}>{line.content}</p>
            }
            else if(line.type === 'link'){
              return <p key={line.content}><a href=''>{line.content}</a></p>              
            }
          })
        }
        
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea
          name="comment"
          value={newCommentText}
          onChange={handleNewCommentChange}
          onInvalid={handleNewCommentInvalid}
          placeholder="Deixe um comentário ... "
          required
        />

        <footer>
          <button type="submit" disabled={newCommentTextEmpty}>Publicar</button>
        </footer>


      </form>

      <div className={styles.commentList}>
        {
          comments.map(comment => {
            return (
              <Comment
                content={comment} 
                key={comment} 
                onDeleteComment={deleteComment} 
              />
            )
          })
        }
      </div>

    </article>
  );

}
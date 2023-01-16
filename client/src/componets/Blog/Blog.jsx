import React from 'react';
import './Blog.css';
function Blog() {
  return (
    <div>
      <div className="post-container">
        <div className="post">
          <p className="date">21 DE DEZEMBRO DE 2022</p>
          <p></p>
          <h1>Primeira Publicação do Blog</h1>
          <div className="post-content">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              pariatur rem qui nam veniam numquam maiores tempore quas vero,
              rerum vel? Nemo repellat sapiente nulla eos impedit veniam, natus
              dolores!
            </p>
          </div>
        </div>
        <hr />
        <div className="post">
          <p className="date">22 DE DEZEMBRO DE 2022</p>
          <p></p>
          <h1>Segunda Publicação do Blog</h1>
          <div className="post-content">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt
              repellat doloribus ad laboriosam eveniet modi soluta cumque beatae
              nobis, consequuntur possimus inventore vitae, deserunt cum fuga ab
              eius, est nam.
            </p>
          </div>
        </div>
        <hr />
        <div className="post">
          <p className="date">23 DE DEZEMBRO DE 2022</p>
          <p></p>
          <h1>Terceira Publicação do Blog</h1>
          <div className="post-content">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt
              repellat doloribus ad laboriosam eveniet modi soluta cumque beatae
              nobis, consequuntur possimus inventore vitae, deserunt cum fuga ab
              eius, est nam.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;

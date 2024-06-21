import { useState } from 'react'
import './Gallery.css'
import UploadImgSection from './uploadImgSection/UploadImgSection.jsx'
import ModalBigPicture from './modal/BigPicture.jsx'

export default function Gallery({ content }) {
  const [modalBigPicture, setModalBigPicture] = new useState(false)
  const [clickedPicture, setClickedPicture] = new useState(content[0])
  const [quantityComments, setQuantityComments] = new useState(5)

  return (
    <>
      <section className="pictures container">
        <h2 className="pictures__title visually-hidden">Фотографии других пользователей</h2>
        
        <UploadImgSection />

        {/* ЗДЕСЬ БУДУТ ИЗОБРАЖЕНИЯ ДРУГИХ ПОЛЬЗОВАТЕЛЕЙ */}
        { content && content.map((picture) => (
            <a
              href="#"
              className="picture"
              key={ picture.id }
              onClick={() => {              
                  setModalBigPicture(true)
                  setClickedPicture(picture)
                }
              }
            >
              <img
                className="picture__img"
                src={ `../src/components/main/ContainerPicturesSection/${picture.url}` }
                width="182"
                height="182"
                alt={ picture.description  }
              />
              <p className="picture__info">
                <span className="picture__comments">{ picture.comments.length }</span>
                <span className="picture__likes">{ picture.likes }</span>
              </p>
            </a>
        )) }
        
      </section>
      <ModalBigPicture open={modalBigPicture}>
          <section className="big-picture overlay">
            <h2 className="big-picture__title  visually-hidden">Просмотр фотографии</h2>
            <div className="big-picture__preview">

              {/* <!-- Просмотр изображения --> */}
              <div className="big-picture__img">
                <img
                  src={`../src/components/main/ContainerPicturesSection/${clickedPicture.url}`}
                  alt={clickedPicture.description}
                  width="600" height="600"
                />
              </div>

              {/* <!-- Информация об изображении. Подпись, комментарии, количество лайков --> */}
              <div className="big-picture__social  social">
                <div className="social__header">
                  <img className="social__picture" src="../src/img/avatar-1.svg" alt="Аватар автора фотографии" width="35" height="35" />
                  <p className="social__caption">{clickedPicture.description}</p>
                  <p className="social__likes">Нравится <span className="likes-count">{clickedPicture.likes}</span></p>
                </div>

                {/* <!-- Комментарии к изображению --> */}
                <div className="social__comment-count">
                  <span className="social__comment-shown-count">
                    {quantityComments}
                  </span> из 
                  <span className="social__comment-total-count">
                    {' ' + clickedPicture.comments.length}
                  </span> комментариев
                </div>
                <ul className="social__comments">
                  { clickedPicture.comments.map((comment, index) => (
                    index < quantityComments ? 
                      <li
                        className="social__comment"
                        key={comment.id}
                      >
                        <img
                          className="social__picture" src={'../src/' + comment.avatar}
                          alt="Аватар комментатора фотографии"
                          width="35" height="35"
                        />
                        <p className="social__text">{comment.message}</p>
                      </li> : null
                    ))
                    // console.log(clickedPicture?.comments ? clickedPicture.comments : null)
                  }
                </ul>

                {/* Кнопка для загрузки новой порции комментариев */}
                <button
                  type="button"
                  className="social__comments-loader comments-loader"
                  onClick={() => {
                    quantityComments + 5 < clickedPicture.comments.length ?
                      setQuantityComments(quantityComments + 5) : 
                      setQuantityComments(clickedPicture.comments.length)
                  }}
                >
                  Загрузить еще
                </button>

                {/* <!-- Форма для отправки комментария --> */}
                <div className="social__footer">
                  <img className="social__picture" src="../src/img/avatar-6.svg" alt="Аватар комментатора фотографии" width="35" height="35" />
                  <input type="text" className="social__footer-text" placeholder="Ваш комментарий..." />
                  <button type="button" className="social__footer-btn" name="button">Отправить</button>
                </div>
              </div>

              {/* <!-- Кнопка для выхода из полноэкранного просмотра изображения --> */}
              <button
                type="reset"
                className="big-picture__cancel cancel"
                id="picture-cancel"
                onClick={() => {
                  setModalBigPicture(false)
                  setQuantityComments(5)
                  }
                }
              >
                Закрыть
              </button>
            </div>
          </section>
      </ModalBigPicture>
    </>
  )
}
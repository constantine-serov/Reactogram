import { useState, useRef } from 'react'
import ModalUploadImg from '../modal/UploaderImg.jsx'

export default function UploadImgSection() {
  const [isShownModal, setShownModal] = new useState(false)
  const imgUploader = new useRef
  const previewPicture = new useRef
  const IMAGE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];

  return (
    <>
      <section className="img-upload">
        <div className="img-upload__wrapper">
          <h2 className="img-upload__title visually-hidden">Загрузка фотографии</h2>

          <form className="img-upload__form" id="upload-select-image" action="https://30.javascript.pages.academy/kekstagram" method="post" encType="multipart/form-data" autoComplete="off">

            {/* Изначальное состояние поля для загрузки изображения */}
            <fieldset className="img-upload__start">
              <input
                type="file"
                className="img-upload__input visually-hidden"
                id="upload-file"
                name="filename"
                accept="image/png, image/jpeg"
                required
                ref={imgUploader}
                onChange={() => {
                  IMAGE_TYPES.some((it) => imgUploader.current.files[0].name.toLowerCase().endsWith(it)) &&
                  (
                    previewPicture.current.src = URL.createObjectURL(imgUploader.current.files[0]),
                    setShownModal(true)
                  )
                }}
              />
              <label htmlFor="upload-file" className="img-upload__label  img-upload__control">Загрузить</label>
            </fieldset>
          </form>
        </div>
      </section>

      {/* Форма редактирования изображения */}

      <ModalUploadImg open={isShownModal}>
        <div className="img-upload__overlay">
          <div className="img-upload__wrapper">
            <div className="img-upload__preview-container">

              {/* Изменение размера изображения */}
              <fieldset className="img-upload__scale scale">
                <button type="button" className="scale__control scale__control--smaller">Уменьшить</button>
                <input type="text" className="scale__control scale__control--value" value="100%" title="Image Scale" name="scale" readOnly />
                <button type="button" className="scale__control scale__control--bigger">Увеличить</button>
              </fieldset>

              {/* Предварительный просмотр изображения */}
              <div className="img-upload__preview">
                <img
                  ref={previewPicture}
                  src="img/upload-default-image.jpg"
                  alt="Предварительный просмотр фотографии"
                />
              </div>

              {/* Изменение глубины эффекта, накладываемого на изображение */}
              <fieldset className="img-upload__effect-level effect-level">
                <input className="effect-level__value" type="number" step="any" name="effect-level" value="" />
                <div className="effect-level__slider"></div>
              </fieldset>

              {/* Кнопка для закрытия формы редактирования изображения */}
              <button type="reset" className="img-upload__cancel cancel" id="upload-cancel">Закрыть</button>
            </div>

            {/* Наложение эффекта на изображение */}
            <fieldset className="img-upload__effects effects">
              <ul className="effects__list">
                <li className="effects__item">
                  <input type="radio" className="effects__radio visually-hidden" name="effect" id="effect-none" value="none" checked />
                  <label htmlFor="effect-none" className="effects__label">
                    <span className="effects__preview effects__preview--none">Превью фото без эффекта</span>
                    Оригинал
                  </label>
                </li>
                <li className="effects__item">
                  <input type="radio" className="effects__radio visually-hidden" name="effect" id="effect-chrome" value="chrome" />
                  <label htmlFor="effect-chrome" className="effects__label">
                    <span className="effects__preview effects__preview--chrome">Превью эффекта Хром</span>
                    Хром
                  </label>
                </li>
                <li className="effects__item">
                  <input type="radio" className="effects__radio visually-hidden" name="effect" id="effect-sepia" value="sepia" />
                  <label htmlFor="effect-sepia" className="effects__label">
                    <span className="effects__preview effects__preview--sepia">Превью эффекта Сепия</span>
                    Сепия
                  </label>
                </li>
                <li className="effects__item">
                  <input type="radio" className="effects__radio visually-hidden" name="effect" id="effect-marvin" value="marvin" />
                  <label htmlFor="effect-marvin" className="effects__label">
                    <span className="effects__preview effects__preview--marvin">Превью эффекта Марвин</span>
                    Марвин
                  </label>
                </li>
                <li className="effects__item">
                  <input type="radio" className="effects__radio visually-hidden" name="effect" id="effect-phobos" value="phobos" />
                  <label htmlFor="effect-phobos" className="effects__label">
                    <span className="effects__preview effects__preview--phobos">Превью эффекта Фобос</span>
                    Фобос
                  </label>
                </li>
                <li className="effects__item">
                  <input type="radio" className="effects__radio visually-hidden" name="effect" id="effect-heat" value="heat" />
                  <label htmlFor="effect-heat" className="effects__label">
                    <span className="effects__preview effects__preview--heat">Превью эффекта Зной</span>
                    Зной
                  </label>
                </li>
              </ul>
            </fieldset>

            {/* Добавление хэш-тегов и комментария к изображению */}
            <fieldset className="img-upload__text text">
              <div className="img-upload__field-wrapper">
                <input className="text__hashtags" name="hashtags" placeholder="#ХэшТег" />
              </div>
              <div className="img-upload__field-wrapper" data-pristine-maxlength-message="Максимум 140 символов">
                <textarea className="text__description" name="description" placeholder="Ваш комментарий..."></textarea>
              </div>
            </fieldset>

            {/* Кнопка для отправки данных на сервер */}
            <button type="submit" className="img-upload__submit" id="upload-submit">Опубликовать</button>
          </div>
        </div>
      </ModalUploadImg>
    </>
  )
}
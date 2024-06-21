import './Header.css'

export default function Header({ isContent }) {
  return (
    <section className={ isContent ? 'img-filters container' : 'img-filters img-filters--inactive container' }>
      <h2 className="img-filters__title  visually-hidden">Фильтр фотографий</h2>
      <form className="img-filters__form" action="index.html" method="get">
        <button className="img-filters__button img-filters__button--active" id="filter-default">По умолчанию</button>
        <button className="img-filters__button" id="filter-random">Случайные</button>
        <button className="img-filters__button" id="filter-discussed">Обсуждаемые</button>
      </form>
    </section>
  )
}
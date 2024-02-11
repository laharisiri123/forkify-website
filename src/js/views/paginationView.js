import View from './View';
import icons from 'url:../../img/icons.svg'; // parcel 2

class PaginationView extends View {
  _parentEl = document.querySelector('.pagination');

  addHandlerClick(handler) {
    this._parentEl.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--inline');
      if (!btn) return;

      const gotoPage = +btn.dataset.goto;
      handler(gotoPage);
    });
  }

  _generateMarkup() {
    const currPage = this._data.page;

    const numPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );

    // Page 1, and there are other pages
    if (currPage === 1 && numPages > 1) {
      return this._generateMarkupNextPage();
    }

    // Last Page
    if (currPage === numPages && numPages > 1) {
      return this._generateMarkupPrevPage();
    }

    // Other Page
    if (currPage < numPages) {
      return `${this._generateMarkupPrevPage()}${this._generateMarkupNextPage()}`;
    }

    // Page 1, and there are NO other pages
    return '';
  }

  _generateMarkupPrevPage() {
    return `  
        <button data-goto="${
          this._data.page - 1
        }" class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-left"></use>
            </svg>
            <span>Page ${this._data.page - 1}</span>
        </button>`;
  }

  _generateMarkupNextPage() {
    return `
        <button data-goto="${
          this._data.page + 1
        }"class="btn--inline pagination__btn--next">
            <span>Page ${this._data.page + 1}</span>
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-right"></use>
            </svg>
        </button>`;
  }
}

export default new PaginationView();

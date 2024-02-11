import View from './View';
import icons from 'url:../../img/icons.svg'; // parcel 2
import previewView from './previewView';

class ResultsView extends View {
  _parentEl = document.querySelector('.results');
  _errorMessage = 'There are no recipes for your query. Please try again:)';
  _successMessage = '';
  _generateMarkup() {
    return this._data
      .map(bookmark => previewView.render(bookmark, false))
      .join('');
  }
}

export default new ResultsView();

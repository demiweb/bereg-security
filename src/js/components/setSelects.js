import Select from 'select-custom';

class CustomSelect {
  constructor(select, params) {
    this.select = select;
    this.name = select.dataset.type;
    this.params = params[this.name];
  }

  getElements() {
    this.wrap = this.select.parentNode;
    this.opener = this.wrap.querySelector('.custom-select__opener');
    this.panel = this.wrap.querySelector('.custom-select__panel');
    this.options = [].slice.call(this.wrap.querySelectorAll('.custom-select__option'));
    this.input = this.wrap.querySelector('.js-search');
  }

  filterSearch() {
    if (!this.input) return;

    this.input.addEventListener('input', (e) => {
      const filter = e.currentTarget.value.toUpperCase();
      this.options.forEach((el) => {
        const option = el;
        const textValue = option.innerText;
        if (textValue.toUpperCase().indexOf(filter) > -1) {
          option.style.display = '';
        } else {
          option.style.display = 'none';
        }
      });
    });
  }


  init() {
    this.Select = new Select(this.select, this.params);
    this.Select.init();
    this.getElements.call(this);

    // ================ helpers ======================
    // addSelectsPlaceholder.call(this);
    // this.filterSearch();
    // ================ helpers ======================
  }
}

export default function setSelects() {
  const selects = [].slice.call(document.querySelectorAll('.js-select'));
  if (!selects.length) return;

  const params = {
    default: {
      // panelItem: {
      //   position: 'top',
      //   item: '<input type="text" class="js-search" />',
      // },
    },
  };

  selects.forEach((select) => {
    const customSelect = new CustomSelect(select, params);
    customSelect.init();
  });
}

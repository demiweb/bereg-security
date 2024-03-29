import IMask from 'imask';

export default function setInputMask() {
  const maskedInputs = [].slice.call(document.querySelectorAll('.js-mask'));

  if (!maskedInputs.length) return;


  maskedInputs.forEach((input) => {
    const type = input.dataset.maskType;
    const mask = input.dataset.mask || '+{38}(000) 000-00-00';
    // const mask = '{38}000 000-00-00';

    const options = {
      phone: {
        mask,
        lazy: false,
      },
    };

    const myMask = IMask(input, options[type]);
  });
}

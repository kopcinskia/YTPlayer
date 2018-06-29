import validator from 'validator';

export default function inputValidate(data, e) {

  let errorsMessages = {}

  if(validator.isEmpty(data.title) && e === 'title'){
    errorsMessages.title = 'To pole jest wymagane'
  }

  if(validator.isEmpty(data.link) && e === 'link'){
    errorsMessages.link = 'To pole jest wymagane'
  }

  if(!validator.contains(data.link, 'www.youtube.com/watch?') && e === 'link'){
    errorsMessages.link = 'Słaby trochę ten link z YT'
  }

  return errorsMessages
}

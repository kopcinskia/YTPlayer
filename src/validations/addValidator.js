import validator from 'validator';

export default function inputValidate(data) {

  let errorsMessages = {}

  if(validator.isEmpty(data.title)){
    errorsMessages.title = 'To pole jest wymagane'
  }

  if(validator.isEmpty(data.link)){
    errorsMessages.link = 'To pole jest wymagane'
  }

  if(validator.contains(data.link, 'www.youtube.com/watch?')){
    errorsMessages.link = 'Słaby trochę ten link z YT'
  }

  return errorsMessages
}

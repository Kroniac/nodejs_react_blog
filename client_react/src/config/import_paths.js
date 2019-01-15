export const Scenes = {
  Feeds: () => require('../scenes/feeds/feeds').default,
  SinglePost: () => require('../scenes/single_post/single_post').default,
  Home: () => require('../scenes/home/home').default,
}

export const SharedUI = {
  Button: () => require('../shared_ui/button/button'),
  Modal: () => require('../shared_ui/modal/modal'),
  Backdrop: () => require('../shared_ui/backdrop/backdrop'),
  TextInput: () => require('../shared_ui/text_input/text_input'),
}

export const Libs = {
  Utils: () => require('../libs/utils'),
}
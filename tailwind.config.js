module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'discord-900': '#202225',
        'discord-500': '#2F3136',
        'discord-400': '#292B2F',
        'discord-300': '#36393F',
        'discord-200': '#3E4249',
      },
      boxShadow: {
        custom: '0 2px 0 0 rgba(0, 0, 0, 0.2)',
      },
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
        'round': 'border-radius'
      }
    }
  },
  variants: {
    extend: {
      borderRadius: ['hover', 'focus'],
      flex: ['hover', 'focus', 'group-hover'],
      display: ['hover', 'focus', 'group-hover'],
      height: ['hover', 'focus', 'group-hover'],
    }
  },
  plugins: []
};

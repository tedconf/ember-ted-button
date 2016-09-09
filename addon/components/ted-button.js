import Ember from 'ember';
import layout from '../templates/components/ted-button';

export default Ember.Component.extend({
  layout,
  tagName: 'button',
  text: '',
  theme: 'light',
  disabled: false,
  attributeBindings: ['disabled'],
  classNameBindings: [
    'layoutClasses', 
    'themeClassNames',
  ],

  useHoverStyles: Ember.computed.not('disabled'),

  layoutClasses: 'd:i-b b-r:.3 p-x:1 p-y:.8 f-w:500',
  disabledClasses: '',

  themes: {
    'light': {
      classNames: 'c:gray-d b:gray bg:gray-ll',
      hoverClassNames: 'hover/bg:gray-l'
    },
    'dark': {
      classNames: 'c:white bg:gray-dd b:t',
      hoverClassNames: 'hover/bg:gray-d'
    }
  },

  themeClassNames: Ember.computed('theme', 'themes', function() {
    let theme = this.get('themes')[this.get('theme')];
    let themeStyles = [theme.classNames];
    
    if (this.get('useHoverStyles')) {
      themeStyles.push(theme.hoverClassNames);
    }

    if (this.get('disabled')) {
      themeStyles.push('o:.6');
    }

    return themeStyles.join(' ');
  }),
});

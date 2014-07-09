Ext.define('Ext.ux.SwipeShine', {
    alias: 'plugin.SwipeShine',

    init: function(list) {
        list.on({
            painted: this.setupContainer,
            delay: 1000,
            scope: this
        });
    },

    setupContainer: function() {
        var firstListItem = Ext.ComponentQuery.query('ShoppingCartList component[isFirst=true]')[0];

        if (firstListItem) {
            var element = firstListItem.element
        } else {
            return;
        }

        var container = Ext.create('Ext.Container', {
            height: '100%',
            width: '100%',
            cls: 'x-list-swipe-shine',
            right: 0,
            top: 0,
            renderTo: Ext.DomHelper.append(element, '<div></div>', true)
        });

        container.on({
            painted: function() {
                container.destroy();
            },
            delay: 2000,
            scope: this
        });
    }
});

// CSS to put in resources/sass/app.scss
// .x-list-swipe-shine {
//   left:-540px;
//   background-image: -webkit-linear-gradient(right, rgba(255,255,255,0) 0%, rgba(255,255,255,0.6) 50%, rgba(255,255,255,0) 100%);
//   background-image: linear-gradient(to right, rgba(255,255,255,0) 0%, rgba(255,255,255,0.6) 50%, rgba(255,255,255,0) 100%);
//   -webkit-animation-name: swipeIndicator;
//   -webkit-animation-duration: 1s;
//   -webkit-animation-iteration-count: 2;
//   -webkit-animation-delay: 0.5s;
// }

// @-webkit-keyframes swipeIndicator {
//     0%{left:-540px}
//     100%{left:540px}
// }
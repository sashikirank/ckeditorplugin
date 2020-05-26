( function($, Drupal, drupalSettings, CKEDITOR) {
CKEDITOR.plugins.add('googlesearch', {
    icons: 'googlesearch', // %REMOVE_LINE_CORE%
    init: function( editor ) {


        editor.addCommand( 'startSearch', {
            exec: function( editor ) {
                var sel = editor.getSelection();
                var url = "https://www.google.com/search?q="+sel.getSelectedText();
                //window.open(url, '_blank');
                //jQuery( "#cke_25" ).dialog();
            }
        });
        if ( editor.ui.addButton ) {
            editor.ui.addButton( 'googlesearch', {
                label: 'Google Search',
                id: 'googlesearch',
                command: 'startSearch',
                toolbar: 'googlesearch,10',
            } );
        }
    }
} );

} )(jQuery, Drupal, drupalSettings, CKEDITOR);
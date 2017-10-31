/**
 * Registers the helper templates for Handlebars.
 *
 * @param  {[type]} options [description]
 * @return {[type]}         [description]
 */

Handlebars.registerHelper('multimedia', function(options) {
    'use strict';

    //Display a format based on the type.
    //I think this is easier than putting that conditional shit
    //in a template.

    //filetype, filename, size, orientation, caption, credit

    if (this.filename) {

        if (this.filetype === 'video') {
            //The filename is the URL for videos.
            var filenameArray = this.filename.split('/');
            var fileExtension = filenameArray[filenameArray.length - 1];
            var fileExtensionArray = fileExtension.split('.');
            this.fileID = fileExtensionArray[0];
        } else {
            var filenameArray = this.filename.split('.'); //get to get rid of the extension
            this.fileID = filenameArray[0].replace(/ |:|\//g, '-');
        }

    } else {
        this.fileID = '';
    } //if this.filename

    if (this.caption || this.credit && this.filetype !== 'text') {
        this.caption = this.caption ? this.caption : ''; //don't print null, please!
        this.captionFormatted = '<p class="caption">' + this.caption + ' <span class="credit">' + this.credit + '</span></p>';
    } else {
        this.captionFormatted = '';
    } //if this.caption

    switch (this.filetype) {
        case 'text':
            return '<p class="text">' + this.caption + '</p>';

        case 'list':
            return this.caption;

        case 'video':
            return '<div class="rich-media video-media size-'+ this.size +' orientation-'+ this.orientation +'">' +
                        '<div class="embed-responsive embed-responsive-16by9">' +
                          '<video id="video-'+ this.fileID +'" controls autoWidth="true" autoHeight="true" class="embed-responsive-item video video-js vjs-default-skin" poster="images/'+this.poster+'">' +
                              '<source type="video/mp4" src="'+ this.filename +'" />' +
                          '</video>' +
                      '</div>' +
                      this.captionFormatted +
                '</div>';

      case 'youtube' :
        if( Modernizr.touch ) {
            // See https://github.com/eXon/videojs-youtube/issues/320
            // @todo the captions are hidden under the video.
            return '<div class="embed-responsive embed-responsive-16by9 rich-media video-media size-'+ this.size +' orientation-'+ this.orientation +'">' +
                      '<video id="video-'+ this.fileID +'" autoWidth="true" autoHeight="true" class="embed-responsive-item video video-js vjs-default-skin"' +
                          'data-setup=\'{ "techOrder": ["youtube"], "sources": [{ "type": "video/youtube", "src": "'+this.filename+'"}], "Youtube": { "ytControls": 2 }}\'>' +
                      '</video>' +
                    '</div>';
        } else {
            return '<div class="embed-responsive embed-responsive-16by9 rich-media video-media size-'+ this.size +' orientation-'+ this.orientation +'">' +
                      '<video id="video-'+ this.fileID +'" controls autoWidth="true" autoHeight="true" class="embed-responsive-item video video-js vjs-default-skin" poster="images/'+this.poster+'"' +
                          'data-setup=\'{ "techOrder": ["youtube"], "sources": [{ "type": "video/youtube", "src": "'+this.filename+'"}]}\'>' +
                      '</video>' +
                    '</div>';
        }

        case 'photo':
            return '<div id="photo-' + this.fileID + '" class="rich-media photo size-' + this.size + ' orientation-' + this.orientation + '">' +
                    '<a href="images/' + this.filename + '">' +
                        '<img class="lazy" data-original="images/' + this.filename + '" alt="' + this.caption + '" />' +
                    '</a>' +
                    this.captionFormatted +
                '</div>';

        case 'graphic':
            return '<div id="graphic-' + this.fileID + '" class="rich-media photo graphic size-' + this.size + ' orientation-' + this.orientation + '">' +
                  '<a href="images/' + this.filename + '">' +
                    '<img class="lazy" data-original="images/' + this.filename + '" alt="' + this.caption + '" />' +
                  '</a>' +
                  '<p class="caption">'+ this.caption + '</p>' +
              '</div>';

        case 'pullquote':
            return '<div class="rich-media pullquote size-' + this.size + ' orientation-' + this.orientation + '">' +
                    '<p class="caption">'+ this.caption + '</p>' +
              '</div>';
        case 'mail_1':
            var mail = '<div style="text-align: center; background: #578396; color: #ffffff; padding: 10px 0 10px 0; font-size: 120%;">' +
                '<form id="mc-embedded-subscribe-form" class="validate" action="http://bangordailynews.us1.list-manage.com/subscribe/post?u=a629a44de37af801f63b7384a&amp;id=715eed3192" method="post" name="mc-embedded-subscribe-form" novalidate="" target="_blank">' +
                '<label for="mce-EMAIL">Add your email to subscribe to the Maine Focus mailing list</label>' +
                '<input id="mce-EMAIL" class="required email" name="EMAIL" type="email" value="" style="margin-left: 5px; color: #000000;"/>' +
                '<input id="mce-group[14]-14-8" name="group[14][256]" type="hidden" value="8" /> ' +
                '<!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->' +
                '<div style="position: absolute; left: -5000px;">' +
                '   <input name="b_a629a44de37af801f63b7384a_715eed3192" type="text" value="" />' +
                '</div>' +
                '<div class="clear" style="color: #000000;">' +
                '   <input id="mc-embedded-subscribe" class="button" name="subscribe" type="submit" value="Subscribe"/>' +
                '</div> ' +
                '</form>' +
                '<!--End mc_embed_signup-->' +
                '</div>'
            return mail;
        case 'tableau_1':
            var tableau = "<div class='tableauPlaceholder' id='viz1490218265232' style='position: relative'><noscript><a href='#'><img alt='Dashboard 1 ' src='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;Di&#47;DirectcarejobsareamongthefastestgrowingoccupationsinMaine&#47;Dashboard1&#47;1_rss.png' style='border: none' /></a></noscript><object class='tableauViz' style='display:none;'><param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' /> <param name='site_root' value='' /><param name='name' value='DirectcarejobsareamongthefastestgrowingoccupationsinMaine&#47;Dashboard1' /><param name='tabs' value='no' /><param name='toolbar' value='yes' /><param name='static_image' value='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;Di&#47;DirectcarejobsareamongthefastestgrowingoccupationsinMaine&#47;Dashboard1&#47;1.png' /> <param name='animate_transition' value='yes' /><param name='display_static_image' value='yes' /><param name='display_spinner' value='yes' /><param name='display_overlay' value='yes' /><param name='display_count' value='yes' /></object></div> <script type='text/javascript'> var divElement = document.getElementById('viz1490218265232'); var vizElement = divElement.getElementsByTagName('object')[0]; vizElement.style.minWidth='304px';vizElement.style.maxWidth='704px';vizElement.style.width='100%';vizElement.style.height='480px'; var scriptElement = document.createElement('script'); scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js'; vizElement.parentNode.insertBefore(scriptElement, vizElement); </script>"
            return tableau;
            break;
        case 'tableau_2':
            var tableau = "<div class='tableauPlaceholder' id='viz1490193556380' style='position: relative'><noscript><a href='#'><img alt='Dashboard 1 ' src='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;Di&#47;Directcareworkersrealwageshavedeclinedbyupto6percentoverthepastdecade&#47;Dashboard1&#47;1_rss.png' style='border: none' /></a></noscript><object class='tableauViz' style='display:none;'><param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' /> <param name='site_root' value='' /><param name='name' value='Directcareworkersrealwageshavedeclinedbyupto6percentoverthepastdecade&#47;Dashboard1' /><param name='tabs' value='no' /><param name='toolbar' value='yes' /><param name='static_image' value='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;Di&#47;Directcareworkersrealwageshavedeclinedbyupto6percentoverthepastdecade&#47;Dashboard1&#47;1.png' /> <param name='animate_transition' value='yes' /><param name='display_static_image' value='yes' /><param name='display_spinner' value='yes' /><param name='display_overlay' value='yes' /><param name='display_count' value='yes' /></object></div> <script type='text/javascript'> var divElement = document.getElementById('viz1490193556380'); var vizElement = divElement.getElementsByTagName('object')[0]; vizElement.style.minWidth='224px';vizElement.style.maxWidth='654px';vizElement.style.width='100%';vizElement.style.minHeight='200px';vizElement.style.maxHeight='480px';vizElement.style.height=(divElement.offsetWidth*0.75)+'px'; var scriptElement = document.createElement('script'); scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js'; vizElement.parentNode.insertBefore(scriptElement, vizElement); </script>"
            return tableau;
            break;
        default:
            return;
    }
});
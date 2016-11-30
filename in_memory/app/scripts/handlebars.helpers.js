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
        case 'tableau_2':
            var tableau = "<div class='tableauPlaceholder' id='viz1479483225225' style='position: relative'><noscript><a href='#'><img alt='Dashboard 1 ' src='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;Wo&#47;Workingagepopulation_0&#47;Dashboard1&#47;1_rss.png' style='border: none' /></a></noscript><object class='tableauViz' style='display:none;'><param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' /> <param name='site_root' value='' /><param name='name' value='Workingagepopulation_0&#47;Dashboard1' /><param name='tabs' value='no' /><param name='toolbar' value='yes' /><param name='static_image' value='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;Wo&#47;Workingagepopulation_0&#47;Dashboard1&#47;1.png' /> <param name='animate_transition' value='yes' /><param name='display_static_image' value='yes' /><param name='display_spinner' value='yes' /><param name='display_overlay' value='yes' /><param name='display_count' value='yes' /></object></div> <script type='text/javascript'> var divElement = document.getElementById('viz1479483225225'); var vizElement = divElement.getElementsByTagName('object')[0]; vizElement.style.minWidth='324px';vizElement.style.maxWidth='654px';vizElement.style.width='100%';vizElement.style.minHeight='529px';vizElement.style.maxHeight='629px';vizElement.style.height=(divElement.offsetWidth*0.75)+'px'; var scriptElement = document.createElement('script'); scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js'; vizElement.parentNode.insertBefore(scriptElement, vizElement); </script>"
            return tableau;
            break;
        case 'GoogleChart':
            return  '<iframe src="https://docs.google.com/spreadsheets/d/1O_eWRO0azEzpiksoiMUIhpmAd4k57KLQ3SAW5ouy2II/pubchart?oid=384629986&amp;format=interactive" id="iFrame1"></iframe>'

            break;
        default:
            return;
    }
});
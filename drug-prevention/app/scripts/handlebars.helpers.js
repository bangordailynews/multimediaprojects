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
    console.log("### multimedia: ");
    console.log(this);

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
        case 'hrule':
            return '<hr>';
            break;
        case 'bold':
            return '<div class="bold_text"><span style="font-weight: bold">' + this.caption + '</span></div>'
        case 'email-congress-form':
            var sunlight_api_key = "ae2107a11cb34149bb22c3eaf106e16d";
            var congress_request = "http://'congress.api.sunlightfoundation.com/legislators/locate?zip={{zipcode}}&apikey={{apikey}}";

            var email_congress_form = '' +
                '<div id="email-congress-form">' +
                    '<div id="ecf-form"><form name="ecf-email-form">' +
                        '<input type="hidden" name="apikey" value="' + sunlight_api_key + '">' +
                        '<input type="text" name="zipcode" placeholder="Enter your zipcode" >' +
                        '<input type="submit" value="Find Congress People">' +
                    '</form></div>' +
                    '<div id="ecf-header"></div>' +
                    '<div id="ecf-results"><ul></ul></div>' +
                    '<div id="ecf-footer"></div>' +
                '</div>';

            return email_congress_form;
            break;
        case 'email-maine-congress-form':
            var email_congress_form = '' +
                '<p><div id="email-congress-form">' +
                '<div id="ecf-form">' +
                '<div id="ecf-cta">' + this.caption + '</div>' +
                '<div><a href="http://www.maine.gov/portal/government/edemocracy/voter_lookup.php">http://www.maine.gov/portal/government/edemocracy/voter_lookup.php</a></div>' +
                '</div>' +
                '<div id="ecf-header"></div>' +
                '<div id="ecf-results"><ul></ul></div>' +
                '<div id="ecf-footer"></div>' +
                '</div></p>';

            return email_congress_form;
            break;
        case 'tableau_1':
            var tableau = "" +
                "<div class='tableauPlaceholder' id='viz1473781646271' style='position: relative'><noscript><a href='#'><img alt='Dashboard 1 ' src='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;Bl&#47;Blueprintsprograms&#47;Dashboard1&#47;1_rss.png' style='border: none' /></a></noscript><object class='tableauViz'  style='display:none;'><param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' /> <param name='site_root' value='' /><param name='name' value='Blueprintsprograms&#47;Dashboard1' /><param name='tabs' value='no' /><param name='toolbar' value='yes' /><param name='static_image' value='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;Bl&#47;Blueprintsprograms&#47;Dashboard1&#47;1.png' /> <param name='animate_transition' value='yes' /><param name='display_static_image' value='yes' /><param name='display_spinner' value='yes' /><param name='display_overlay' value='yes' /><param name='display_count' value='yes' /></object></div>                <script type='text/javascript'>                    var divElement = document.getElementById('viz1473781646271');                    var vizElement = divElement.getElementsByTagName('object')[0];                    vizElement.style.minWidth='324px';vizElement.style.maxWidth='654px';vizElement.style.minHeight='549px';vizElement.style.maxHeight='719px';                    var scriptElement = document.createElement('script');                    scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';                    vizElement.parentNode.insertBefore(scriptElement, vizElement);                </script>";
            return tableau;
            break;
        case 'tableau_2':
            var tableau = "" +
                "<div class='tableauPlaceholder' id='viz1473781703618' style='position: relative'><noscript><a href='#'><img alt='Dashboard 2 ' src='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;Mo&#47;MobileSubstanceUsePreventionProgramsintheNREPP&#47;Dashboard2&#47;1_rss.png' style='border: none' /></a></noscript><object class='tableauViz'  style='display:none;'><param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' /> <param name='site_root' value='' /><param name='name' value='MobileSubstanceUsePreventionProgramsintheNREPP&#47;Dashboard2' /><param name='tabs' value='no' /><param name='toolbar' value='yes' /><param name='static_image' value='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;Mo&#47;MobileSubstanceUsePreventionProgramsintheNREPP&#47;Dashboard2&#47;1.png' /> <param name='animate_transition' value='yes' /><param name='display_static_image' value='yes' /><param name='display_spinner' value='yes' /><param name='display_overlay' value='yes' /><param name='display_count' value='yes' /></object></div>                <script type='text/javascript'>                    var divElement = document.getElementById('viz1473781703618');                    var vizElement = divElement.getElementsByTagName('object')[0];                    vizElement.style.minWidth='324px';vizElement.style.maxWidth='654px';vizElement.style.minHeight='529px';vizElement.style.maxHeight='929px';                    var scriptElement = document.createElement('script');                    scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';                    vizElement.parentNode.insertBefore(scriptElement, vizElement);                </script>";
            return tableau;
            break;
        case 'tableau_3':
            var tableau = "" +
                "<div class='tableauPlaceholder' id='viz1473785641879' style='position: relative'><noscript><a href='#'><img alt='Dashboard 1 ' src='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;Ma&#47;Map_286&#47;Dashboard1&#47;1_rss.png' style='border: none' /></a></noscript><object class='tableauViz'  style='display:none;'><param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' /> <param name='site_root' value='' /><param name='name' value='Map_286&#47;Dashboard1' /><param name='tabs' value='no' /><param name='toolbar' value='yes' /><param name='static_image' value='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;Ma&#47;Map_286&#47;Dashboard1&#47;1.png' /> <param name='animate_transition' value='yes' /><param name='display_static_image' value='yes' /><param name='display_spinner' value='yes' /><param name='display_overlay' value='yes' /><param name='display_count' value='yes' /></object></div>                <script type='text/javascript'>                    var divElement = document.getElementById('viz1473785641879');                    var vizElement = divElement.getElementsByTagName('object')[0];                    vizElement.style.minWidth='324px';vizElement.style.maxWidth='654px';vizElement.style.minHeight='529px';vizElement.style.maxHeight='929px';                    var scriptElement = document.createElement('script');                    scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';                    vizElement.parentNode.insertBefore(scriptElement, vizElement);                </script>";
            return tableau;
            break;
        default:
            return;
    }
});
var maine_congress_request = "http://www.maine.gov/portal/government/edemocracy/voter_lookup.php";

function get_maine_congress_form() {
    return '' +
        '<form name="ecf-email-form" method="post" onsubmit="maine_form_submit()">' +
        get_town_geocode_select() +
        get_address_form() +
        '<input type="submit" value="Find Congress People">' +
        '</form>';
}

function suggest(query){
    var dropdown = document.getElementById("town");
    var town = dropdown.value;

    /* Added an addition if statement so that predicitive search only works once a town has been selected.*/
    if( town.length > 0) {
        if((query.length == 0)) {
            $('#suggestions').fadeOut();
        } else {
            $.ajax({
                type:"POST",
                beforeSend: function (request)
                {
                    request.setRequestHeader("Referer", "http://www.maine.gov/portal/government/edemocracy/voter_lookup.php");
                },
                url: "http://www.maine.gov/portal/government/edemocracy/pred_search.php",
                header: "X-XSS-Protection: 1; mode=block",
                data: { 'queryString': query, 'town': town },
                success:function(data){
                    $('#suggestions').fadeIn();
                    $('#suggestionsList').html(data);
                }
            });
        }
    }
}

function maine_form_submit( ) {
    event.preventDefault();

    var town = document.getElementById("town").value;
    var street_nbr = document.getElementById("street_nbr").value;
    var street_name = document.getElementById("street_name").value;
    var submit = "Go";

    $.ajax({
        type:"POST",
        url: maine_congress_request,
        data: { 'town': town, 'street_nbr': street_nbr, 'street_name': street_name, 'Submit': submit },
        success:function(data){
            console.log("Got This:");
            console.log(data);
        }
    });
}

function fill(thisValue) {
    $('#street_name').val(thisValue);
    setTimeout("$('#suggestions').fadeOut();", 100);
}

function get_address_form() {
    return '' +
        '<label for="street_nbr">Street Number:</label>' +
        '<input name="street_nbr" id="street_nbr" type="text" size="5" value="" autocomplete="off">' +
        '' +
        '<label for="street_name">Street Name:</label>' +
        '<input name="street_name" id="street_name" type="text" size="35" value="" autocomplete="off">' +
        '<div class="suggestionsBox" id="suggestions" style="display: none">' +
            '<div class="suggestionList" id="suggestionsList"> &nbsp; </div>' +
        '</div>';
}

function get_town_geocode_select() {
    return '' +
        '<label for="town">Town or City: </label>' +
        '<select name="town" id="town" >' +
        '<option value="">Select one</option>' +
        '<option value="21010" >Abbot</option>' +
        '<option value="31010" >Acton</option>' +
        '<option value="29010" >Addison</option>' +
        '<option value="17802" >Albany Twp</option>' +
        '<option value="11010" >Albion</option>' +
        '<option value="29020" >Alexander</option>' +
        '<option value="31020" >Alfred</option>' +
        '<option value="03010" >Allagash</option>' +
        '<option value="15010" >Alna</option>' +
        '<option value="19010" >Alton</option>' +
        '<option value="09010" >Amherst</option>' +
        '<option value="03020" >Amity</option>' +
        '<option value="17010" >Andover</option>' +
        '<option value="25010" >Anson</option>' +
        '<option value="13010" >Appleton</option>' +
        '<option value="23010" >Arrowsic</option>' +
        '<option value="31030" >Arundel</option>' +
        '<option value="03030" >Ashland</option>' +
        '<option value="25020" >Athens</option>' +
        '<option value="21020" >Atkinson</option>' +
        '<option value="01010" >Auburn</option>' +
        '<option value="11020" >Augusta</option>' +
        '<option value="09020" >Aurora</option>' +
        '<option value="07010" >Avon</option>' +
        '<option value="29030" >Baileyville</option>' +
        '<option value="05010" >Baldwin</option>' +
        '<option value="03040" >Bancroft</option>' +
        '<option value="19020" >Bangor</option>' +
        '<option value="09030" >Bar Harbor</option>' +
        '<option value="29040" >Baring Plantation</option>' +
        '<option value="23020" >Bath</option>' +
        '<option value="29050" >Beals</option>' +
        '<option value="21037" >Beaver Cove</option>' +
        '<option value="29060" >Beddington</option>' +
        '<option value="27010" >Belfast</option>' +
        '<option value="11030" >Belgrade</option>' +
        '<option value="27020" >Belmont</option>' +
        '<option value="03050" >Benedicta Twp</option>' +
        '<option value="11040" >Benton</option>' +
        '<option value="31040" >Berwick</option>' +
        '<option value="17020" >Bethel</option>' +
        '<option value="31050" >Biddeford</option>' +
        '<option value="25030" >Bingham</option>' +
        '<option value="03060" >Blaine</option>' +
        '<option value="09040" >Blue Hill</option>' +
        '<option value="15020" >Boothbay</option>' +
        '<option value="15030" >Boothbay Harbor</option>' +
        '<option value="23030" >Bowdoin</option>' +
        '<option value="23040" >Bowdoinham</option>' +
        '<option value="21050" >Bowerbank</option>' +
        '<option value="19030" >Bradford</option>' +
        '<option value="19040" >Bradley</option>' +
        '<option value="15040" >Bremen</option>' +
        '<option value="19050" >Brewer</option>' +
        '<option value="03070" >Bridgewater</option>' +
        '<option value="05020" >Bridgton</option>' +
        '<option value="25040" >Brighton Plt</option>' +
        '<option value="15050" >Bristol</option>' +
        '<option value="09050" >Brooklin</option>' +
        '<option value="27030" >Brooks</option>' +
        '<option value="09060" >Brooksville</option>' +
        '<option value="29801" >Brookton Twp</option>' +
        '<option value="17030" >Brownfield</option>' +
        '<option value="21060" >Brownville</option>' +
        '<option value="05030" >Brunswick</option>' +
        '<option value="17040" >Buckfield</option>' +
        '<option value="09070" >Bucksport</option>' +
        '<option value="19060" >Burlington</option>' +
        '<option value="27040" >Burnham</option>' +
        '<option value="31060" >Buxton</option>' +
        '<option value="17050" >Byron</option>' +
        '<option value="29070" >Calais</option>' +
        '<option value="25050" >Cambridge</option>' +
        '<option value="13020" >Camden</option>' +
        '<option value="25060" >Canaan</option>' +
        '<option value="17060" >Canton</option>' +
        '<option value="05040" >Cape Elizabeth</option>' +
        '<option value="25070" >Caratunk</option>' +
        '<option value="03080" >Caribou</option>' +
        '<option value="19070" >Carmel</option>' +
        '<option value="07018" >Carrabassett Valley</option>' +
        '<option value="19080" >Carroll Plt</option>' +
        '<option value="07020" >Carthage</option>' +
        '<option value="03090" >Cary Plt</option>' +
        '<option value="05050" >Casco</option>' +
        '<option value="09080" >Castine</option>' +
        '<option value="03100" >Castle Hill</option>' +
        '<option value="03110" >Caswell</option>' +
        '<option value="29080" >Centerville</option>' +
        '<option value="03120" >Chapman</option>' +
        '<option value="19090" >Charleston</option>' +
        '<option value="29090" >Charlotte</option>' +
        '<option value="04017" >Chebeague Island</option>' +
        '<option value="11050" >Chelsea</option>' +
        '<option value="29100" >Cherryfield</option>' +
        '<option value="19100" >Chester</option>' +
        '<option value="07030" >Chesterville</option>' +
        '<option value="11060" >China</option>' +
        '<option value="19110" >Clifton</option>' +
        '<option value="11070" >Clinton</option>' +
        '<option value="29110" >Codyville Plt</option>' +
        '<option value="29120" >Columbia</option>' +
        '<option value="29130" >Columbia Falls</option>' +
        '<option value="03802" >Connor Twp</option>' +
        '<option value="29140" >Cooper</option>' +
        '<option value="07040" >Coplin Plt</option>' +
        '<option value="19120" >Corinna</option>' +
        '<option value="19130" >Corinth</option>' +
        '<option value="31070" >Cornish</option>' +
        '<option value="25080" >Cornville</option>' +
        '<option value="09090" >Cranberry Isles</option>' +
        '<option value="29150" >Crawford</option>' +
        '<option value="03130" >Crystal</option>' +
        '<option value="05060" >Cumberland</option>' +
        '<option value="13030" >Cushing</option>' +
        '<option value="29160" >Cutler</option>' +
        '<option value="03140" >Cyr Plt</option>' +
        '<option value="07050" >Dallas Plt</option>' +
        '<option value="15060" >Damariscotta</option>' +
        '<option value="29170" >Danforth</option>' +
        '<option value="31080" >Dayton</option>' +
        '<option value="29180" >Deblois</option>' +
        '<option value="09100" >Dedham</option>' +
        '<option value="09110" >Deer Isle</option>' +
        '<option value="17070" >Denmark</option>' +
        '<option value="25090" >Dennistown Plt</option>' +
        '<option value="29190" >Dennysville</option>' +
        '<option value="25100" >Detroit</option>' +
        '<option value="19140" >Dexter</option>' +
        '<option value="17080" >Dixfield</option>' +
        '<option value="19150" >Dixmont</option>' +
        '<option value="21070" >Dover-Foxcroft</option>' +
        '<option value="15070" >Dresden</option>' +
        '<option value="19160" >Drew Plt</option>' +
        '<option value="01020" >Durham</option>' +
        '<option value="03150" >Dyer Brook</option>' +
        '<option value="03170" >Eagle Lake</option>' +
        '<option value="29200" >East Machias</option>' +
        '<option value="19170" >East Millinocket</option>' +
        '<option value="09120" >Eastbrook</option>' +
        '<option value="03180" >Easton</option>' +
        '<option value="29210" >Eastport</option>' +
        '<option value="19180" >Eddington</option>' +
        '<option value="15080" >Edgecomb</option>' +
        '<option value="19190" >Edinburg</option>' +
        '<option value="29804" >Edmunds Twp</option>' +
        '<option value="31090" >Eliot</option>' +
        '<option value="09130" >Ellsworth</option>' +
        '<option value="25110" >Embden</option>' +
        '<option value="19200" >Enfield</option>' +
        '<option value="19210" >Etna</option>' +
        '<option value="07060" >Eustis</option>' +
        '<option value="19220" >Exeter</option>' +
        '<option value="25120" >Fairfield</option>' +
        '<option value="05070" >Falmouth</option>' +
        '<option value="11080" >Farmingdale</option>' +
        '<option value="07070" >Farmington</option>' +
        '<option value="11090" >Fayette</option>' +
        '<option value="03190" >Fort Fairfield</option>' +
        '<option value="03200" >Fort Kent</option>' +
        '<option value="27050" >Frankfort</option>' +
        '<option value="09140" >Franklin</option>' +
        '<option value="27060" >Freedom</option>' +
        '<option value="07808" >Freeman Twp</option>' +
        '<option value="05080" >Freeport</option>' +
        '<option value="09190" >Frenchboro</option>' +
        '<option value="03210" >Frenchville</option>' +
        '<option value="13040" >Friendship</option>' +
        '<option value="05085" >Frye Island</option>' +
        '<option value="17090" >Fryeburg</option>' +
        '<option value="11100" >Gardiner</option>' +
        '<option value="03220" >Garfield Plt</option>' +
        '<option value="19230" >Garland</option>' +
        '<option value="23050" >Georgetown</option>' +
        '<option value="17100" >Gilead</option>' +
        '<option value="19240" >Glenburn</option>' +
        '<option value="03230" >Glenwood Plt</option>' +
        '<option value="05090" >Gorham</option>' +
        '<option value="09150" >Gouldsboro</option>' +
        '<option value="03240" >Grand Isle</option>' +
        '<option value="29220" >Grand Lake Stream Plt</option>' +
        '<option value="05100" >Gray</option>' +
        '<option value="09160" >Great Pond</option>' +
        '<option value="19260" >Greenbush</option>' +
        '<option value="01030" >Greene</option>' +
        '<option value="21090" >Greenville</option>' +
        '<option value="17110" >Greenwood</option>' +
        '<option value="21100" >Guilford</option>' +
        '<option value="11110" >Hallowell</option>' +
        '<option value="03250" >Hamlin</option>' +
        '<option value="03260" >Hammond</option>' +
        '<option value="19280" >Hampden</option>' +
        '<option value="09170" >Hancock</option>' +
        '<option value="17120" >Hanover</option>' +
        '<option value="25130" >Harmony</option>' +
        '<option value="05110" >Harpswell</option>' +
        '<option value="29230" >Harrington</option>' +
        '<option value="05120" >Harrison</option>' +
        '<option value="17130" >Hartford</option>' +
        '<option value="25140" >Hartland</option>' +
        '<option value="03270" >Haynesville</option>' +
        '<option value="17140" >Hebron</option>' +
        '<option value="19290" >Hermon</option>' +
        '<option value="03280" >Hersey</option>' +
        '<option value="25150" >Highland Plt</option>' +
        '<option value="17150" >Hiram</option>' +
        '<option value="03290" >Hodgdon</option>' +
        '<option value="19300" >Holden</option>' +
        '<option value="31100" >Hollis</option>' +
        '<option value="13050" >Hope</option>' +
        '<option value="03300" >Houlton</option>' +
        '<option value="19310" >Howland</option>' +
        '<option value="19320" >Hudson</option>' +
        '<option value="29832" >Indian Twp Res</option>' +
        '<option value="07080" >Industry</option>' +
        '<option value="03310" >Island Falls</option>' +
        '<option value="13060" >Isle au Haut</option>' +
        '<option value="27070" >Islesboro</option>' +
        '<option value="25160" >Jackman</option>' +
        '<option value="27080" >Jackson</option>' +
        '<option value="07090" >Jay</option>' +
        '<option value="15090" >Jefferson</option>' +
        '<option value="29240" >Jonesboro</option>' +
        '<option value="29250" >Jonesport</option>' +
        '<option value="19330" >Kenduskeag</option>' +
        '<option value="31110" >Kennebunk</option>' +
        '<option value="31120" >Kennebunkport</option>' +
        '<option value="07100" >Kingfield</option>' +
        '<option value="19808" >Kingman Twp</option>' +
        '<option value="21110" >Kingsbury Plt</option>' +
        '<option value="31130" >Kittery</option>' +
        '<option value="27090" >Knox</option>' +
        '<option value="19340" >Lagrange</option>' +
        '<option value="21120" >Lake View Plt</option>' +
        '<option value="19350" >Lakeville</option>' +
        '<option value="09180" >Lamoine</option>' +
        '<option value="31140" >Lebanon</option>' +
        '<option value="19360" >Lee</option>' +
        '<option value="01040" >Leeds</option>' +
        '<option value="19370" >Levant</option>' +
        '<option value="01050" >Lewiston</option>' +
        '<option value="27100" >Liberty</option>' +
        '<option value="31150" >Limerick</option>' +
        '<option value="03320" >Limestone</option>' +
        '<option value="31160" >Limington</option>' +
        '<option value="19380" >Lincoln</option>' +
        '<option value="17160" >Lincoln Plt</option>' +
        '<option value="27110" >Lincolnville</option>' +
        '<option value="03330" >Linneus</option>' +
        '<option value="01060" >Lisbon</option>' +
        '<option value="11120" >Litchfield</option>' +
        '<option value="03340" >Littleton</option>' +
        '<option value="01070" >Livermore</option>' +
        '<option value="01080" >Livermore Falls</option>' +
        '<option value="05125" >Long Island</option>' +
        '<option value="17170" >Lovell</option>' +
        '<option value="19390" >Lowell</option>' +
        '<option value="29260" >Lubec</option>' +
        '<option value="03350" >Ludlow</option>' +
        '<option value="31170" >Lyman</option>' +
        '<option value="29270" >Machias</option>' +
        '<option value="29280" >Machiasport</option>' +
        '<option value="03360" >Macwahoc Plt</option>' +
        '<option value="03370" >Madawaska</option>' +
        '<option value="25170" >Madison</option>' +
        '<option value="07110" >Madrid Twp</option>' +
        '<option value="17180" >Magalloway Plt</option>' +
        '<option value="11130" >Manchester</option>' +
        '<option value="03380" >Mapleton</option>' +
        '<option value="09200" >Mariaville</option>' +
        '<option value="03390" >Mars Hill</option>' +
        '<option value="29290" >Marshfield</option>' +
        '<option value="03400" >Masardis</option>' +
        '<option value="13070" >Matinicus Isle Plt</option>' +
        '<option value="19400" >Mattawamkeag</option>' +
        '<option value="19410" >Maxfield</option>' +
        '<option value="01090" >Mechanic Falls</option>' +
        '<option value="29300" >Meddybemps</option>' +
        '<option value="21130" >Medford</option>' +
        '<option value="19420" >Medway</option>' +
        '<option value="25180" >Mercer</option>' +
        '<option value="03410" >Merrill</option>' +
        '<option value="17190" >Mexico</option>' +
        '<option value="29310" >Milbridge</option>' +
        '<option value="19430" >Milford</option>' +
        '<option value="19440" >Millinocket</option>' +
        '<option value="21140" >Milo</option>' +
        '<option value="17812" >Milton Twp</option>' +
        '<option value="01100" >Minot</option>' +
        '<option value="15100" >Monhegan Island Plt</option>' +
        '<option value="11140" >Monmouth</option>' +
        '<option value="27120" >Monroe</option>' +
        '<option value="21150" >Monson</option>' +
        '<option value="03420" >Monticello</option>' +
        '<option value="27130" >Montville</option>' +
        '<option value="25190" >Moose River</option>' +
        '<option value="03430" >Moro Plt</option>' +
        '<option value="27140" >Morrill</option>' +
        '<option value="25200" >Moscow</option>' +
        '<option value="19450" >Mount Chase</option>' +
        '<option value="09210" >Mount Desert</option>' +
        '<option value="11150" >Mount Vernon</option>' +
        '<option value="05130" >Naples</option>' +
        '<option value="03440" >Nashville Plt</option>' +
        '<option value="03450" >New Canada</option>' +
        '<option value="05140" >New Gloucester</option>' +
        '<option value="03460" >New Limerick</option>' +
        '<option value="25210" >New Portland</option>' +
        '<option value="07120" >New Sharon</option>' +
        '<option value="03470" >New Sweden</option>' +
        '<option value="07130" >New Vineyard</option>' +
        '<option value="19460" >Newburgh</option>' +
        '<option value="15110" >Newcastle</option>' +
        '<option value="31180" >Newfield</option>' +
        '<option value="19470" >Newport</option>' +
        '<option value="17200" >Newry</option>' +
        '<option value="29330" >No 14 Twp</option>' +
        '<option value="29340" >No 21 Twp</option>' +
        '<option value="15120" >Nobleboro</option>' +
        '<option value="25220" >Norridgewock</option>' +
        '<option value="31190" >North Berwick</option>' +
        '<option value="13080" >North Haven</option>' +
        '<option value="05150" >North Yarmouth</option>' +
        '<option value="29320" >Northfield</option>' +
        '<option value="27150" >Northport</option>' +
        '<option value="17210" >Norway</option>' +
        '<option value="03480" >Oakfield</option>' +
        '<option value="11160" >Oakland</option>' +
        '<option value="31197" >Ogunquit</option>' +
        '<option value="31200" >Old Orchard Beach</option>' +
        '<option value="19480" >Old Town</option>' +
        '<option value="03490" >Orient</option>' +
        '<option value="09220" >Orland</option>' +
        '<option value="21821" >Orneville Twp</option>' +
        '<option value="19490" >Orono</option>' +
        '<option value="19500" >Orrington</option>' +
        '<option value="09230" >Osborn</option>' +
        '<option value="09240" >Otis</option>' +
        '<option value="17217" >Otisfield</option>' +
        '<option value="13090" >Owls Head</option>' +
        '<option value="03500" >Oxbow Plt</option>' +
        '<option value="17220" >Oxford</option>' +
        '<option value="27160" >Palermo</option>' +
        '<option value="25230" >Palmyra</option>' +
        '<option value="17230" >Paris</option>' +
        '<option value="21160" >Parkman</option>' +
        '<option value="31210" >Parsonsfield</option>' +
        '<option value="19510" >Passadumkeag</option>' +
        '<option value="19520" >Patten</option>' +
        '<option value="29350" >Pembroke</option>' +
        '<option value="09250" >Penobscot</option>' +
        '<option value="99991" >Penobscot Nation Voting District</option>' +
        '<option value="03510" >Perham</option>' +
        '<option value="07818" >Perkins Twp</option>' +
        '<option value="29360" >Perry</option>' +
        '<option value="17240" >Peru</option>' +
        '<option value="07140" >Phillips</option>' +
        '<option value="23060" >Phippsburg</option>' +
        '<option value="25240" >Pittsfield</option>' +
        '<option value="11170" >Pittston</option>' +
        '<option value="29480" >Pleasant Point Ind Res</option>' +
        '<option value="25250" >Pleasant Ridge Plt</option>' +
        '<option value="19530" >Plymouth</option>' +
        '<option value="01110" >Poland</option>' +
        '<option value="03520" >Portage Lake</option>' +
        '<option value="17250" >Porter</option>' +
        '<option value="05170" >Portland</option>' +
        '<option value="05180" >Pownal</option>' +
        '<option value="19540" >Prentiss Twp T7 R3 NBPP</option>' +
        '<option value="03530" >Presque Isle</option>' +
        '<option value="29370" >Princeton</option>' +
        '<option value="27170" >Prospect</option>' +
        '<option value="11180" >Randolph</option>' +
        '<option value="07150" >Rangeley</option>' +
        '<option value="07160" >Rangeley Plt</option>' +
        '<option value="05190" >Raymond</option>' +
        '<option value="11190" >Readfield</option>' +
        '<option value="03540" >Reed Plt</option>' +
        '<option value="23070" >Richmond</option>' +
        '<option value="25260" >Ripley</option>' +
        '<option value="29380" >Robbinston</option>' +
        '<option value="13100" >Rockland</option>' +
        '<option value="13110" >Rockport</option>' +
        '<option value="25844" >Rockwood Strip T1 R1 NBKP</option>' +
        '<option value="11200" >Rome</option>' +
        '<option value="29390" >Roque Bluffs</option>' +
        '<option value="17260" >Roxbury</option>' +
        '<option value="17270" >Rumford</option>' +
        '<option value="01140" >Sabattus</option>' +
        '<option value="31220" >Saco</option>' +
        '<option value="03550" >Saint Agatha</option>' +
        '<option value="25270" >Saint Albans</option>' +
        '<option value="03560" >Saint Francis</option>' +
        '<option value="13120" >Saint George</option>' +
        '<option value="03570" >Saint John Plt</option>' +
        '<option value="07170" >Sandy River Plt</option>' +
        '<option value="31230" >Sanford</option>' +
        '<option value="21170" >Sangerville</option>' +
        '<option value="05200" >Scarborough</option>' +
        '<option value="27180" >Searsmont</option>' +
        '<option value="27190" >Searsport</option>' +
        '<option value="05210" >Sebago</option>' +
        '<option value="21180" >Sebec</option>' +
        '<option value="19550" >Seboeis Plt</option>' +
        '<option value="09260" >Sedgwick</option>' +
        '<option value="31240" >Shapleigh</option>' +
        '<option value="03580" >Sherman</option>' +
        '<option value="21190" >Shirley</option>' +
        '<option value="11210" >Sidney</option>' +
        '<option value="25280" >Skowhegan</option>' +
        '<option value="25290" >Smithfield</option>' +
        '<option value="03590" >Smyrna</option>' +
        '<option value="25300" >Solon</option>' +
        '<option value="15130" >Somerville</option>' +
        '<option value="09270" >Sorrento</option>' +
        '<option value="31250" >South Berwick</option>' +
        '<option value="15140" >South Bristol</option>' +
        '<option value="05220" >South Portland</option>' +
        '<option value="13130" >South Thomaston</option>' +
        '<option value="15150" >Southport</option>' +
        '<option value="09280" >Southwest Harbor</option>' +
        '<option value="19560" >Springfield</option>' +
        '<option value="19570" >Stacyville</option>' +
        '<option value="05230" >Standish</option>' +
        '<option value="25310" >Starks</option>' +
        '<option value="19580" >Stetson</option>' +
        '<option value="29400" >Steuben</option>' +
        '<option value="03600" >Stockholm</option>' +
        '<option value="27200" >Stockton Springs</option>' +
        '<option value="17280" >Stoneham</option>' +
        '<option value="09290" >Stonington</option>' +
        '<option value="17290" >Stow</option>' +
        '<option value="07180" >Strong</option>' +
        '<option value="09300" >Sullivan</option>' +
        '<option value="17300" >Sumner</option>' +
        '<option value="09310" >Surry</option>' +
        '<option value="09320" >Swans Island</option>' +
        '<option value="27210" >Swanville</option>' +
        '<option value="17310" >Sweden</option>' +
        '<option value="21833" >T1 R9 WELS</option>' +
        '<option value="03898" >T17 R4 WELS</option>' +
        '<option value="03899" >T17 R5 WELS</option>' +
        '<option value="29410" >Talmadge</option>' +
        '<option value="07190" >Temple</option>' +
        '<option value="25320" >The Forks Plt</option>' +
        '<option value="13140" >Thomaston</option>' +
        '<option value="27220" >Thorndike</option>' +
        '<option value="29420" >Topsfield</option>' +
        '<option value="23080" >Topsham</option>' +
        '<option value="09330" >Tremont</option>' +
        '<option value="09340" >Trenton</option>' +
        '<option value="29811" >Trescott Twp</option>' +
        '<option value="27230" >Troy</option>' +
        '<option value="01120" >Turner</option>' +
        '<option value="13150" >Union</option>' +
        '<option value="27240" >Unity</option>' +
        '<option value="17320" >Upton</option>' +
        '<option value="03610" >Van Buren</option>' +
        '<option value="29430" >Vanceboro</option>' +
        '<option value="11220" >Vassalboro</option>' +
        '<option value="19590" >Veazie</option>' +
        '<option value="09350" >Verona</option>' +
        '<option value="11230" >Vienna</option>' +
        '<option value="13160" >Vinalhaven</option>' +
        '<option value="03620" >Wade</option>' +
        '<option value="29440" >Waite</option>' +
        '<option value="27250" >Waldo</option>' +
        '<option value="15160" >Waldoboro</option>' +
        '<option value="01130" >Wales</option>' +
        '<option value="03630" >Wallagrass</option>' +
        '<option value="09360" >Waltham</option>' +
        '<option value="13170" >Warren</option>' +
        '<option value="03640" >Washburn</option>' +
        '<option value="13180" >Washington</option>' +
        '<option value="31260" >Waterboro</option>' +
        '<option value="17330" >Waterford</option>' +
        '<option value="11240" >Waterville</option>' +
        '<option value="11250" >Wayne</option>' +
        '<option value="19600" >Webster Plt</option>' +
        '<option value="07200" >Weld</option>' +
        '<option value="21200" >Wellington</option>' +
        '<option value="31270" >Wells</option>' +
        '<option value="29450" >Wesley</option>' +
        '<option value="23090" >West Bath</option>' +
        '<option value="25330" >West Forks Plt</option>' +
        '<option value="11260" >West Gardiner</option>' +
        '<option value="17340" >West Paris</option>' +
        '<option value="05240" >Westbrook</option>' +
        '<option value="03650" >Westfield</option>' +
        '<option value="03660" >Westmanland</option>' +
        '<option value="03670" >Weston</option>' +
        '<option value="15170" >Westport</option>' +
        '<option value="99992" >Westport Island</option>' +
        '<option value="15180" >Whitefield</option>' +
        '<option value="29460" >Whiting</option>' +
        '<option value="29470" >Whitneyville</option>' +
        '<option value="21210" >Willimantic</option>' +
        '<option value="07210" >Wilton</option>' +
        '<option value="05250" >Windham</option>' +
        '<option value="11270" >Windsor</option>' +
        '<option value="19610" >Winn</option>' +
        '<option value="11280" >Winslow</option>' +
        '<option value="09370" >Winter Harbor</option>' +
        '<option value="27260" >Winterport</option>' +
        '<option value="03680" >Winterville Plt</option>' +
        '<option value="11290" >Winthrop</option>' +
        '<option value="15190" >Wiscasset</option>' +
        '<option value="03690" >Woodland</option>' +
        '<option value="17350" >Woodstock</option>' +
        '<option value="19620" >Woodville</option>' +
        '<option value="23100" >Woolwich</option>' +
        '<option value="05260" >Yarmouth</option>' +
        '<option value="31280" >York</option>' +
        '</select>';
} 
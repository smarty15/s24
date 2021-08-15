var domList = ["sports24.stream","sports24.icu","vip.sports24.stream","vip.sports24.club"];

var url = new URL(window.location.href);
var id = url.searchParams.get("id");
//var hostname = url.hostname;

var currentUrl = document.referrer;
//var hostname = currentUrl.hostname;
var dom1 = "sports24.stream";
var dom2 = "vip.sports24.club";
      

      function extractHostname(url) {
      var hostname;
      if (url.indexOf("://") > -1) {
        hostname = url.split("/")[2];
      } else {
        hostname = url.split("/")[0];
      }
      hostname = hostname.split(":")[0];
      hostname = hostname.split("?")[0];
      return hostname;
    }
      
      var hostname = extractHostname(document.referrer);
      
if (domList.indexOf(hostname) ==-1 || !document.referrer || window==window.top) {

} else

//fetch("https://api-leap.nbcsports.com/feeds/assets/"+id+"?application=NBCSports&platform=desktop&format=nbc-player&env=staging", {
fetch("https://stream.nbcsports.com/data/live_sources_"+id+".json", {
    "credentials": "omit",
    "headers": {
        "accept": "application/json, text/plain, */*",
        "accept-language": "en-GB,en-US;q=0.9,en;q=0.8"
    },
    "referrerPolicy": "no-referrer-when-downgrade",
    "body": null,
    "method": "GET",
    "mode": "cors"
}).then((response) => {
    return response.json();
}).then((myJsonb2) => {
    var sourceUrl = myJsonb2["videoSources"]["0"]["cdnSources"]["primary"][0]["url"];
    var ctrUrl = myJsonb2["videoSources"]["0"]["cdnSources"]["primary"][0]["ctrUrl"];
    //var isTokenized = myJsonb2["auth"]["cdnToken"];
		

		
   fetch("https://sp.auth.adobe.com/adobe-services/authorize?_=1587655766057", {
       "credentials": "omit",
       "headers": {
           "accept": "*/*",
           "accept-language": "en-GB,en-US;q=0.9,en;q=0.8",
           "ap_11": "Win32",
           "ap_19": "HiLwsaepwpk=",
           "ap_21": "b1de33bc01f143848913fc3fa8e6b245",
           "ap_23": "pQiMBsX4yJ/nzqnsyglHJ2LxSEOyGS3i5n2qPofy3IXXQ2C3A5L8ImTOsXWsLR/ngAm2Q+F2V1pJzkWpil5thidp/BeStmfN70zP6ak9UQaImZYFpDn6hJbSzoqnhd/jLyn0P7PkBPz8vbKhEqOmvFhVlu4gsse4+WVdCe3oQiBr8mfOOZ/CoHSWu0cL0Ol0P6e2CaKn7LPZDJtGOfEebEak+AURADoU0LMzABc9rRKig7AF2OcfKTAYvYMNluOhJJBVbK1jvSxXAhrOp9pRnegYtMd7VmXnI9OGvaC0whs=",
           "ap_42": "Google Inc.",
           "ap_z": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.132 Safari/537.36",
           "authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.eyJzdWIiOiI0ZmZhZTQyNS1hMjYzLTQ3OTAtODYxYS1jMzQzMTNkZWQ1M2UiLCJuYmYiOjE2MjgyNTc0NTgsImlzcyI6ImF1dGguYWRvYmUuY29tIiwic2NvcGVzIjoicGxhdGZvcm06c3NvLGNvbmZpZzpjbGllbnQsZGVjaXNpb25zOmNsaWVudCxwcm9maWxlOmNsaWVudCx0b2tlbnM6Y2xpZW50IiwiZXhwIjoxNjI4MzQzODU4LCJpYXQiOjE2MjgyNTc0NTh9.DX4kXWnpMS7C-i8r3hYdlD2ieB55rd7FCY1fcYisrPz95F4gkdOwCyNccYACJhEt01b35xN36AY0tuSmic6jKW41sVwOW3aKPQ7xICBCMO_j_uZIARMOBoC6uOMzPvuoZAfaKjjCk6cOuf5_G7FHasa67Cw10_0-TybBNvdZA4WGnAon4erLyiicy-70iT2JxoUC0--ARh6B4c1qj6CKG41gel_5EyxE7QurgL1kf_hq4crCAlqLFh1d3pPCpvyJtwL4ABlxnyzaSG2ndP45ya-t8QKCVsRc9CPmMf5efvUVsEOauxoam80I6aEEzFOFXj6CctHm6FUMyCbsIlrh7w",
           "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
           "pass_sfp": "4a8381cb5a573b2ecdff3e62a6da9e01--46c6ffd4ad14819bad35f2e7564fe8485c0dbddfb8fa2fbc3930a4157db03122--b1de33bc01f143848913fc3fa8e6b245--KFDoWaRwgFvnAgTc%2Flw0KnCFYGs%3D",
           "sec-fetch-dest": "empty",
           "sec-fetch-mode": "cors",
           "sec-fetch-site": "same-origin"
       },
       "referrer": "https://sp.auth.adobe.com/entitlement/v4/AccessEnablerProxy.html?7917278f24433f34e862",
       "referrerPolicy": "no-referrer-when-downgrade",
       "body": "resource_id=%3Crss+version%3D%222.0%22+xmlns%3Amedia%3D%22http%3A%2F%2Fsearch.yahoo.com%2Fmrss%2F%22%3E%3Cchannel%3E%3Ctitle%3ENBCOlympics%3C%2Ftitle%3E%3Citem%3E%3Ctitle%3EOlympics+on+NBCSN%3C%2Ftitle%3E%3Cguid%3E2024961%3C%2Fguid%3E%3Cmedia%3Arating+scheme%3D%22urn%3Av-chip%22%3ENO+VALUE%3C%2Fmedia%3Arating%3E%3C%2Fitem%3E%3C%2Fchannel%3E%3C%2Frss%3E&requestor_id=NBCOlympics&authentication_token=%3CsignatureInfo%3EL%2FanaUn0sOpRYJ6vlnRx44JIPr%2Fr6ErWf6DbcckVZwOZbYdhzpAAUEmyapDaQS%2FGu4ownSfl8n4iUKSWZfwkxuZzajoLngPHFMUbsYvMLI%2FG2eOt4GvkScUV5TB7hvXc%2FchpZCuzlElXlPa70vExJrXBHumHOd0R5xsThF%2BW9oA%3D%3CsignatureInfo%3E%3CsimpleAuthenticationToken%3E%3CsimpleTokenAuthenticationGuid%3Ed%2Ba4CMnGH8AAMs5ynaSujg%3D%3D%3C%2FsimpleTokenAuthenticationGuid%3E%3CsimpleSamlSessionIndex%3EpQiMBsX4yJ%2FnzqnsyglHJ2LxSEOyGS3i5n2qPofy3IXXQ2C3A5L8ImTOsXWsLR%2FngAm2Q%2BF2V1pJzkWpil5thidp%2FBeStmfN70zP6ak9UQaImZYFpDn6hJbSzoqnhd%2FjLyn0P7PkBPz8vbKhEqOmvFhVlu4gsse4%2BWVdCe3oQiBr8mfOOZ%2FCoHSWu0cL0Ol0P6e2CaKn7LPZDJtGOfEebEak%2BAURADoU0LMzABc9rRKig7AF2OcfKTAYvYMNluOhJJBVbK1jvSxXAhrOp9pRnegYtMd7VmXnI9OGvaC0whs%3D%3C%2FsimpleSamlSessionIndex%3E%3CsimpleTokenRequestorID%3ENBCOlympics%3C%2FsimpleTokenRequestorID%3E%3CsimpleTokenDomainName%3Eadobe.com%3C%2FsimpleTokenDomainName%3E%3CsimpleTokenExpires%3E2022%2F08%2F06+06%3A44%3A34+GMT+-0700%3C%2FsimpleTokenExpires%3E%3CsimpleTokenMsoID%3EVerizon%3C%2FsimpleTokenMsoID%3E%3CsimpleTokenDeviceID%3E%3CsimpleTokenFingerprint%3Eb1de33bc01f143848913fc3fa8e6b245%3C%2FsimpleTokenFingerprint%3E%3CsimpleTokenDeviceIDFragments%3E%3CsimpleTokenBrowserInfo%3E4cc3893f360ab3cc7411f9713a2f1240acac137b%3C%2FsimpleTokenBrowserInfo%3E%3CsimpleTokenPlatformInfo%3E7b653c1a1342f29b6e1ca16ef44b1d14c98a11e3%3C%2FsimpleTokenPlatformInfo%3E%3CsimpleTokenVendorInfo%3Ecc8e98f676a9099f4f8840652b2e587444f3ba68%3C%2FsimpleTokenVendorInfo%3E%3CsimpleTokenIpAddr%3E20320fce7735606763c8c8287299a80105e57dea%3C%2FsimpleTokenIpAddr%3E%3C%2FsimpleTokenDeviceIDFragments%3E%3C%2FsimpleTokenDeviceID%3E%3CsimpleSamlNameID%3EHiLwsaepwpk%3D%3C%2FsimpleSamlNameID%3E%3Cttl%3E31536000%3C%2Fttl%3E%3C%2FsimpleAuthenticationToken%3E&mso_id=Verizon&generic_data=&userMeta=1",
       "method": "POST",
       "mode": "cors"
   }).then(response => response.text()).then(bodyText => {
       var jsonAsString = (new DOMParser).parseFromString(bodyText, "text/xml");
       jsonAsString = $.xml2json(jsonAsString);


       fetch("https://sp.auth.adobe.com/adobe-services/shortAuthorize?_=1587655766697", {
           "credentials": "omit",
           "headers": {
               "accept": "*/*",
           "accept-language": "en-GB,en-US;q=0.9,en;q=0.8",
           "ap_11": "Win32",
           "ap_19": "HiLwsaepwpk=",
           "ap_21": "b1de33bc01f143848913fc3fa8e6b245",
           "ap_23": "pQiMBsX4yJ/nzqnsyglHJ2LxSEOyGS3i5n2qPofy3IXXQ2C3A5L8ImTOsXWsLR/ngAm2Q+F2V1pJzkWpil5thidp/BeStmfN70zP6ak9UQaImZYFpDn6hJbSzoqnhd/jLyn0P7PkBPz8vbKhEqOmvFhVlu4gsse4+WVdCe3oQiBr8mfOOZ/CoHSWu0cL0Ol0P6e2CaKn7LPZDJtGOfEebEak+AURADoU0LMzABc9rRKig7AF2OcfKTAYvYMNluOhJJBVbK1jvSxXAhrOp9pRnegYtMd7VmXnI9OGvaC0whs=",
           "ap_42": "Google Inc.",
           "ap_z": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.132 Safari/537.36",
           "authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.eyJzdWIiOiI0ZmZhZTQyNS1hMjYzLTQ3OTAtODYxYS1jMzQzMTNkZWQ1M2UiLCJuYmYiOjE2MjgyNTc0NTgsImlzcyI6ImF1dGguYWRvYmUuY29tIiwic2NvcGVzIjoicGxhdGZvcm06c3NvLGNvbmZpZzpjbGllbnQsZGVjaXNpb25zOmNsaWVudCxwcm9maWxlOmNsaWVudCx0b2tlbnM6Y2xpZW50IiwiZXhwIjoxNjI4MzQzODU4LCJpYXQiOjE2MjgyNTc0NTh9.DX4kXWnpMS7C-i8r3hYdlD2ieB55rd7FCY1fcYisrPz95F4gkdOwCyNccYACJhEt01b35xN36AY0tuSmic6jKW41sVwOW3aKPQ7xICBCMO_j_uZIARMOBoC6uOMzPvuoZAfaKjjCk6cOuf5_G7FHasa67Cw10_0-TybBNvdZA4WGnAon4erLyiicy-70iT2JxoUC0--ARh6B4c1qj6CKG41gel_5EyxE7QurgL1kf_hq4crCAlqLFh1d3pPCpvyJtwL4ABlxnyzaSG2ndP45ya-t8QKCVsRc9CPmMf5efvUVsEOauxoam80I6aEEzFOFXj6CctHm6FUMyCbsIlrh7w",
           "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
           "pass_sfp": "4a8381cb5a573b2ecdff3e62a6da9e01--46c6ffd4ad14819bad35f2e7564fe8485c0dbddfb8fa2fbc3930a4157db03122--b1de33bc01f143848913fc3fa8e6b245--KFDoWaRwgFvnAgTc%2Flw0KnCFYGs%3D",
           "sec-fetch-dest": "empty",
           "sec-fetch-mode": "cors",
           "sec-fetch-site": "same-origin"
           },
           "referrer": "https://sp.auth.adobe.com/entitlement/js/AccessEnablerProxy.html?68e0652ac001f61b93c3",
           "referrerPolicy": "no-referrer-when-downgrade",
           "body": "authz_token=" + encodeURIComponent((jsonAsString["authzToken"])) + "&requestor_id=NBCOlympics&generic_data=%7B%7D&session_guid=d%2Ba4CMnGH8AAMs5ynaSujg%3D%3D&hashed_guid=false",
           "method": "POST",
           "mode": "cors"
       }).then(response => response.text()).then(bodyTexts => {

if (sourceUrl !== '') {
sourceURL = sourceUrl;
} else {
  sourceURL = ctrUrl;
}

           fetch("https://tokens.playmakerservices.com/", {
                "credentials": "omit",
                "headers": {
                    "accept": "application/json, text/plain, */*",
                    "accept-language": "en-GB,en-US;q=0.9,en;q=0.8",
                    "content-type": "application/json",
                    "sec-fetch-dest": "empty",
                    "sec-fetch-mode": "cors",
                    "sec-fetch-site": "cross-site"
                },
                "referrer": "http://stream.nbcsports.com/nbcsn/",
                "referrerPolicy": "no-referrer-when-downgrade",
                "body": "{\n  \"requestorId\": \"golf\",\n  \"pid\": \"" + id + "\",\n  \"application\": \"NBCSports\",\n  \"version\": \"v1\",\n  \"platform\": \"desktop\",\n  \"token\": \"" + btoa(bodyTexts) + "\",\n  \"resourceId\": \"PHJzcyB2ZXJzaW9uPSIyLjAiIHhtbG5zOm1lZGlhPSJodHRwOi8vc2VhcmNoLnlhaG9vLmNvbS9tcnNzLyI+PGNoYW5uZWw+PHRpdGxlPkNTTkNoaWNhZ288L3RpdGxlPjxpdGVtPjx0aXRsZT5EdWNrcyB2cyBCbGFja2hhd2tzIE5CQ1MgQ0hJPC90aXRsZT48Z3VpZD4yMDAxODA5PC9ndWlkPjwvaXRlbT48L2NoYW5uZWw+PC9yc3M+\",\n  \"inPath\": \"false\",\n  \"authenticationType\": \"adobe-pass\",\n  \"cdn\": \"akamai\",\n  \"url\": \"" + sourceURL + "\"\n}",
                "method": "POST",
                "mode": "cors"
            }).then((response) => {
                return response.json();
            }).then((myJson5) => {


  
src = myJson5['akamai']['0']['tokenizedUrl'];

//if (isTokenized == true) {
//  src = myJson5['akamai']['0']['tokenizedUrl'];
//} else {
//  src = sourceUrl;
//}



const config = {
          key: "b03269cd-793c-48c6-83b4-2f080b6737db",


network: {
preprocessHttpRequest: function(type, request) { 


if (!request.url.includes("https")){
request.url = request.url.replace("http:","https:");
 
}

return Promise.resolve(request);
}
}
        };



        const container = document.getElementById("my-player");
        let player = new bitmovin.player.Player(container, config);


      let source = {
					hls: src,

        };

        player.load(source).then(
          function () {
            console.log("Successfully created Bitmovin Player instance");
            //player.play();
          },
          function (reason) {
            console.log("Error while creating Bitmovin Player instance");
          }
        );
   		
           });
       });

   });
});

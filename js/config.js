var config =
{    
    /*
        Do we want to show the image?
        Note that imageSize still affects the size of the image and where the progressbars are located.
    */
    enableImage: true,
 
    /*
        Relative path the the logo we want to display.
    */
    image: "img/logo.png",

    /*
        Cursor image
    */
    cursorImage: "img/cursor.png",
 
    /*
        How big should the logo be?
        The values are: [width, height].
        Recommended to use square images less than 1024px.
    */
    imageSize: [128, 128],
 
    /*
        Define the progressbar type
            0 = Single progressbar
            1 = Multiple progressbars
            2 = Collapsed progressbars
     */
    progressBarType: 0,
 
    /*
        Here you can disable some of progressbars.
        Only applys if `singleProgressbar` is false.
    */
    progressBars:
    {
        "INIT_CORE": {
            enabled: false, //NOTE: Disabled because INIT_CORE seems to not get called properly. (race condition).
        },
 
        "INIT_BEFORE_MAP_LOADED": {
            enabled: true,
        },
 
        "MAP": {
            enabled: true,
        },
 
        "INIT_AFTER_MAP_LOADED": {
            enabled: true,
        },
 
        "INIT_SESSION": {
            enabled: true,
        }
    },
 
    /*
        Loading messages will be randomly picked from the array.
        The message is located on the left side above the progressbar.
        The text will slowly fade in and out, each time with another message.
        You can use UTF-8 emoticons inside loading messages!
    */
    loadingMessages:
    [
        ""
    ],
 
    /*
        Rotate the loading message every 5000 milliseconds (default value).
    */
    loadingMessageSpeed: 3050,
 
    /*
        Array of music id's to play in the loadscreen.
        Enter your youtube video id's here. In order to obtain the video ID
        Take whats after the watch?v= on a youtube link.
        https://www.youtube.com/watch?v=<videoid>
        Do not include the playlist id or anything, it should be a 11 digit code.
       
        Do not use videos that:
            - Do not allow embedding.
            - Copyrighted music (youtube actively blocks this).
    */
    music:
	/*	
	"xh40QxwZz7Q",


    [
		"B2k8cwnhCbs"
    ],
	*/

    [
		"bf8UXefaZcc"
    ],

 
 
    /*
        Set to false if you do not want any music.
    */
    enableMusic: true,
 
    /*
        Default volume for the player. Please keep this under 50%, to not blowout someones eardrums x)
     */
    musicVolume: 3,
 
    /*
        Should the background change images?
        True: it will not change backgrounds.
        False: it will change backgrounds.
    */
    staticBackground: false,
   
    /*
        Array of images you'd like to display as the background.
        Provide a path to a local image, using images via url is not recommended.
    */
    background:
    [
		/*
        "https://cdn.discordapp.com/attachments/750704279794221077/750704404189151312/intro_serv_1.gif",
        "https://cdn.discordapp.com/attachments/750704279794221077/750704471486758982/Intro_serv_2.gif",
        "https://cdn.discordapp.com/attachments/750704279794221077/750704564675805314/Intro_serv_3.gif",
        "https://cdn.discordapp.com/attachments/750704279794221077/750704579964043355/Intro_serv_4.gif",
        "https://cdn.discordapp.com/attachments/750704279794221077/750704604857106604/Intro_serv_5.gif",
        "https://cdn.discordapp.com/attachments/750704279794221077/750704633894273124/Intro_serv_6.gif",
        "https://cdn.discordapp.com/attachments/750704279794221077/750704647853047878/Intro_serv_7.gif",
		*/
       "https://cdn.discordapp.com/attachments/750704279794221077/772401013935177758/intro_serv_1.gif",
       "https://cdn.discordapp.com/attachments/750704279794221077/772401039004401694/intro_serv_2.gif",
       "https://cdn.discordapp.com/attachments/750704279794221077/772401062216204308/intro_serv_3.gif",
       "https://cdn.discordapp.com/attachments/750704279794221077/772401077798305833/intro_serv_4.gif",
       "https://cdn.discordapp.com/attachments/750704279794221077/772401093006065704/intro_serv_5.gif",
       "https://cdn.discordapp.com/attachments/750704279794221077/772401110484516874/intro_serv_6.gif",
       "https://cdn.discordapp.com/attachments/750704279794221077/772401130411524096/intro_serv_7.gif",
    ],
 
    /*
        Time in milliseconds on how fast the background
        should swap images.
     */
    backgroundSpeed: 4000,

    /*
        Which style of animation should the background transition be?
        zoom = background zooms in and out.
        slide = transtion backgrounds from sliding right and back again.
        fade = fade the background out and back in.
    */
    backgroundStyle: "fade",

    /*
        Should the log be visible? Handy for debugging!
    */
    enableLog: true,
}

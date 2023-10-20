let isHomePage = true,
    isDiscoverPage = false,
    isAboutPage = false;

var interval = setInterval(windowPosition, 100);

function getDiscoverButton()
{
    window.scrollTo({
        top: 1080, behavior: "smooth"
    });
    document.getElementById("id-discoveryButton").disabled = true;
}

function getQuizButton()
{
    alert("Botão Quiz");
}

function getAboutButton()
{
    window.scrollTo({
        top: 2160, behavior: "smooth"
    });
}

function getLogoClick()
{
    window.scrollTo({
        top: 0, behavior: "smooth"
    });
}

function windowPosition()
{
    var position = window.scrollY;
    var scroll = document.getElementById("id-scrollInstruction");

    if(position > 0 && position < 1080)
    {
        document.getElementById("id-discoveryButton").disabled = false;
        document.getElementById("id-aboutButton").disabled = false;
    }

    if(position >= 1080 && position < 2160)
    {
        document.getElementById("id-discoveryButton").disabled = true;
        document.getElementById("id-aboutButton").disabled = false;

    }

    if(position >= 2160)
    {
        document.getElementById("id-discoveryButton").disabled = false;
        document.getElementById("id-aboutButton").disabled = true;
    }
}
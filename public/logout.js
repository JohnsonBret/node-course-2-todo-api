async function logout() {

    var auth = sessionStorage.getItem("xauth");
        
    const rawResponse = await fetch('/users/me/token', {
        method: 'DELETE',
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'x-auth': auth
        }
    });
    const content = await rawResponse.status;

    console.log(content);
    showSignOutComplete();

};

async function showSignOutComplete()
{
    var loggingOutSection = document.getElementById("loggingOut");
    loggingOutSection.setAttribute("style", "display: none");

    var signOutCompleteSection = document.getElementById("signOutComplete");
    signOutCompleteSection.setAttribute("style", "display: flex");
}
$("#modal-jquery-simple-button").click(function () {
    Roblox.Dialog.open({
        titleText: "Error",
        bodyContent: "You must be on the corporate network to preform this action.",
        footerText: "Please reload this page once you've connected.",
        acceptText: "Accept",
        declineText: "Decline",
        xToCancel: true
    });
});

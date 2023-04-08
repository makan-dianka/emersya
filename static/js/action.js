function viewerEvent() {
    viewerIframe = document.getElementById('emersyaIframe').contentWindow;
    viewerIframe.postMessage({action : "registerCallback"}, "*");
    viewerIframe.postMessage({
        action : 'setMaterialsGroup',
        configurationName : 'nero',
        groupName : 'Fabric'
    }, '*');
}

viewerEvent()
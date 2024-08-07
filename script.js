var _launchButton = document.getElementById('launch-btn'),
    _loaderDiv = document.getElementById('pp-loader'),
    _previewDiv = document.getElementById('pp-preview-div');

var ppclient = new PitchPrintClient({
    apiKey: 'key_26edfc2cb57d64ce529a3a9e098c63bd',
    designId: '3d8f3899904ef2392795c681091600d0',
    custom: true,
});

var appValidation = () => {
    _launchButton.removeAttribute('disabled');
    _launchButton.onclick =() => ppclient.showApp();
    _loaderDiv.style.display = 'none';
    }

ppclient.on('app-validation', appValidation);
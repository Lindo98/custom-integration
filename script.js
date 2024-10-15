var _launchButton = document.getElementById("launch_btn");
_previewDiv = document.getElementById("pp_preview_div");
_loaderDiv = document.getElementById("pp_loader_div");

// this is to disable the launch button until PitchPrint is ready for use
_launchButton.setAttribute("disabled", "disabled");

// initializing PitchPrint (used my own API key and design ID)
var ppClient = new PitchPrintClient({
  apiKey: "key_26edfc2cb57d64ce529a3a9e098c63bd",
  designId: "d42302b363615e5572feae8060eed01c",
  custom: true,
});

// This function will run/launch the app once it's ready for use
var appValidated = () => {
  _launchButton.removeAttribute("disabled");
  _launchButton.onclick = () => ppClient.showApp();
  _loaderDiv.style.display = "none";
};

// This function will run when the app has been used and user has saved some projects
var projectSaved = (_val) => {
  let _data = _val.data;
  if (_data && _data.previews && _data.previews.length) {
    _previewDiv.innerHTML = _data.previews.reduce(
      (_str) => `${_str}<img src="${_prev}" />`,
      ""
    );
  }
};

ppClient.on("app-validated", appValidated);
ppClient.on("project-saved", projectSaved);

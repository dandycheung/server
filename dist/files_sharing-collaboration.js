/*! For license information please see files_sharing-collaboration.js.LICENSE.txt */
(()=>{var i={p:"/dist/"};i.p=OC.linkTo("files_sharing","js/dist/"),i.nc=btoa(OC.requestToken),window.OCP.Collaboration.registerType("file",{action:()=>new Promise(((i,e)=>{OC.dialogs.filepicker(t("files_sharing","Link to a file"),(function(n){OC.Files.getClient().getFileInfo(n).then(((e,n)=>{i(n.id)})).fail((()=>{e(new Error("Cannot get fileinfo"))}))}),!1,null,!1,OC.dialogs.FILEPICKER_TYPE_CHOOSE,"",{allowDirectoryChooser:!0})})),typeString:t("files_sharing","Link to a file"),typeIconClass:"icon-files-dark"})})();
//# sourceMappingURL=files_sharing-collaboration.js.map?v=1b8743b842c714ea2f75
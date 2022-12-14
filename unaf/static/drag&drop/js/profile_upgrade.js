jQuery('#file-es').fileinput({
        theme: 'fas',
        language: 'es',
        allowedFileExtensions: ['jpg', 'png', 'jpeg'],
        maxFileCount: 1,
        resizeIfSizeMoreThan: 50,
        uploadAsync: true,
        showCaption:false,
        showRemove: true,
        showClose: false,
        showBrowse: false,
        showUpload: true,
        browseOnZoneClick: true,
        showUploadedThumbs: true,
        uploadLabel: "Aceptar",
        removeLabel:"Borrar",
        uploadClass: "btn btn-gradient btn-md border-radius-5 px-2 ml-2",
        removeClass: "btn btn-secondary bg-secondary btn-md px-2 border-radius-5",
        //previewClass: "bg-white",
});
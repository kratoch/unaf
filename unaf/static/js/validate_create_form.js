//script for validate numbers on input_text

/*jQuery(':input').focusout(function() {
    var inptcod = jQuery(".emptyCod").val();
    var inptArt = jQuery(".emptyArt").val();
    if (inptcod === '' || inptArt === '') {
        jQuery('.alertDel').remove();
        jQuery('<div class="alert alert-rounded alertDel fade alert-warning alert-dismissible text-left font__family-montserrat font__size-16 font__weight-light brk-library-rendered rendered show" role="alert">' +
            '<button type="button" class="close font__size-18 alertDel" data-dismiss="alert">' +
            '<span aria-hidden="true"><i class="fal fa-times"></i></span>' +
            '<span class="sr-only">Close</span>' +
            '</button><i class="start-icon far fa-exclamation-triangle"></i>' +
            '<strong class="font__weight-semibold">Atención!</strong> Alguno de los <strong>campos obligatorios</strong> están <strong>vacíos</strong>.</div>').appendTo('.alerts');
            document.getElementById("btnSend").disabled = true;
    }else{
        jQuery('.alertDel').remove();
        document.getElementById("btnSend").disabled = false
    }
});*/
jQuery(':input').focusout(function(){
    var codInpt = jQuery("#codInpt").val();
    var denomInpt = jQuery("#denomInpt").val();
    if(codInpt !== '' && denomInpt !== ''){
        jQuery('.alertDel').remove();
    }
});

jQuery("#priceInpt").on({
    "focus": function (event) {
        jQuery('<div class="alert adviceDel fade alert-rounded alert-info alert-dismissible text-left font__family-montserrat font__size-16 font__weight-light brk-library-rendered rendered show" role="alert">' +
               '<button type="button" class="close font__size-18" data-dismiss="alert">' +
                    '<span aria-hidden="true"><i class="fal fa-times"></i></span>' +
                    '<span class="sr-only">Cerrar</span>' +
               '</button>' +
               '<i class="start-icon fas fa-hand-point-up"></i>' +
               '<strong class="font__weight-semibold">Verifique</strong> los <strong class="font__weight-semibold">valores decimales</strong> del precio <br> antes de continuar.' +
               '</div>').appendTo('.advice1');
        jQuery(event.target).select()
    },
    'focusout': function () {
        jQuery('.adviceDel').remove()
    },
    "keyup": function (event) {
        jQuery(event.target).val(function (index, value ) {
            return value.replace(/\D/g, "")
                        .replace(/([0-9])([0-9]{2})$/, '$1.$2')
                        .replace(/\B(?=(\d{3})+(?!\d)\.?)/g, ",");
        });
    }
});
jQuery("#specialPrice").on({
    "focus": function (event) {
        jQuery('<div class="alert adviceDel fade alert-rounded alert-info alert-dismissible text-left font__family-montserrat font__size-16 font__weight-light brk-library-rendered rendered show" role="alert">' +
               '<button type="button" class="close font__size-18" data-dismiss="alert">' +
                    '<span aria-hidden="true"><i class="fal fa-times"></i></span>' +
                    '<span class="sr-only">Cerrar</span>' +
               '</button>' +
               '<i class="start-icon fas fa-hand-point-up"></i>' +
               '<strong class="font__weight-semibold">Verifique</strong> los <strong class="font__weight-semibold">valores decimales</strong> del precio <br> antes de continuar.' +
               '</div>').appendTo('.advice2');
        jQuery(event.target).select()
    },
    'focusout': function () {
        jQuery('.adviceDel').remove();
        var priceInpt = jQuery('#priceInpt').val();
        var specialPrice = jQuery('#specialPrice').val();
        for (var i = 0; i < 4; i++) {
            specialPrice = specialPrice.replace(',', '');
            priceInpt = priceInpt.replace(',', '');
        }
        specialPrice = parseFloat(specialPrice);
        priceInpt = parseFloat(priceInpt);
        if (priceInpt <= specialPrice){
            jQuery('#specialPrice').focus();
            jQuery('.adviceDel').remove();
            jQuery('<div class="alert adviceDel fade alert-warning alert-dismissible text-left font__family-montserrat font__size-16 font__weight-light brk-library-rendered rendered show" role="alert">' +
                   '<button type="button" class="close font__size-18" data-dismiss="alert">' +
                        '<span aria-hidden="true"><i class="fal fa-times"></i></span>' +
                        '<span class="sr-only">Cerrar</span>' +
                   '</button>' +
                   '<i class="start-icon far fa-exclamation-triangle"></i>' +
                   '<strong class="font__weight-semibold">Atención!</strong> el ' +
                   'valor del precio especial debe ser menor al precio' +
                   '</div>').appendTo('.advice2');
        }
    },
    "keyup": function (event) {
        jQuery(event.target).val(function (index, value ) {
            return value.replace(/\D/g, "")
                        .replace(/([0-9])([0-9]{2})$/, '$1.$2')
                        .replace(/\B(?=(\d{3})+(?!\d)\.?)/g, ",");
        });
    }
});

jQuery("#specialPriceUpd").on({
    "focus": function (event) {
        jQuery('<div class="alert adviceDel fade alert-rounded alert-info alert-dismissible text-left font__family-montserrat font__size-16 font__weight-light brk-library-rendered rendered show" role="alert">' +
               '<button type="button" class="close font__size-18" data-dismiss="alert">' +
                    '<span aria-hidden="true"><i class="fal fa-times"></i></span>' +
                    '<span class="sr-only">Cerrar</span>' +
               '</button>' +
               '<i class="start-icon fas fa-hand-point-up"></i>' +
               '<strong class="font__weight-semibold">Verifique</strong> los <strong class="font__weight-semibold">valores decimales</strong> del precio <br> antes de continuar.' +
               '</div>').appendTo('.advice2');
        jQuery(event.target).select()
    },
    'focusout': function () {
        jQuery('.adviceDel').remove();
        var priceUpd = jQuery('#priceUpd').val();
        var specialPriceUpd = jQuery('#specialPriceUpd').val();
        for (var i = 0; i < 4; i++) {
            specialPriceUpd = specialPriceUpd.replace('.', ',');
            priceUpd = priceUpd.replace('.', ',');
        }
        specialPriceUpd = parseFloat(specialPriceUpd);
        priceUpd = parseFloat(priceUpd);
        if (priceUpd <= specialPriceUpd){
            jQuery('#specialPriceUpd').focus();
            jQuery('.adviceDel').remove();
            jQuery('<div class="alert adviceDel fade alert-warning alert-dismissible text-left font__family-montserrat font__size-16 font__weight-light brk-library-rendered rendered show" role="alert">' +
                   '<button type="button" class="close font__size-18" data-dismiss="alert">' +
                        '<span aria-hidden="true"><i class="fal fa-times"></i></span>' +
                        '<span class="sr-only">Cerrar</span>' +
                   '</button>' +
                   '<i class="start-icon far fa-exclamation-triangle"></i>' +
                   '<strong class="font__weight-semibold">Atención!</strong> el ' +
                   'valor del precio especial debe ser menor al precio' +
                   '</div>').appendTo('.advice2');
        }
    },
    "keyup": function (event) {
        jQuery(event.target).val(function (index, value ) {
            return value.replace(/\D/g, "")
                        .replace(/([0-9])([0-9]{2})$/, '$1.$2')
                        .replace(/\B(?=(\d{3})+(?!\d)\.?)/g, ",");
        });
    }
});

function enableSpecPrice() {
    var chck = document.getElementById('specialCheck');
    if (chck.checked && jQuery('#priceInpt').val().length <= 0) {
        jQuery('#priceInpt').focus();
        jQuery('.adviceDel').remove();
        jQuery('<div class="alert adviceDel fade alert-warning alert-dismissible text-left font__family-montserrat font__size-16 font__weight-light brk-library-rendered rendered show" role="alert">' +
                '<button type="button" class="close font__size-18" data-dismiss="alert">' +
                     '<span aria-hidden="true"><i class="fal fa-times"></i></span>' +
                     '<span class="sr-only">Cerrar</span>' +
                '</button>' +
                '<i class="start-icon far fa-exclamation-triangle"></i>' +
                '<strong class="font__weight-semibold">Atención!</strong> el ' +
                'valor del precio no puede ser cero' +
                '</div>').appendTo('.advice1');
        jQuery('#specialCheck').prop('checked', false)
    }else if(chck.checked){
        jQuery('#specialPrice').prop('disabled', false).prop('placeholder', 'Ingrese precio especial');
    }else{
        jQuery('#specialPrice').prop('disabled', true).prop('placeholder', '').prop('value', '');
    }
}

function enableSpecPriceUpd() {
    var chck = document.getElementById('specialCheck');
    if (chck.checked && jQuery('#priceUpd').val().length <= 0) {
        jQuery('#priceUpd').focus();
        jQuery('.adviceDel').remove();
        jQuery('<div class="alert adviceDel fade alert-warning alert-dismissible text-left font__family-montserrat font__size-16 font__weight-light brk-library-rendered rendered show" role="alert">' +
                '<button type="button" class="close font__size-18" data-dismiss="alert">' +
                     '<span aria-hidden="true"><i class="fal fa-times"></i></span>' +
                     '<span class="sr-only">Cerrar</span>' +
                '</button>' +
                '<i class="start-icon far fa-exclamation-triangle"></i>' +
                '<strong class="font__weight-semibold">Atención!</strong> el ' +
                'valor del precio no puede ser cero' +
                '</div>').appendTo('.advice1');
        jQuery('#specialCheck').prop('checked', false)
    }else if(chck.checked){
        jQuery('#specialPriceUpd').prop('disabled', false).prop('placeholder', 'Ingrese precio especial');
    }else{
        jQuery('#specialPriceUpd').prop('disabled', true).prop('placeholder', '').prop('value', '');
    }
}

function enableLocation(){
    var chck = document.getElementById('locationCheck');
    if (chck.checked){
        jQuery('.zipcode').prop('disabled', false).prop('placeholder', 'Código Postal');
        jQuery('.city').prop('disabled', false).prop('placeholder', 'Ciudad');
        jQuery('.province').prop('disabled', false).prop('placeholder', 'Provincia');
    }else{
        jQuery('.zipCode').prop('disabled', true).prop('placeholder', '').prop('value', '');
        jQuery('.city').prop('placeholder', '').prop('disabled', true).prop('value', '');
        jQuery('.province').prop('disabled', true).prop('placeholder', '').prop('value', '')
    }
}
jQuery('.zipcode').on('input', function () {
            this.value = this.value.replace(/[^0-9]/g,'');
        });
function imageUpload() {
    var chck = document.getElementById('imageCheck');
    if (chck.checked){
        jQuery('<div class="alert adviceDel fade alert-rounded alert-secondary alert-dismissible text-left font__family-montserrat font__size-16 font__weight-light brk-library-rendered rendered show" role="alert">' +
               '<button type="button" class="close font__size-18" data-dismiss="alert">' +
                    '<span aria-hidden="true"><i class="fal fa-times"></i></span>' +
                    '<span class="sr-only">Cerrar</span>' +
               '</button>' +
               '<i class="start-icon far fa-life-ring"></i>' +
               '<strong class="font__weight-semibold">Atención:</strong> se procedera a la carga de <strong class="font__weight-semibold">imágenes</strong> una vez que se haya enviado el formulario.' +
               '</div>').appendTo('.advice3');
        jQuery('<input class="hiddenimgInpt" type="text" name="imgCheck" value="1" hidden>').appendTo('.checkInpt')
    }else{
        jQuery('.hiddenimgInpt').remove();
        jQuery('.adviceDel').remove()
    }
}

/*function dolarPrice() {
    var chck = document.getElementById('dolarPrice');
    if (chck.checked){
        jQuery('.hiddenDolarInpt').remove();
        jQuery('<input class="hiddenDolarInpt" type="text" name="dolarCheck" value="1" hidden>').appendTo('.checkDolar')
    }else{
        jQuery('.hiddenDolarInpt').remove();
        jQuery('<input class="hiddenDolarInpt" type="text" name="dolarCheck" value="2" hidden>').appendTo('.checkDolar')
    }
}*/

jQuery('#btnSend').click(function () {

    var codInpt = jQuery("#codInpt").val();
    var denomInpt = jQuery("#denomInpt").val();
    var chckDolar = document.getElementById('dolarPrice');

    try {
      var chckPesos = document.getElementById('pesosPrice');
    }
    catch(error) {
        console.error(error);
    }
    try {
      var priceUpd = jQuery('#priceUpd').val();
    }
    catch(error) {
        console.error(error);
    }
    try {
      var priceInpt = jQuery('#priceInpt').val();
    }
    catch(error) {
        console.error(error);
    }
    try {
      var specialPrice = jQuery('#specialPrice').val();
    }
    catch(error) {
        console.error(error);
    }
    try {
      var specialPriceUpd = jQuery('#specialPriceUpd').val();
    }
    catch(error) {
        console.error(error);
    }
    var zipcode = jQuery('.zipCode').val();
    var city = jQuery('.city').val();
    var province = jQuery('.province').val();
    var chkimg = jQuery(".hiddenimgInpt").val();

    if (codInpt === '' || denomInpt === '') {
        jQuery('.alertDel').remove();
        jQuery('<div class="alert alert-rounded alertDel fade alert-warning alert-dismissible text-left font__family-montserrat font__size-16 font__weight-light brk-library-rendered rendered show" role="alert">' +
            '<button type="button" class="close font__size-18 alertDel" data-dismiss="alert">' +
            '<span aria-hidden="true"><i class="fal fa-times"></i></span>' +
            '<span class="sr-only">Cerrar</span>' +
            '</button><i class="start-icon far fa-exclamation-triangle"></i>' +
            '<strong class="font__weight-semibold">Atención!</strong> Alguno de los <strong>campos obligatorios</strong> están <strong>vacíos</strong>.</div>').appendTo('.alerts');
        jQuery('#codInpt').focus();
    }else {
        jQuery('#modalConfirm').modal('show');
        jQuery('<input type="text" name="codInpt" value="' + codInpt + '" hidden>' +
            '<input type="text" name="imgCheck" value="' + chkimg + '" hidden>' +
            '<span class="textbefore"></span>' +
            '<a>Código: ' + codInpt + '</a>' +
            '<img src="/../static/img/shape-1.png" alt="alt" class="list-shape">' +
            '<span class="after"></span>').appendTo('#codeModal');
        jQuery('<input type="text" name="denomInpt" value="' + denomInpt + '" hidden>' +
            '<span class="before"></span>' +
            '<a>Artículo: ' + denomInpt + '</a>' +
            '<img src="/../static/img/shape-1.png" alt="alt" class="list-shape">' +
            '<span class="after"></span>').appendTo('#descModal');
    }
    if (priceInpt) {
        if (chckPesos && chckPesos.checked) {
            jQuery('<input type="text" name="priceInpt" value="' + priceInpt + '" hidden>' +
                '<input type="text" name="dolarInpt" value="1" hidden>' +
                '<span class="before"></span>' +
                '<a>Precio: $ ' + priceInpt + '</a>' +
                '<img src="/../static/img/shape-1.png" alt="alt" class="list-shape">' +
                '<span class="after"></span>').appendTo('#priceModal');
        } else if (chckPesos) {
            jQuery('<input type="text" name="priceInpt" value="' + priceInpt + '" hidden>' +
                '<input type="text" name="dolarInpt" value="2" hidden>' +
                '<span class="before"></span>' +
                '<a>Precio: U$D ' + priceInpt + '</a>' +
                '<img src="/../static/img/shape-1.png" alt="alt" class="list-shape">' +
                '<span class="after"></span>').appendTo('#priceModal');
        }
        if (chckDolar && chckDolar.checked) {
            jQuery('<input type="text" name="priceInpt" value="' + priceInpt + '" hidden>' +
                '<input type="text" name="dolarInpt" value="2" hidden>' +
                '<span class="before"></span>' +
                '<a>Precio: U$D ' + priceInpt + '</a>' +
                '<img src="/../static/img/shape-1.png" alt="alt" class="list-shape">' +
                '<span class="after"></span>').appendTo('#priceModal');
        } else if (chckDolar) {
            jQuery('<input type="text" name="priceInpt" value="' + priceInpt + '" hidden>' +
                '<input type="text" name="dolarInpt" value="1" hidden>' +
                '<span class="before"></span>' +
                '<a>Precio: $ ' + priceInpt + '</a>' +
                '<img src="/../static/img/shape-1.png" alt="alt" class="list-shape">' +
                '<span class="after"></span>').appendTo('#priceModal');
        }
    } else if (priceUpd) {
        if (chckPesos && chckPesos.checked) {
            jQuery('<input type="text" name="priceUpd" value="' + priceUpd + '" hidden>' +
                '<input type="text" name="dolarInpt" value="1" hidden>' +
                '<span class="before"></span>' +
                '<a>Precio: $ ' + priceUpd + '</a>' +
                '<img src="/../static/img/shape-1.png" alt="alt" class="list-shape">' +
                '<span class="after"></span>').appendTo('#priceModal');
        } else if (chckPesos) {
            jQuery('<input type="text" name="priceUpd" value="' + priceUpd + '" hidden>' +
                '<input type="text" name="dolarInpt" value="2" hidden>' +
                '<span class="before"></span>' +
                '<a>Precio: U$D ' + priceUpd + '</a>' +
                '<img src="/../static/img/shape-1.png" alt="alt" class="list-shape">' +
                '<span class="after"></span>').appendTo('#priceModal');
        }
        if (chckDolar && chckDolar.checked) {
            jQuery('<input type="text" name="priceUpd" value="' + priceUpd + '" hidden>' +
                '<input type="text" name="dolarInpt" value="2" hidden>' +
                '<span class="before"></span>' +
                '<a>Precio: U$D ' + priceUpd + '</a>' +
                '<img src="/../static/img/shape-1.png" alt="alt" class="list-shape">' +
                '<span class="after"></span>').appendTo('#priceModal');
        } else if (chckDolar) {
            jQuery('<input type="text" name="priceUpd" value="' + priceUpd + '" hidden>' +
                '<input type="text" name="dolarInpt" value="1" hidden>' +
                '<span class="before"></span>' +
                '<a>Precio: $ ' + priceUpd + '</a>' +
                '<img src="/../static/img/shape-1.png" alt="alt" class="list-shape">' +
                '<span class="after"></span>').appendTo('#priceModal');
        }
    } else {
        jQuery('<span class="before"></span>' +
            '<a>Sin Precio</a>' +
            '<img src="/../static/img/shape-1.png" alt="alt" class="list-shape">' +
            '<span class="after"></span>').appendTo('#priceModal');
    }

    if (specialPrice) {
        if (chckPesos && chckPesos.checked) {
            jQuery('<input type="text" name="specPriceInpt" value="' + specialPrice + '" hidden>' +
                '<span class="before"></span>' +
                '<a>Precio Especial: U$D ' + specialPrice + '</a>' +
                '<img src="/../static/img/shape-1.png" alt="alt" class="list-shape">' +
                '<span class="after"></span>').appendTo('#specPriceModal');
        } else if (chckPesos) {
            jQuery('<input type="text" name="specPriceInpt" value="' + specialPrice + '" hidden>' +
                '<span class="before"></span>' +
                '<a>Precio Especial: $ ' + specialPrice + '</a>' +
                '<img src="/../static/img/shape-1.png" alt="alt" class="list-shape">' +
                '<span class="after"></span>').appendTo('#specPriceModal');
        }
        if (chckDolar && chckDolar.checked) {
            jQuery('<input type="text" name="specPriceInpt" value="' + specialPrice + '" hidden>' +
                '<span class="before"></span>' +
                '<a>Precio Especial: U$D ' + specialPrice + '</a>' +
                '<img src="/../static/img/shape-1.png" alt="alt" class="list-shape">' +
                '<span class="after"></span>').appendTo('#specPriceModal');
        } else if (chckDolar) {
            jQuery('<input type="text" name="specPriceInpt" value="' + specialPrice + '" hidden>' +
                '<span class="before"></span>' +
                '<a>Precio Especial: $ ' + specialPrice + '</a>' +
                '<img src="/../static/img/shape-1.png" alt="alt" class="list-shape">' +
                '<span class="after"></span>').appendTo('#specPriceModal');
        }
    } else if (specialPriceUpd) {
        if (chckPesos && chckPesos.checked) {
            jQuery('<span class="before"></span>' +
                '<a>Precio Especial: $ ' + specialPriceUpd + '</a>' +
                '<img src="/../static/img/shape-1.png" alt="alt" class="list-shape">' +
                '<span class="after"></span>').appendTo('#specPriceModal');
        } else if (chckPesos) {
            jQuery('<span class="before"></span>' +
                '<a>Precio Especial: U$D ' + specialPriceUpd + '</a>' +
                '<img src="/../static/img/shape-1.png" alt="alt" class="list-shape">' +
                '<span class="after"></span>').appendTo('#specPriceModal');
        }
        if (chckDolar && chckDolar.checked) {
            jQuery('<span class="before"></span>' +
                '<a>Precio Especial: U$D ' + specialPriceUpd + '</a>' +
                '<img src="/../static/img/shape-1.png" alt="alt" class="list-shape">' +
                '<span class="after"></span>').appendTo('#specPriceModal');
        } else if (chckDolar) {
            jQuery('<span class="before"></span>' +
                '<a>Precio Especial: $ ' + specialPriceUpd + '</a>' +
                '<img src="/../static/img/shape-1.png" alt="alt" class="list-shape">' +
                '<span class="after"></span>').appendTo('#specPriceModal');
        }
    }else {
        jQuery('<span class="before"></span>' +
            '<a>Sin Precio Especial</a>' +
            '<img src="/../static/img/shape-1.png" alt="alt" class="list-shape">' +
            '<span class="after"></span>').appendTo('#specPriceModal');
    }

    if (zipcode) {
        jQuery('<span class="before"></span>' +
            '<a>Codigo Postal:' + zipcode + '</a>' +
            '<img src="/../static/img/shape-1.png" alt="alt" class="list-shape">' +
            '<span class="after"></span><br>' +
            '<a>Ciudad:' + city + '</a>' +
            '<img src="/../static/img/shape-1.png" alt="alt" class="list-shape">' +
            '<span class="after"></span><br>' +
            '<a>Provincia:' + province + '</a>' +
            '<img src="/../static/img/shape-1.png" alt="alt" class="list-shape">' +
            '<span class="after"></span><br>').appendTo('#locationModal');
    } else {
        jQuery('<span class="before"></span>' +
            '<a>Sin Locación</a>' +
            '<img src="/../static/img/shape-1.png" alt="alt" class="list-shape">' +
            '<span class="after"></span>').appendTo('#locationModal');
    }

    var specInptfull = jQuery("#specInpt").val();
    var specInpt = specInptfull.substring(0, 39);

    if (specInpt) {
            jQuery('<span class="before"></span>' +
                '<a>Descripción: ' + specInpt + '</a>' +
                '<img src="/../static/img/shape-1.png" alt="alt" class="list-shape">' +
                '<span class="after"></span>').appendTo('#specModal');
        } else {
            jQuery('<span class="before"></span>' +
                '<a>Sin Descripción</a>' +
                '<img src="/../static/img/shape-1.png" alt="alt" class="list-shape">' +
                '<span class="after"></span>').appendTo('#specModal')
        }
});

jQuery("#btnYes").click(function() {
    jQuery("#objectForm").submit();
});
jQuery('#btnNo').click(function () {
    jQuery('#codeModal').empty();
    jQuery('#descModal').empty();
    jQuery('#priceModal').empty();
    jQuery('#specPriceModal').empty();
    jQuery('#specModal').empty();
    jQuery('#locationModal').empty();
});
jQuery('.close').click(function () {
    jQuery('#codeModal').empty();
    jQuery('#descModal').empty();
    jQuery('#priceModal').empty();
    jQuery('#specPriceModal').empty();
    jQuery('#specModal').empty();
    jQuery('#locationModal').empty();
});

jQuery('input[class^="class"]').click(function () {
	var jQuerythis = jQuery(this);
	if (jQuerythis.is(".class1")) {
		if (jQuery(this).prop("checked") === true) {
			jQuery(".class2").prop({ disabled: false, checked: true });
			jQuery(".class3").prop({ disabled: false, checked: true });
		}
		else if (jQuery(this).prop("checked") === false) {
			jQuery(".class2").prop({ disabled: false, checked: false });
			jQuery(".class3").prop({ disabled: false, checked: false });
		}
	} else if (jQuerythis.is(".class2") || jQuerythis.is(".class3")) {

		if (jQuery('#wcatcbll_cart_shop').prop("checked") === true && jQuery('#wcatcbll_cart_single_product').prop("checked") === true) {

			jQuery(".class1").prop({ disabled: false, checked: true });

		} else if (jQuery('#wcatcbll_cart_shop').prop("checked") === false && jQuery('#wcatcbll_cart_single_product').prop("checked") === false) {

			jQuery(".class1").prop({ disabled: false, checked: false });

		} else {
			jQuery(".class1").prop({ disabled: false, checked: false });
		}
	}
});


//Use Function only color picker
(function (jQuery) {
	// Add Color Picker to all inputs that have 'color-field' class
	jQuery(function () {
		jQuery('.color-picker').wpColorPicker();
	});
})(jQuery);

//change instant button style 
jQuery(document).ready(function () {
	//use for select button radius
	jQuery("#wcatcbll_select").change(function () {
		var btn_radius = jQuery(this).children('option:selected').val();
		jQuery("#btn_prvw").css({ "border-radius": btn_radius });
	});
	//use for select button 2dTransitions
	jQuery("#wcatcbll_btn_2Dhvr").change(function () {
		var btn_2danmtn = jQuery(this).children('option:selected').val();
		var hdn_cls_pre = jQuery('#hide_class_2dhvr').val();
		jQuery("#btn_prvw").removeClass(hdn_cls_pre).addClass(btn_2danmtn);
		jQuery('#hide_class_2dhvr').val(btn_2danmtn);

	});
	//use for select button bg Transitions
	jQuery("#wcatcbll_btn_bghvr").change(function () {
		var btnprop = jQuery("#wcatcbll_select").children('option:selected').val();
		var hvrclr = jQuery("#btn_hvr").val();
		var btn_bghvr = jQuery(this).children('option:selected').val();
		var hdn_cls_pre = jQuery('#hide_class_hvr').val();
		jQuery('#btn_prvw').append('<style>.' + btn_bghvr + ':before{border-radius:' + btnprop + '!important;background:' + hvrclr + '!important}</style>');
		jQuery("#btn_prvw").removeClass(hdn_cls_pre).addClass(btn_bghvr);
		jQuery('#hide_class_hvr').val(btn_bghvr);

	});
	//use for select button radius
	jQuery("#wcatcll_font_icon").change(function () {
		var btn_icon = jQuery(this).children('option:selected').val();
		var btn_iconpsn = jQuery('#wcatcbll_btn_icon_psn').children('option:selected').val();
		if (btn_iconpsn === 'right') {
			jQuery("#btn_prvw").html('Add to Cart <i class="fa ' + btn_icon + '"></i>');
		}
		else {
			jQuery("#btn_prvw").html('<i class="fa ' + btn_icon + '"></i> Add to Cart');
		}

	});
	//use for select button radius
	jQuery("#wcatcbll_btn_icon_psn").change(function () {
		var btn_iconpsn = jQuery(this).children('option:selected').val();
		var btn_icon = jQuery('#wcatcll_font_icon').children('option:selected').val();
		if (btn_iconpsn === 'right') {
			jQuery("#btn_prvw").html('Add to Cart <i class="fa ' + btn_icon + '"></i>');
		}
		else {
			jQuery("#btn_prvw").html('<i class="fa ' + btn_icon + '"></i> Add to Cart');
		}

	});
	//use for color picker
	jQuery("body").click(function () {
		var btn_bg = jQuery('.color-picker').val();
		var btn_fclr = jQuery('#color_piker').val();
		var btn_border = jQuery('#border_color').val();
		jQuery("#btn_prvw").css({ "background": btn_bg, "color": btn_fclr, 'border-color': btn_border });
	});
	//use for button size
	jQuery(document).on('change', function () {
		var btn_size = jQuery('#btn_txt_prv').val();
		var border_size = jQuery('#border_btn').val();
		jQuery('#btn_prvw').css({ "font-size": btn_size + 'px', 'border-width': border_size + 'px' });
	});


});




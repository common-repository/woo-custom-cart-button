//font ranger
var rangeSlider = function(){
  var slider = jQuery('.wcatcbll_range_slider'),
      range = jQuery('.wcatcbll_range_slider_range'),
      value = jQuery('.wcatcbll_range_slider_value');
    
  slider.each(function(){

    value.each(function(){
      var value = jQuery(this).prev().attr('name');
      var value1 = jQuery(this).prev().attr('value');
      jQuery(this).html(value1+'px');
    });

    range.on('input', function(){
      jQuery(this).next(value).html(this.value+'px');
    });
  });
};

rangeSlider();

//ranger fill by color
jQuery('input[type="range"]').on("change mousemove", function () {
    var val = (jQuery(this).val() - jQuery(this).attr('min')) / (jQuery(this).attr('max') - jQuery(this).attr('min'));
    jQuery(this).css('background-image',
                '-webkit-gradient(linear, left top, right top, '
                + 'color-stop(' + val + ', #2f466b), '
                + 'color-stop(' + val + ', #d3d3db)'
                + ')'
                );
});
/**
 * JQuery plugin to transform input in <input> or <textarea> automatically to uppercase and
 * delete acuted chars
 *
 * @author Jaime Hablutzel
 */

(function($) {
    $.fn.mayusculassintildes = function(settings) {
        this.each(function () {
            var $this = $(this);
            if ($this.is('textarea') || $this.is('input:text')) {
                $this.keypress(function (e) {
                    var pressedKey = e.charCode == undefined ? e.keyCode : e.charCode;
                    // caracteres tildados a su equivalente sin tilde
                    (pressedKey == 225 || pressedKey == 193) ? pressedKey = 97 : ""; //a
                    (pressedKey == 233 || pressedKey == 201) ? pressedKey = 101 : "";//e
                    (pressedKey == 237 || pressedKey == 205) ? pressedKey = 105 : "";   //i
                    (pressedKey == 243 || pressedKey == 211) ? pressedKey = 111 : "";//o
                    (pressedKey == 250 || pressedKey == 218) ? pressedKey = 117 : "";   //u
                    var str = String.fromCharCode(pressedKey);

                    // restrictive REGEX
                    if (str.match(/[a-zñ ]/i)) {
                        var startpos = this.selectionStart;
                        var endpos = this.selectionEnd;
                        this.value = this.value.substr(0, startpos) + str.toUpperCase() + this.value.substr(endpos);
                        this.setSelectionRange(startpos + 1, startpos + 1);
                    }
                    return false;

                });
            }
        });
    };

})(jQuery);